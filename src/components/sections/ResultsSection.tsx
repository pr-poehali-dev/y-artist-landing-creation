const results = [
  { nomination: 'Голос года',          color: '#ff3cac', medal: '🥇' },
  { nomination: 'Движение и пластика', color: '#3cf0ff', medal: '🥇' },
  { nomination: 'Театральный прорыв',  color: '#f5c842', medal: '🥇' },
  { nomination: 'Магия сцены',          color: '#ff3cac', medal: '🥇' },
  { nomination: 'Гармония сердца',         color: '#3cf0ff', medal: '🥇' },
  { nomination: 'Творческий Олимп',    color: '#f5c842', medal: '🥇' },
];

const ResultsSection = () => (
  <section id="results" className="relative py-32 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #06061a 0%, #0d0d2e 50%, #06061a 100%)' }}>

    <div className="absolute right-1/4 top-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
      style={{ background: '#f5c842' }} />
    <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full blur-3xl opacity-6 pointer-events-none"
      style={{ background: '#ff3cac' }} />

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Победители</div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Результаты<br />
          <span className="text-3d-gold">прошлых лет</span>
        </h2>
      </div>

      {/* Таблица */}
      <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,.07)' }}>

        {/* Шапка */}
        <div className="grid grid-cols-12 gap-6 px-10 py-6"
          style={{ background: 'rgba(255,255,255,.03)', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div className="col-span-1 text-white/25 text-sm tracking-[0.2em] uppercase font-semibold">#</div>
          <div className="col-span-5 text-white/25 text-sm tracking-[0.2em] uppercase font-semibold">Номинация</div>
          <div className="col-span-4 text-white/25 text-sm tracking-[0.2em] uppercase font-semibold">Победитель</div>
          <div className="col-span-2 text-white/25 text-sm tracking-[0.2em] uppercase font-semibold">Работа</div>
        </div>

        {results.map((r, i) => (
          <div key={r.nomination}
            className="group relative grid grid-cols-12 gap-6 px-10 py-8 transition-all duration-300 cursor-default"
            style={{ borderBottom: i < results.length - 1 ? '1px solid rgba(255,255,255,.04)' : 'none' }}>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `linear-gradient(90deg, ${r.color}08 0%, transparent 60%)` }} />
            <div className="absolute left-0 top-2 bottom-2 w-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: r.color }} />

            <div className="col-span-1 flex items-center relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-black"
                style={{ background: r.color + '15', color: r.color, border: `1px solid ${r.color}30` }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="col-span-5 flex items-center relative z-10">
              <span className="text-white/55 text-xl group-hover:text-white/90 transition-colors duration-300 font-medium">{r.nomination}</span>
            </div>

            <div className="col-span-4 flex items-center relative z-10">
              <span className="text-white/30 text-xl">—</span>
            </div>

            <div className="col-span-2 flex items-center justify-between relative z-10">
              <span className="text-white/30 text-xl">—</span>
              <span className="text-2xl transition-all duration-300 group-hover:scale-125"
                style={{ color: r.color, filter: `drop-shadow(0 0 6px ${r.color}80)` }}>★</span>
            </div>
          </div>
        ))}
      </div>

      {/* Архив */}
      <div className="mt-14">
        <div className="text-center text-white/40 text-base mb-6">Архив результатов</div>
        <div className="flex flex-wrap gap-5 justify-center">
          {[
            { label: 'Итоги финал 2026/27 (PDF)', url: '#' },
            { label: 'Итоги отбор 2026/27 (PDF)', url: '#' },
          ].map(({ label, url }) => (
            <a key={label} href={url} download
              className="flex items-center gap-3 px-8 py-5 rounded-2xl text-base font-bold transition-all duration-300 hover:scale-105 group"
              style={{ border: '1px solid rgba(245,200,66,.5)', color: 'rgba(245,200,66,.9)', background: 'rgba(245,200,66,.1)', boxShadow: '0 0 20px rgba(245,200,66,.15)' }}>
              <svg className="w-5 h-5 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsSection;