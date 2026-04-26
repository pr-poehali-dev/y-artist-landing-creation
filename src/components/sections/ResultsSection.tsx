const results = [
  { nomination: 'Голос года',          winner: 'Anya Volkov',        author: 'Сольная карьера',   color: '#ff3cac', medal: '🥇' },
  { nomination: 'Движение и пластика', winner: 'NDC Company',         author: 'Коллектив',         color: '#3cf0ff', medal: '🥇' },
  { nomination: 'Театральный прорыв',  winner: 'Театр Меридиан',     author: 'Постановка «Тень»', color: '#f5c842', medal: '🥇' },
  { nomination: 'Кинообраз',           winner: 'Роман Светлов',      author: 'Режиссёр',          color: '#ff3cac', medal: '🥇' },
  { nomination: 'Живая сцена',         winner: 'Группа Axis',        author: 'Тур 2025',          color: '#3cf0ff', medal: '🥇' },
  { nomination: 'Открытие года',       winner: 'Лиза Март',          author: 'Певица',            color: '#f5c842', medal: '🥇' },
];

const ResultsSection = () => (
  <section id="results" className="relative py-32 overflow-hidden"
    style={{ background: 'linear-gradient(180deg, #06061a 0%, #0d0d2e 50%, #06061a 100%)' }}>

    <div className="absolute right-1/4 top-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
      style={{ background: '#f5c842' }} />
    <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full blur-3xl opacity-6 pointer-events-none"
      style={{ background: '#ff3cac' }} />

    <div className="relative z-10 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Победители</div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Результаты<br />
          <span className="text-3d-gold">прошлых лет</span>
        </h2>
      </div>

      {/* Карточки */}
      <div className="space-y-3">
        {results.map((r, i) => (
          <div key={r.nomination} className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
            style={{ background: 'rgba(13,13,46,.8)', border: `1px solid ${r.color}25` }}>

            {/* Левая цветная полоса */}
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
              style={{ background: r.color }} />

            {/* Фоновый свет при ховере */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at left, ${r.color}08 0%, transparent 60%)` }} />

            <div className="relative flex items-center gap-5 px-7 py-5">

              {/* Номер */}
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                style={{ background: r.color + '15', color: r.color, border: `1px solid ${r.color}35` }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Номинация */}
              <div className="flex-1 min-w-0">
                <div className="text-xs tracking-widest uppercase mb-1 font-semibold"
                  style={{ color: r.color }}>
                  {r.nomination}
                </div>
                <div className="text-white font-bold text-lg leading-tight truncate">{r.winner}</div>
                <div className="text-white/40 text-xs mt-0.5">{r.author}</div>
              </div>

              {/* Звезда победителя */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <div className="text-2xl" style={{ filter: `drop-shadow(0 0 8px ${r.color})` }}>★</div>
                <div className="text-white/20 text-[10px] tracking-widest uppercase">Победитель</div>
              </div>
            </div>

            {/* Нижняя линия-акцент */}
            <div className="absolute bottom-0 left-7 right-7 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, ${r.color}, transparent)` }} />
          </div>
        ))}
      </div>

      {/* Архив */}
      <div className="mt-14">
        <div className="text-center text-white/30 text-sm mb-5">Архив результатов</div>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { year: '2025', url: '#' },
            { year: '2024', url: '#' },
            { year: '2023', url: '#' },
            { year: '2022', url: '#' },
          ].map(({ year, url }) => (
            <a key={year} href={url} download
              className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:border-gold/60 hover:text-gold group"
              style={{ border: '1px solid rgba(245,200,66,.2)', color: 'rgba(255,255,255,.4)', background: 'rgba(245,200,66,.04)' }}>
              <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
              Итоги {year} (PDF)
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ResultsSection;
