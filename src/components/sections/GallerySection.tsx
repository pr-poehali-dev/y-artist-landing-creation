import { useState } from 'react';

const categories = ['Все', 'Дизайн', 'Технологии', 'Медиа', 'Бизнес', 'Искусство'];

const works = [
  { id: 1, title: 'Система навигации нового поколения', author: 'Команда Axis', cat: 'Дизайн', year: '2025', accent: '#bf5fff', size: 'large' },
  { id: 2, title: 'Нейросеть для предиктивной аналитики', author: 'DataMind Labs', cat: 'Технологии', year: '2025', accent: '#00ffee', size: 'small' },
  { id: 3, title: 'Документальный сериал «Граница»', author: 'Студия Меридиан', cat: 'Медиа', year: '2025', accent: '#ffd93d', size: 'small' },
  { id: 4, title: 'Платформа для микробизнеса', author: 'Vera & Partners', cat: 'Бизнес', year: '2025', accent: '#bf5fff', size: 'small' },
  { id: 5, title: 'Интерактивная инсталляция Void', author: 'Арт-группа «Пустота»', cat: 'Искусство', year: '2025', accent: '#00ffee', size: 'large' },
  { id: 6, title: 'Брендинг города будущего', author: 'Bureau Nord', cat: 'Дизайн', year: '2025', accent: '#ffd93d', size: 'small' },
  { id: 7, title: 'Квантовый алгоритм шифрования', author: 'CryptoCore', cat: 'Технологии', year: '2025', accent: '#bf5fff', size: 'small' },
  { id: 8, title: 'Аудиовизуальное шоу «Синтез»', author: 'OVR Studio', cat: 'Искусство', year: '2025', accent: '#ffd93d', size: 'small' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = activeFilter === 'Все' ? works : works.filter(w => w.cat === activeFilter);

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-neon-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-purple text-sm tracking-[0.3em] uppercase mb-4 font-medium">Работы</div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Галерея<br/>
            <span className="text-neon-gold text-glow-gold">номинантов</span>
          </h2>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 clip-polygon-sm text-sm tracking-wider uppercase transition-all duration-300 font-medium
                ${activeFilter === cat
                  ? 'bg-neon-purple text-black glow-purple'
                  : 'border border-white/20 text-white/50 hover:border-neon-purple/40 hover:text-white/80'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Сетка работ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {filtered.map((work) => (
            <div
              key={work.id}
              className={`group relative clip-polygon border border-white/10 cursor-pointer overflow-hidden transition-all duration-500
                ${work.size === 'large' ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
              style={{
                background: `linear-gradient(135deg, ${work.accent}08 0%, transparent 100%)`,
                borderColor: selected === work.id ? work.accent + '60' : undefined,
              }}
              onClick={() => setSelected(selected === work.id ? null : work.id)}
            >
              {/* Паттерн-фон */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, ${work.accent} 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Большой символ */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10 group-hover:opacity-20 transition-opacity font-black"
                style={{ color: work.accent }}
              >
                {work.id % 3 === 0 ? '◈' : work.id % 3 === 1 ? '⬡' : '△'}
              </div>

              {/* Цветовая полоса */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: `linear-gradient(90deg, ${work.accent}, transparent)` }}
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div
                  className="text-xs tracking-widest uppercase mb-2 font-medium"
                  style={{ color: work.accent }}
                >
                  {work.cat} · {work.year}
                </div>
                <h3 className="text-white font-bold text-sm leading-tight mb-1">{work.title}</h3>
                <p className="text-white/40 text-xs">{work.author}</p>
              </div>

              {/* Оверлей при выборе */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                style={{
                  background: selected === work.id ? work.accent + '20' : 'transparent',
                  opacity: selected === work.id ? 1 : 0,
                }}
              >
                {selected === work.id && (
                  <div
                    className="clip-polygon px-4 py-2 text-xs font-bold tracking-wider uppercase"
                    style={{ background: work.accent, color: '#080810' }}
                  >
                    Номинант ★
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
