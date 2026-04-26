const AboutSection = () => {
  const values = [
    { icon: '⚡', title: 'Инновации', desc: 'Поощряем проекты, которые открывают новые горизонты и ломают устаревшие шаблоны.' },
    { icon: '◈', title: 'Смелость', desc: 'Отмечаем тех, кто рискует ради большого результата и не боится идти против течения.' },
    { icon: '◎', title: 'Влияние', desc: 'Признаём работы, которые оставляют реальный след в индустрии и обществе.' },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Левая колонка */}
          <div>
            <div className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4 font-medium">О Премии</div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              <span className="text-white">Там, где</span><br/>
              <span className="text-neon-purple text-glow-purple">рождается</span><br/>
              <span className="text-white">история</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              NOVA AWARD — это не просто церемония. Это точка пересечения идей, людей и моментов, которые определяют эпоху.
            </p>
            <p className="text-white/50 leading-relaxed">
              Каждый год мы собираем самые значимые достижения в разных областях и выбираем тех, кто действительно изменил правила игры. Наши победители — это не те, кто следует трендам. Это те, кто их создаёт.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <div className="h-px flex-1 bg-gradient-to-r from-neon-purple/50 to-transparent" />
              <span className="text-neon-gold text-sm tracking-widest uppercase">Est. 2021</span>
            </div>
          </div>

          {/* Правая колонка — визуальный блок */}
          <div className="relative">
            <div className="relative clip-polygon bg-neon-purple/5 border border-neon-purple/20 p-8 rotate-3d">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-neon-purple via-neon-cyan to-transparent" />
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-neon-purple to-transparent" />

              <div className="text-center py-8">
                <div className="text-8xl font-black text-neon-purple text-glow-purple mb-2">V</div>
                <div className="text-white/40 text-xs tracking-[0.4em] uppercase">Nova Award</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {['Дизайн', 'Технологии', 'Медиа', 'Бизнес'].map((cat) => (
                  <div key={cat} className="border border-white/10 p-3 clip-polygon-sm text-center">
                    <span className="text-white/60 text-sm">{cat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Декор */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-neon-gold/30 rotate-45 float" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-neon-cyan/30 -rotate-12 float" style={{ animationDelay: '3s' }} />
          </div>
        </div>

        {/* Ценности */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={v.title} className="relative group">
              <div className="clip-polygon bg-white/3 border border-white/10 p-8 hover:border-neon-purple/40 transition-all duration-500 hover:bg-neon-purple/5">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
