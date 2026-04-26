const contacts = [
  { label: 'Email',     value: 'hello@yaartist.ru',  emoji: '✉️', color: '#ff3cac' },
  { label: 'Телефон',   value: '+7 (922) 415-44-63',  emoji: '📞', color: '#3cf0ff' },
  { label: 'Instagram', value: '@yaartist',          emoji: '📸', color: '#f5c842' },
];

const partners = [
  { label: 'MediaHouse', img: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/9f7cfc08-566b-45da-b5ab-73c1809fac3a.png' },
  { label: 'TechVector', img: 'https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/9db51456-6cda-46ed-b75b-1a070971c46c.png' },
  { label: 'NordBureau', img: null },
  { label: 'Axis Studio', img: null },
  { label: 'Meridian', img: null },
  { label: 'DataFlow', img: null },
];

const ContactsSection = () => (
  <section id="contacts" className="relative py-32 overflow-hidden"
    style={{ background: '#06061a' }}>

    <div className="absolute bottom-0 left-0 right-0 divider-glow" />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      {/* CTA */}
      <div className="relative rounded-2xl border border-neon-pink/30 overflow-hidden p-16 mb-20 text-center"
        style={{ background: 'linear-gradient(135deg, rgba(26,10,61,.9) 0%, rgba(13,13,46,.95) 100%)' }}>

        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #ff3cac, #3cf0ff, transparent)' }} />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(168,85,247,.1) 0%, transparent 70%)' }} />

        {/* Мини-прожекторы */}
        {[20, 50, 80].map((l, i) => (
          <div key={i} className="absolute top-0 pointer-events-none"
            style={{
              left: `${l}%`, transform: 'translateX(-50%)',
              width: 120, height: '100%',
              clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
              background: ['rgba(255,60,172,.05)', 'rgba(255,255,255,.03)', 'rgba(60,240,255,.05)'][i],
            }} />
        ))}

        <div className="relative z-10">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-semibold">Не пропусти</div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Заявки<br />
            <span className="text-3d-gold">до 1-го числа каждого месяца</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-10">Результаты отборочных туров до 5-го числа каждого месяца.</p>
          <button
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold px-12 py-5 text-sm rounded-xl inline-block">
            Подать заявку →
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #3cf0ff, transparent)' }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Контакты */}
        <div>
          <div className="text-neon-blue text-xs tracking-[0.3em] uppercase mb-8 font-semibold">Контакты</div>
          <div className="space-y-4">
            {contacts.map(c => (
              <div key={c.label}
                className="group flex items-center gap-4 rounded-xl border border-white/10 p-4 cursor-pointer transition-all duration-300 hover:bg-white/3"
                onMouseEnter={e => (e.currentTarget.style.borderColor = c.color + '55')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '')}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: c.color + '15', border: `1px solid ${c.color}30` }}>
                  {c.emoji}
                </div>
                <div>
                  <div className="text-white/30 text-xs tracking-widest uppercase">{c.label}</div>
                  <div className="text-white font-semibold text-sm mt-0.5">{c.value}</div>
                </div>
                <div className="ml-auto text-white/20 group-hover:text-white/60 transition-colors text-sm">→</div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-5 rounded-xl border border-white/5 card-show">
            <div className="text-white/30 text-xs tracking-widest uppercase mb-2">Пресс-служба</div>
            <p className="text-white/60 text-sm">
              По вопросам СМИ и партнёрства: <span className="text-neon-blue">press@yaartist.ru</span>
            </p>
          </div>
        </div>

        {/* Партнёры */}
        <div>
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-8 font-semibold">Партнёры и жюри</div>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {partners.map(p => (
              <div key={p.label}
                className="rounded-xl border border-white/10 py-4 px-6 text-center text-white/40 text-sm hover:text-white/70 hover:border-white/20 transition-all duration-300 cursor-pointer card-show flex items-center justify-center">
                {p.img
                  ? <img src={p.img} alt={p.label} className="h-8 object-contain opacity-60 hover:opacity-90 transition-opacity" />
                  : p.label}
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl border border-gold/25 bg-gold/5">
            <div className="text-gold text-xs tracking-widest uppercase mb-3 font-semibold">Стать партнёром</div>
            <p className="text-white/60 text-sm mb-4">
              Поддержи лучших артистов года и стань частью истории «Я Артист».
            </p>
            <button className="text-gold text-sm tracking-wider uppercase hover:text-white transition-colors underline underline-offset-4">
              Условия партнёрства →
            </button>
          </div>
        </div>
      </div>

      {/* Футер */}
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold text-white text-3d-gold">Я - АРТИСТ</div>
        <div className="text-white/20 text-xs tracking-widest uppercase">© 2026 Я - Артист · Все права защищены</div>
      </div>
    </div>
  </section>
);

export default ContactsSection;