const years = ['2025', '2024', '2023', '2022'];

const results2025 = [
  { nomination: 'Прорыв года', winner: 'Nexus Platform', author: 'Команда Nexus', color: '#bf5fff', place: 1 },
  { nomination: 'Визуальный язык', winner: 'Form & Void', author: 'Бюро Плоскость', color: '#00ffee', place: 1 },
  { nomination: 'Технология будущего', winner: 'AuraNet AI', author: 'Aura Research', color: '#ffd93d', place: 1 },
  { nomination: 'Социальный удар', winner: 'Доступная среда', author: 'НКО «Пространство»', color: '#bf5fff', place: 1 },
  { nomination: 'Медиа и контент', winner: 'Подкаст «Сигнал»', author: 'Студия Signal', color: '#00ffee', place: 1 },
  { nomination: 'Лидер нового времени', winner: 'Виктория Лесная', author: 'CEO, Verde Group', color: '#ffd93d', place: 1 },
];

const ResultsSection = () => {
  return (
    <section id="results" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute right-1/4 top-1/2 w-96 h-96 bg-neon-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">Победители</div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Результаты<br/>
            <span className="text-neon-gold text-glow-gold">прошлых лет</span>
          </h2>
        </div>

        {/* Главный победитель-баннер */}
        <div className="relative clip-polygon border border-neon-gold/30 bg-neon-gold/5 p-10 mb-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-neon-gold via-neon-purple to-transparent" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-neon-gold to-transparent" />

          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[12rem] font-black text-neon-gold/5 leading-none select-none">
            ★
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="clip-polygon bg-neon-gold text-black px-4 py-2 font-black text-sm tracking-widest uppercase flex-shrink-0">
              Гран-при 2025
            </div>
            <div>
              <h3 className="text-3xl font-black text-white mb-1">Nexus Platform</h3>
              <p className="text-white/50">Команда Nexus · Прорыв года</p>
            </div>
            <div className="md:ml-auto text-right">
              <div className="text-neon-gold text-4xl font-black">★★★</div>
              <div className="text-white/30 text-xs tracking-widest mt-1">GRAND PRIX</div>
            </div>
          </div>
        </div>

        {/* Таблица победителей */}
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-4 px-6 pb-3 border-b border-white/5">
            <div className="col-span-1 text-white/20 text-xs tracking-widest uppercase">#</div>
            <div className="col-span-4 text-white/20 text-xs tracking-widest uppercase">Номинация</div>
            <div className="col-span-4 text-white/20 text-xs tracking-widest uppercase">Победитель</div>
            <div className="col-span-3 text-white/20 text-xs tracking-widest uppercase">Автор</div>
          </div>

          {results2025.map((r, i) => (
            <div
              key={r.nomination}
              className="group grid grid-cols-12 gap-4 px-6 py-4 clip-polygon-sm hover:bg-white/3 transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <div className="col-span-1 flex items-center">
                <div
                  className="w-6 h-6 clip-polygon-sm flex items-center justify-center text-xs font-bold"
                  style={{ background: r.color + '20', color: r.color, border: `1px solid ${r.color}40` }}
                >
                  {i + 1}
                </div>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{r.nomination}</span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-white font-medium text-sm">{r.winner}</span>
              </div>
              <div className="col-span-3 flex items-center justify-between">
                <span className="text-white/40 text-xs">{r.author}</span>
                <span style={{ color: r.color }} className="text-lg">★</span>
              </div>
            </div>
          ))}
        </div>

        {/* Прошлые годы */}
        <div className="mt-12 flex gap-3 justify-center">
          <span className="text-white/30 text-sm">Архив:</span>
          {years.map((y) => (
            <button key={y} className="text-white/30 hover:text-neon-cyan text-sm transition-colors underline underline-offset-4">
              {y}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
