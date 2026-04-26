import { useState } from 'react';

const nominations = [
  { id: 1, emoji: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/9a355d9f-119b-45c7-8cf6-f6c55e53f4d3.png" className="w-20 h-20 object-contain inline-block" />, title: 'Голос года',          desc: 'Лучший вокальный исполнитель или коллектив, покоривший сцену.',    color: '#ff3cac', tags: ['Поп','R&B','Джаз'] },
  { id: 2, emoji: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/dce8e5ca-0cd0-4f5d-933d-e2806ad5f102.png" className="w-20 h-20 object-contain inline-block" />, title: 'Движение и пластика',  desc: 'Лучший хореограф или танцевальный коллектив сезона.',              color: '#3cf0ff', tags: ['Хип-хоп','Классика','Современный'] },
  { id: 3, emoji: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/7bfc4b6e-7b07-40f5-9583-f1c519d5cd75.png" className="w-24 h-24 object-contain inline-block" />, title: 'Театральный прорыв',   desc: 'Спектакль или актёрская работа, изменившая театральный ландшафт.', color: '#f5c842', tags: ['Драма','Комедия','Мюзикл'] },
  { id: 4, emoji: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/9d847824-036d-48c8-8250-6cc8a02f5c9b.png" className="w-20 h-20 object-contain inline-block" />, title: 'Лучший образ',            desc: 'Выдающаяся роль или режиссёрская работа в кино или сериалах.',     color: '#ff3cac', tags: ['Арт-хаус','Мейнстрим','Короткий метр'] },
  { id: 5, emoji: '🎸', title: 'Живая сцена',          desc: 'Лучшее живое выступление или концертный тур года.',                color: '#3cf0ff', tags: ['Рок','Инди','Электроника'] },
  { id: 6, emoji: <img src="https://cdn.poehali.dev/projects/2ddec51a-c1ca-482a-ac82-361f593e7be2/bucket/1919eb31-b78a-4757-b949-0402f0ad0e5c.png" className="w-24 h-24 object-contain inline-block" />, title: 'Открытие года',        desc: 'Новый артист, заявивший о себе ярко и убедительно.',              color: '#f5c842', tags: ['Дебют','Независимые','Молодые'] },
];

const NominationsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="nominations" className="relative py-32 overflow-hidden"
      style={{ background: '#06061a' }}>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: '#3cf0ff' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-gold text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Категории</div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Номинации<br />
            <span className="text-3d-gold">2026</span>
          </h2>
        </div>

        {/* Бегущая строка */}
        <div className="overflow-hidden mb-16 py-4 border-y border-white/5">
          <div className="marquee-track">
            {[...Array(2)].map((_, bi) => (
              <div key={bi} className="flex items-center gap-10 pr-10">
                {nominations.map(n => (
                  <span key={`${n.id}-${bi}`}
                    className="text-white/20 text-sm tracking-widest uppercase whitespace-nowrap flex items-center gap-3">
                    <span style={{ color: n.color }}>{n.emoji}</span>
                    {n.title}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {nominations.map(nom => (
            <div key={nom.id}
              className="group relative rounded-2xl p-8 cursor-pointer transition-all duration-400 card-show"
              style={{
                borderColor: hovered === nom.id ? nom.color + '55' : undefined,
                boxShadow: hovered === nom.id ? `0 0 30px ${nom.color}18` : undefined,
              }}
              onMouseEnter={() => setHovered(nom.id)}
              onMouseLeave={() => setHovered(null)}>

              <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${nom.color}, transparent)`,
                  opacity: hovered === nom.id ? 1 : 0,
                }} />

              <div className="text-5xl mb-5 transition-transform duration-300 group-hover:scale-110 inline-block">
                {nom.emoji}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{nom.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{nom.desc}</p>

              <div className="flex flex-wrap gap-2">
                {nom.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      color: nom.color,
                      borderColor: nom.color + '40',
                      background: nom.color + '10',
                    }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NominationsSection;