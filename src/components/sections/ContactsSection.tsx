const ContactsSection = () => {
  const contacts = [
    { label: 'Email', value: 'hello@novaaward.ru', icon: '◈', color: '#bf5fff' },
    { label: 'Telegram', value: '@nova_award', icon: '⬡', color: '#00ffee' },
    { label: 'Instagram', value: '@novaaward', icon: '◎', color: '#ffd93d' },
  ];

  const partners = ['MediaHouse', 'TechVector', 'NordBureau', 'Axis Studio', 'Meridian', 'DataFlow'];

  return (
    <section id="contacts" className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* CTA-блок */}
        <div className="relative clip-polygon border border-neon-purple/30 bg-neon-purple/5 p-16 mb-20 text-center overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-neon-gold text-sm tracking-[0.3em] uppercase mb-6 font-medium">Не пропусти</div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Заявки<br/>
              <span className="text-neon-purple text-glow-purple">до 1 сентября</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-10">
              Осталось меньше 5 месяцев. Не откладывай — начни оформлять заявку прямо сейчас.
            </p>
            <button
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-neon-purple text-black font-black tracking-wider uppercase clip-polygon glow-purple hover:bg-white transition-all duration-300"
            >
              Подать заявку →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Контакты */}
          <div>
            <div className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-8 font-medium">Контакты</div>
            <div className="space-y-4">
              {contacts.map((c) => (
                <div
                  key={c.label}
                  className="group flex items-center gap-4 clip-polygon-sm border border-white/10 p-4 hover:border-opacity-60 transition-all duration-300 cursor-pointer"
                  style={{ '--hover-color': c.color } as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = c.color + '60')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
                >
                  <div
                    className="w-10 h-10 clip-polygon-sm flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: c.color + '15', color: c.color }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-white/30 text-xs tracking-widest uppercase">{c.label}</div>
                    <div className="text-white font-medium text-sm mt-0.5">{c.value}</div>
                  </div>
                  <div className="ml-auto text-white/20 group-hover:text-white/60 transition-colors text-sm">→</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 border border-white/5 clip-polygon-sm">
              <div className="text-white/30 text-xs tracking-widest uppercase mb-2">Пресс-служба</div>
              <p className="text-white/60 text-sm">По вопросам СМИ и партнёрства: <span className="text-neon-cyan">press@novaaward.ru</span></p>
            </div>
          </div>

          {/* Партнёры */}
          <div>
            <div className="text-neon-gold text-sm tracking-[0.3em] uppercase mb-8 font-medium">Партнёры и жюри</div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {partners.map((p) => (
                <div
                  key={p}
                  className="clip-polygon-sm border border-white/10 py-4 px-6 text-center text-white/40 text-sm hover:text-white/70 hover:border-white/20 transition-all duration-300"
                >
                  {p}
                </div>
              ))}
            </div>

            <div className="p-6 border border-neon-gold/20 clip-polygon-sm bg-neon-gold/5">
              <div className="text-neon-gold text-xs tracking-widest uppercase mb-3">Стать партнёром</div>
              <p className="text-white/60 text-sm mb-4">Поддержи лучшие проекты года и стань частью истории NOVA AWARD.</p>
              <button className="text-neon-gold text-sm tracking-wider uppercase hover:text-white transition-colors underline underline-offset-4">
                Условия партнёрства →
              </button>
            </div>
          </div>
        </div>

        {/* Футер */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-3xl font-black text-white">
            NOVA <span className="text-neon-purple">AWARD</span>
          </div>
          <div className="text-white/20 text-xs tracking-widest uppercase">
            © 2026 Nova Award · Все права защищены
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
