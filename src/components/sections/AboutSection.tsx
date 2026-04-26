const values = [
  { icon: '🎭', title: 'Талант', desc: 'Признаём мастерство и уникальный художественный голос в каждой номинации.' },
  { icon: '🔥', title: 'Энергия', desc: 'Отмечаем тех, кто несёт на сцену живую искру и заряжает зрителей.' },
  { icon: '🌟', title: 'Влияние', desc: 'Чтим артистов, чьё творчество оставляет след в культуре и сердцах людей.' },
];

const AboutSection = () => (
  <section id="about" className="relative py-32 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #06061a 0%, #0d0d2e 50%, #06061a 100%)' }}>

    {/* Декор-лучи */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-1/4 w-px h-full opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #ff3cac, transparent)' }} />
      <div className="absolute top-0 right-1/3 w-px h-full opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #3cf0ff, transparent)' }} />
    </div>

    <div className="absolute right-0 top-1/3 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
      style={{ background: '#a855f7' }} />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Левая */}
        <div>
          <div className="text-neon-blue text-xs tracking-[0.3em] uppercase mb-5 font-semibold">О Премии</div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            <span className="text-white">Там, где</span><br />
            <span className="text-3d-gold">рождаются</span><br />
            <span className="text-white">звёзды</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-5">
            «Я Артист» — это не просто церемония. Это момент, когда сцена признаёт лучших — тех, кто отдаёт себя искусству без остатка.
          </p>
          <p className="text-white/45 leading-relaxed">
            Каждый год мы выбираем исполнителей, режиссёров, хореографов и творцов, которые двигают культуру вперёд. Наши лауреаты — это легенды завтрашнего дня.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(255,60,172,.6), transparent)' }} />
            <span className="text-gold text-sm tracking-widest uppercase font-semibold">Est. 2021</span>
          </div>
        </div>

        {/* Правая — карточка-сцена */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden card-show p-10 text-center"
            style={{ border: '1px solid rgba(245,200,66,.25)' }}>
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #f5c842, #ff3cac, transparent)' }} />

            {/* Мини-прожекторы */}
            {[20, 50, 80].map((l, i) => (
              <div key={i} className="absolute top-0 pointer-events-none"
                style={{
                  left: `${l}%`, transform: 'translateX(-50%)',
                  width: 80, height: '60%',
                  clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
                  background: ['rgba(255,60,172,.06)', 'rgba(255,255,255,.05)', 'rgba(60,240,255,.06)'][i],
                }} />
            ))}

            <div className="relative z-10 py-6">
              <div className="text-6xl mb-3">🎤</div>
              <div className="text-3d-gold text-4xl font-bold mb-2">Я АРТИСТ</div>
              <div className="text-white/35 text-xs tracking-[0.35em] uppercase mb-8">Международная премия</div>

              <div className="grid grid-cols-2 gap-3">
                {['Вокал', 'Хореография', 'Театр', 'Кино'].map(cat => (
                  <div key={cat} className="rounded-lg border border-neon-pink/20 bg-neon-pink/5 py-3 text-center">
                    <span className="text-white/60 text-sm font-medium">{cat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #3cf0ff, transparent)' }} />
          </div>

          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-gold/25 float"
            style={{ animationDuration: '8s' }} />
          <div className="absolute -top-4 -left-4 w-14 h-14 rounded-full border border-neon-pink/25 float"
            style={{ animationDelay: '3s', animationDuration: '10s' }} />
        </div>
      </div>

      {/* Ценности */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map(v => (
          <div key={v.title} className="group relative card-show rounded-2xl p-8">
            <div className="text-4xl mb-4">{v.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
            <div className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(90deg, #ff3cac, #3cf0ff)' }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
