import { useState } from 'react';

const nominations = [
  {
    id: 1,
    icon: '◈',
    color: 'neon-purple',
    title: 'Прорыв года',
    desc: 'Проект, открывший совершенно новое направление в своей области.',
    criteria: ['Новизна подхода', 'Масштаб влияния', 'Устойчивость результата'],
  },
  {
    id: 2,
    icon: '⬡',
    color: 'neon-cyan',
    title: 'Визуальный язык',
    desc: 'Работа, переосмыслившая визуальную коммуникацию и эстетику.',
    criteria: ['Оригинальность', 'Исполнение', 'Культурный резонанс'],
  },
  {
    id: 3,
    icon: '△',
    color: 'neon-gold',
    title: 'Технология будущего',
    desc: 'Решение, которое изменит взаимодействие человека и технологии.',
    criteria: ['Техническая сложность', 'UX-инновация', 'Потенциал роста'],
  },
  {
    id: 4,
    icon: '◎',
    color: 'neon-purple',
    title: 'Социальный удар',
    desc: 'Инициатива с измеримым позитивным эффектом для общества.',
    criteria: ['Охват аудитории', 'Реальные изменения', 'Устойчивость'],
  },
  {
    id: 5,
    icon: '✦',
    color: 'neon-cyan',
    title: 'Медиа и контент',
    desc: 'Формат или история, которые захватили умы и сердца миллионов.',
    criteria: ['Виральность', 'Глубина нарратива', 'Производство'],
  },
  {
    id: 6,
    icon: '⬢',
    color: 'neon-gold',
    title: 'Лидер нового времени',
    desc: 'Личность, воплощающая новую философию руководства и развития.',
    criteria: ['Команда', 'Результаты', 'Видение'],
  },
];

const colorMap: Record<string, string> = {
  'neon-purple': '#bf5fff',
  'neon-cyan': '#00ffee',
  'neon-gold': '#ffd93d',
};

const NominationsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="nominations" className="relative py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-gold text-sm tracking-[0.3em] uppercase mb-4 font-medium">Категории</div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Номинации<br/>
            <span className="text-neon-cyan text-glow-cyan">2026</span>
          </h2>
        </div>

        {/* Бегущая строка */}
        <div className="overflow-hidden mb-16 border-y border-white/5 py-4">
          <div className="marquee-track">
            {[...Array(2)].map((_, bi) => (
              <div key={bi} className="flex items-center gap-8 pr-8">
                {nominations.map((n) => (
                  <span key={n.id + bi * 10} className="text-white/20 text-sm tracking-widest uppercase whitespace-nowrap flex items-center gap-3">
                    <span style={{ color: colorMap[n.color] }}>{n.icon}</span>
                    {n.title}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nominations.map((nom) => (
            <div
              key={nom.id}
              className="group relative clip-polygon bg-white/3 border border-white/10 p-8 cursor-pointer transition-all duration-500"
              style={{
                borderColor: hovered === nom.id ? colorMap[nom.color] + '60' : undefined,
                background: hovered === nom.id ? colorMap[nom.color] + '08' : undefined,
              }}
              onMouseEnter={() => setHovered(nom.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="text-4xl mb-6 transition-all duration-300"
                style={{ color: colorMap[nom.color], textShadow: hovered === nom.id ? `0 0 20px ${colorMap[nom.color]}` : 'none' }}
              >
                {nom.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{nom.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">{nom.desc}</p>

              <div className="space-y-2">
                {nom.criteria.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full" style={{ background: colorMap[nom.color] }} />
                    <span className="text-white/40 text-xs">{c}</span>
                  </div>
                ))}
              </div>

              <div
                className="absolute bottom-0 left-0 h-px transition-all duration-500"
                style={{
                  background: colorMap[nom.color],
                  width: hovered === nom.id ? '100%' : '0%',
                }}
              />
              <div
                className="absolute top-0 right-0 w-px transition-all duration-500"
                style={{
                  background: colorMap[nom.color],
                  height: hovered === nom.id ? '100%' : '0%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NominationsSection;
