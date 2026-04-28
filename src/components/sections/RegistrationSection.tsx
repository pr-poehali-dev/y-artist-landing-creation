import { useState } from 'react';
import func2url from '@/../func2url.json';

const SEND_URL = func2url['send-application'];

const nominationList = [
  'Голос года',
  'Движение и пластика',
  'Театральный прорыв',
  'Магия ткани',
  'Живая сцена',
  'Творческий Олимп',
];

const RegistrationSection = () => {
  const [form, setForm] = useState({ name: '', email: '', project: '', nomination: '', description: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (submitted) {
    return (
      <section id="registration" className="relative py-32" style={{ background: '#06061a' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-16 glow-gold">
            <div className="text-6xl mb-6">🌟</div>
            <h3 className="text-3xl font-bold text-white mb-4">Заявка отправлена!</h3>
            <p className="text-white/60 mb-8">Мы свяжемся с вами в течение 3 рабочих дней для подтверждения участия.</p>
            <button onClick={() => setSubmitted(false)}
              className="btn-outline-pink px-8 py-3 text-sm rounded-lg">
              Подать ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="relative py-32 overflow-hidden"
      style={{ background: '#06061a' }}>

      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,60,172,.4))' }} />
      <div className="absolute left-0 top-1/2 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: '#a855f7' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-blue text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Участие</div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Подать<br />
            <span className="text-3d-gold">заявку</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-xl mx-auto">
            Приём заявок открыт до 1 сентября 2026. Заполни форму — мы рассмотрим каждую работу.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Этапы */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { num: '01', title: 'Подача заявки',  date: 'до 1-го числа каждого месяца', color: '#ff3cac' },
              { num: '02', title: 'Отбор жюри',     date: 'сентябрь–июнь', color: '#3cf0ff' },
              { num: '03', title: 'Объявление',     date: '5-го числа каждого месяца', color: '#f5c842' },
              { num: '04', title: 'Церемония',      date: '27 июня 2027', color: '#ff3cac' },
            ].map(step => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{ background: step.color + '20', color: step.color, border: `1px solid ${step.color}40` }}>
                  {step.num}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{step.title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{step.date}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Форма */}
          <form onSubmit={async e => {
            e.preventDefault();
            setLoading(true);
            setError('');
            try {
              const res = await fetch(SEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
              });
              if (!res.ok) throw new Error('Ошибка отправки');
              setSubmitted(true);
            } catch {
              setError('Не удалось отправить заявку. Попробуй ещё раз.');
            } finally {
              setLoading(false);
            }
          }}
            className="lg:col-span-3 space-y-4">

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Имя', key: 'name', type: 'text', placeholder: 'Алексей Громов' },
                { label: 'Email', key: 'email', type: 'email', placeholder: 'hello@example.com' },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">{f.label} *</label>
                  <input required type={f.type} placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors placeholder-white/20"
                    style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)' }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(255,60,172,.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,.1)')} />
                </div>
              ))}
            </div>

            <div>
              <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Название работы *</label>
              <input required placeholder="Мой проект" value={form.project}
                onChange={e => setForm({ ...form, project: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors placeholder-white/20"
                style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)' }}
                onFocus={e => (e.target.style.borderColor = 'rgba(255,60,172,.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,.1)')} />
            </div>

            <div>
              <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Номинация *</label>
              <select required value={form.nomination}
                onChange={e => setForm({ ...form, nomination: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                style={{ background: '#0d0d2e', border: '1px solid rgba(255,255,255,.1)' }}>
                <option value="">Выбери номинацию</option>
                {nominationList.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>

            <div>
              <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">О работе *</label>
              <textarea required rows={4} placeholder="Расскажи о работе и её значимости (не более 300 слов)"
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                className="w-full rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors resize-none placeholder-white/20"
                style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)' }}
                onFocus={e => (e.target.style.borderColor = 'rgba(255,60,172,.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,.1)')} />
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button type="submit" disabled={loading} className="btn-gold w-full py-4 text-sm rounded-lg disabled:opacity-60">
              {loading ? 'Отправляем...' : 'Отправить заявку →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;