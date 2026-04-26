const HeroSection = () => {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-end justify-center overflow-hidden">

      {/* Фото на весь экран */}
      <img
        src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/e96a0609-d618-436f-8c92-7bb6cc95f588.jpg"
        alt="Я Артист"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Затемнение + градиент снизу */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'rgba(5,5,26,.45)' }} />
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,26,.5) 0%, transparent 25%, transparent 50%, rgba(5,5,26,.8) 75%, #05051a 100%)',
        }} />

      {/* Градиент сверху под навбар */}
      <div className="absolute top-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(6,6,26,.7), transparent)' }} />

      {/* Контент поверх */}
      <div className="relative z-20 w-full text-center px-6 pb-20 pt-32">

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-pink/50 mb-8"
          style={{ background: 'rgba(255,60,172,.12)', backdropFilter: 'blur(8px)' }}>
          <span className="w-2 h-2 rounded-full bg-neon-pink pulse-slow" />
          <span className="text-neon-pink text-xs font-semibold tracking-widest uppercase">Премия 2026</span>
        </div>

        <p className="text-white text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-semibold"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,.9)' }}>
          Ежегодная премия, отмечающая таланты,<br />которые зажигают сцену и покоряют сердца.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={() => scroll('registration')} className="btn-gold px-10 py-4 text-sm rounded-xl">
            Подать заявку
          </button>
          <button onClick={() => scroll('nominations')} className="btn-outline-pink px-10 py-4 text-sm rounded-xl"
            style={{ backdropFilter: 'blur(8px)', background: 'rgba(255,60,172,.08)' }}>
            Номинации
          </button>
        </div>

        {/* Счётчики */}
        <div className="flex gap-10 justify-center">
          {[
            { val: '12',   label: 'Номинаций' },
            { val: '500+', label: 'Участников' },
            { val: '5',    label: 'Лет на сцене' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-gold text-glow-gold">{s.val}</div>
              <div className="text-white/50 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-glow z-20" />
    </section>
  );
};

export default HeroSection;