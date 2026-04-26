const HeroSection = () => {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Фото на весь экран */}
      <img
        src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/e96a0609-d618-436f-8c92-7bb6cc95f588.jpg"
        alt="Я Артист"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Лёгкий градиент сверху под навбар */}
      <div className="absolute top-0 left-0 right-0 h-36 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(5,5,26,.75), transparent)' }} />

      {/* Лёгкий градиент снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(5,5,26,.85), transparent)' }} />

      {/* Контент по центру */}
      <div className="relative z-20 w-full text-center px-6 flex flex-col items-center gap-6">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-pink/50"
          style={{ background: 'rgba(5,5,26,.6)', backdropFilter: 'blur(10px)' }}>
          <span className="w-2 h-2 rounded-full bg-neon-pink pulse-slow" />
          <span className="text-neon-pink text-xs font-semibold tracking-widest uppercase">ПРЕМИЯ 2026-2027</span>
        </div>

        <p className="text-white font-semibold text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,.95), 0 0 30px rgba(0,0,0,.8)' }}>Ежегодная премия, отмечающая молодые таланты,
которые зажигают сцену и покоряют сердца.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scroll('registration')} className="btn-gold px-10 py-4 text-sm rounded-xl">
            Подать заявку
          </button>
          <button onClick={() => scroll('nominations')} className="btn-outline-pink px-10 py-4 text-sm rounded-xl"
            style={{ backdropFilter: 'blur(8px)', background: 'rgba(5,5,26,.4)' }}>
            Номинации
          </button>
        </div>

      </div>

      {/* Счётчики поверх фото снизу */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex gap-10 justify-center">
        {[
          { val: '6',   label: 'Номинаций' },
          { val: '500+', label: 'Участников' },
          { val: '5',    label: 'Лет на сцене' },
        ].map(s => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-black text-gold text-glow-gold">{s.val}</div>
            <div className="text-white/70 text-xs tracking-widest uppercase mt-1"
              style={{ textShadow: '0 1px 8px rgba(0,0,0,.9)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-glow z-20" />
    </section>
  );
};

export default HeroSection;