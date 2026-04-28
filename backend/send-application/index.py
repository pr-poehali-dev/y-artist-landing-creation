import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет заявку участника на email ya-artist@bk.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '')
    email = body.get('email', '')
    project = body.get('project', '')
    nomination = body.get('nomination', '')
    description = body.get('description', '')

    if not all([name, email, project, nomination, description]):
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните все поля'})
        }

    smtp_user = 'ya-artist@bk.ru'
    smtp_password = os.environ['EMAIL_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка: {nomination} — {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <h2>Новая заявка на конкурс «Я — Артист»</h2>
    <table cellpadding="8" style="border-collapse:collapse;">
      <tr><td><b>Имя:</b></td><td>{name}</td></tr>
      <tr><td><b>Email:</b></td><td>{email}</td></tr>
      <tr><td><b>Работа:</b></td><td>{project}</td></tr>
      <tr><td><b>Номинация:</b></td><td>{nomination}</td></tr>
      <tr><td><b>Описание:</b></td><td>{description}</td></tr>
    </table>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.mail.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }
