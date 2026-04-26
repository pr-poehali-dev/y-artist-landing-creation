import { useState } from 'react';

const categories = ['Все', 'Вокал', 'Хореография', 'Театр', 'Кино', 'Живая сцена'];

const works = [
  { id: 1, emoji: '🎤', title: 'Сольный концерт «Возрождение»',     author: 'Anya Volkov',       cat: 'Вокал',       color: '#ff3cac', size: 'large' },
  { id: 2, emoji: '💃', title: 'Постановка Nexus Dance Company',    author: 'Команда NDC',       cat: 'Хореография', color: '#3cf0ff', size: 'small' },
  { id: 3, emoji: '🎭', title: 'Спектакль «Последний акт»',         author: 'Театр Меридиан',    cat: 'Театр',       color: '#f5c842', size: 'small' },
  { id: 4, emoji: '🎬', title: 'Короткометражка «Эхо»',             author: 'Роман Светлов',     cat: 'Кино',        color: '#ff3cac', size: 'small' },
  { id: 5, emoji: '🎸', title: 'Тур «Синтез 2025»',                 author: 'Группа Axis',       cat: 'Живая сцена', color: '#3cf0ff', size: 'large' },
  { id: 6, emoji: '🌟', title: 'Дебютный альбом «Первая волна»',    author: 'Лиза Март',         cat: 'Вокал',       color: '#f5c842', size: 'small' },
  { id: 7, emoji: '💃', title: 'Хореография «Без гравитации»',      author: 'Студия Levitas',    cat: 'Хореография', color: '#ff3cac', size: 'small' },
  { id: 8, emoji: '🎭', title: 'Иммерсивное шоу «Внутри»',         author: 'Коллектив Void',    cat: 'Театр',       color: '#3cf0ff', size: 'small' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = activeFilter === 'Все' ? works : works.filter(w => w.cat === activeFilter);

  return (
    <section id="gallery" className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #06061a 0%, #0d0d2e 50%, #06061a 100%)' }}>

      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: '#f5c842' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-pink text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Работы</div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Галерея<br />
            <span className="text-3d-gold">номинантов</span>
          </h2>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300
                ${activeFilter === cat
                  ? 'btn-gold'
                  : 'border border-white/20 text-white/50 hover:border-neon-pink/40 hover:text-white/80'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Мозаика */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-4">
          {filtered.map(work => (
            <div key={work.id}
              className={`group relative rounded-2xl border border-white/10 cursor-pointer overflow-hidden transition-all duration-500
                ${work.size === 'large' ? 'col-span-2 row-span-2' : ''}`}
              style={{ background: `linear-gradient(135deg, ${work.color}0a 0%, rgba(13,13,46,.95) 100%)` }}
              onClick={() => setSelected(selected === work.id ? null : work.id)}>

              {/* Верхняя полоса */}
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${work.color}, transparent)` }} />

              {/* Фоновый эмодзи */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-8 group-hover:opacity-15 transition-opacity select-none pointer-events-none">
                {work.emoji}
              </div>

              {/* Точечный паттерн */}
              <div className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle, ${work.color} 1px, transparent 1px)`,
                  backgroundSize: '22px 22px',
                }} />

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="text-xs tracking-widest uppercase mb-1.5 font-semibold"
                  style={{ color: work.color }}>
                  {work.cat}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight mb-1">{work.title}</h3>
                <p className="text-white/40 text-xs">{work.author}</p>
              </div>

              {/* Выбранное */}
              {selected === work.id && (
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl"
                  style={{ background: work.color + '22' }}>
                  <div className="px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase"
                    style={{ background: work.color, color: '#06061a' }}>
                    Номинант ★
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
