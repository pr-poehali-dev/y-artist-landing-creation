const values = [
  { icon: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/7792c344-79af-4d9a-9ee0-a248b663260b.png" className="w-10 h-10 object-contain" />, title: 'Талант', desc: 'Признаём мастерство и уникальный художественный голос в каждой номинации.' },
  { icon: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/5a9b6a29-3f33-42ab-90f5-4ca745b6e0a7.png" className="w-10 h-10 object-contain" />, title: 'Энергия', desc: 'Отмечаем тех, кто несёт на сцену живую искру и заряжает зрителей.' },
  { icon: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/1cccc7d3-4ada-43d0-9fbd-3262d00300eb.png" className="w-10 h-10 object-contain" />, title: 'Влияние', desc: 'Чтим артистов, чьё творчество оставляет след в культуре и сердцах людей.' },
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
          <p className="text-white/60 text-lg leading-relaxed mb-5">«Я - Артист» — это не просто церемония. Это момент, когда сцена признаёт лучших — тех, кто отдаёт себя искусству без остатка.</p>
          <p className="text-white/45 leading-relaxed">Каждый год мы выбираем исполнителей, актеров, танцовщиков, музыкантов и творцов, которые двигают творчество вперёд. Наши лауреаты — это легенды завтрашнего дня.</p>
          <div className="mt-10 flex items-center gap-6">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(255,60,172,.6), transparent)' }} />
            <span className="text-gold text-sm tracking-widest uppercase font-semibold">Est. 2021</span>
          </div>
        </div>

        {/* Правая — фото + карточка */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(245,200,66,.3)', minHeight: 380 }}>

            {/* Фото как фон карточки */}
            <img
              src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/e96a0609-d618-436f-8c92-7bb6cc95f588.jpg"
              alt="Я Артист"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ opacity: 0.55 }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(5,5,26,.95) 0%, rgba(5,5,26,.4) 60%, transparent 100%)' }} />
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #f7c948, #ff2aaa, transparent)' }} />

            <div className="relative z-10 p-8 pt-10 mt-40">
              <div className="text-3d-gold text-3xl font-bold mb-1">Я - АРТИСТ</div>
              <div className="text-white/50 text-xs tracking-[0.35em] uppercase mb-6">Международная премия</div>

              <div className="grid grid-cols-2 gap-3">
                {['Вокал', 'Хореография', 'Театр', 'Музыка'].map(cat => (
                  <div key={cat} className="rounded-lg py-3 text-center"
                    style={{ border: '1px solid rgba(255,42,170,.25)', background: 'rgba(255,42,170,.08)', backdropFilter: 'blur(4px)' }}>
                    <span className="text-white/80 text-sm font-semibold">{cat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #4fc3f7, transparent)' }} />
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