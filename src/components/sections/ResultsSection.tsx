const results = [
  { nomination: 'Голос года',          winner: 'Anya Volkov',        author: 'Сольная карьера',   color: '#ff3cac' },
  { nomination: 'Движение и пластика', winner: 'NDC Company',         author: 'Коллектив',         color: '#3cf0ff' },
  { nomination: 'Театральный прорыв',  winner: 'Театр Меридиан',     author: 'Постановка «Тень»', color: '#f5c842' },
  { nomination: 'Кинообраз',           winner: 'Роман Светлов',      author: 'Режиссёр',          color: '#ff3cac' },
  { nomination: 'Живая сцена',         winner: 'Группа Axis',        author: 'Тур 2025',          color: '#3cf0ff' },
  { nomination: 'Открытие года',       winner: 'Лиза Март',          author: 'Певица',            color: '#f5c842' },
];

const ResultsSection = () => (
  <section id="results" className="relative py-32 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #06061a 0%, #0d0d2e 50%, #06061a 100%)' }}>

    <div className="absolute right-1/4 top-1/2 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
      style={{ background: '#f5c842' }} />

    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Победители</div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Результаты<br />
          <span className="text-3d-gold">прошлых лет</span>
        </h2>
      </div>

      {/* Гран-при */}
      <div className="relative rounded-2xl border border-gold/35 bg-gold/5 p-10 mb-12 overflow-hidden glow-gold">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #f5c842, #ff3cac, transparent)' }} />

        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[10rem] font-black text-gold opacity-5 select-none pointer-events-none leading-none">
          ★
        </div>

        {/* Мини-прожекторы */}
        {[25, 50, 75].map((l, i) => (
          <div key={i} className="absolute top-0 pointer-events-none"
            style={{
              left: `${l}%`, transform: 'translateX(-50%)',
              width: 100, height: '100%',
              clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
              background: ['rgba(255,60,172,.04)', 'rgba(255,255,255,.03)', 'rgba(60,240,255,.04)'][i],
            }} />
        ))}

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="px-5 py-2.5 rounded-xl font-black text-sm tracking-widest uppercase flex-shrink-0 btn-gold">
            Гран-при 2025
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">Anya Volkov</h3>
            <p className="text-white/50">Голос года · Сольная карьера</p>
          </div>
          <div className="md:ml-auto text-right">
            <div className="text-gold text-4xl font-black text-glow-gold">★★★</div>
            <div className="text-white/30 text-xs tracking-widest mt-1 uppercase">Grand Prix</div>
          </div>
        </div>
      </div>

      {/* Таблица */}
      <div className="space-y-2">
        <div className="grid grid-cols-12 gap-4 px-5 pb-3 border-b border-white/5">
          <div className="col-span-1 text-white/20 text-xs tracking-widest uppercase">#</div>
          <div className="col-span-4 text-white/20 text-xs tracking-widest uppercase">Номинация</div>
          <div className="col-span-4 text-white/20 text-xs tracking-widest uppercase">Победитель</div>
          <div className="col-span-3 text-white/20 text-xs tracking-widest uppercase">Статус</div>
        </div>

        {results.map((r, i) => (
          <div key={r.nomination}
            className="group grid grid-cols-12 gap-4 px-5 py-4 rounded-xl hover:bg-white/3 transition-all duration-300 cursor-pointer">
            <div className="col-span-1 flex items-center">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ background: r.color + '20', color: r.color, border: `1px solid ${r.color}40` }}>
                {i + 1}
              </div>
            </div>
            <div className="col-span-4 flex items-center">
              <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{r.nomination}</span>
            </div>
            <div className="col-span-4 flex items-center">
              <span className="text-white font-semibold text-sm">{r.winner}</span>
            </div>
            <div className="col-span-3 flex items-center justify-between">
              <span className="text-white/40 text-xs">{r.author}</span>
              <span className="text-lg" style={{ color: r.color }}>★</span>
            </div>
          </div>
        ))}
      </div>

      {/* Архив */}
      <div className="mt-12 flex gap-3 justify-center items-center">
        <span className="text-white/30 text-sm">Архив:</span>
        {['2025', '2024', '2023', '2022'].map(y => (
          <button key={y} className="text-white/30 hover:text-neon-pink text-sm transition-colors underline underline-offset-4">
            {y}
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
