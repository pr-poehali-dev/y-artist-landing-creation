import { useState } from 'react';

const nominations = [
  'Прорыв года',
  'Визуальный язык',
  'Технология будущего',
  'Социальный удар',
  'Медиа и контент',
  'Лидер нового времени',
];

const RegistrationSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    project: '',
    nomination: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="registration" className="relative py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="clip-polygon bg-neon-purple/10 border border-neon-purple/30 p-16 glow-purple">
            <div className="text-6xl mb-6 text-neon-gold">✦</div>
            <h3 className="text-3xl font-black text-white mb-4">Заявка отправлена!</h3>
            <p className="text-white/60 mb-8">Мы свяжемся с вами в течение 3 рабочих дней для подтверждения участия.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 border border-neon-cyan/40 text-neon-cyan clip-polygon-sm hover:bg-neon-cyan/10 transition-all text-sm tracking-wider uppercase"
            >
              Подать ещё одну заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="relative py-32 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-32 bg-gradient-to-b from-transparent to-neon-purple/40" />
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-neon-cyan text-sm tracking-[0.3em] uppercase mb-4 font-medium">Участие</div>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Подать<br/>
            <span className="text-neon-purple text-glow-purple">заявку</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-xl mx-auto">
            Приём заявок открыт до 1 сентября 2026. Заполни форму — мы рассмотрим каждую работу.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Сроки */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { phase: '01', title: 'Подача заявки', date: 'до 1 сентября', color: '#bf5fff' },
              { phase: '02', title: 'Отбор жюри', date: 'сентябрь–октябрь', color: '#00ffee' },
              { phase: '03', title: 'Объявление', date: '15 ноября', color: '#ffd93d' },
              { phase: '04', title: 'Церемония', date: '1 декабря 2026', color: '#bf5fff' },
            ].map((step, i) => (
              <div key={step.phase} className="flex gap-4 items-start">
                <div
                  className="clip-polygon-sm w-10 h-10 flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{ background: step.color + '20', color: step.color, border: `1px solid ${step.color}40` }}
                >
                  {step.phase}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{step.title}</div>
                  <div className="text-white/40 text-xs mt-0.5">{step.date}</div>
                </div>
                {i < 3 && (
                  <div className="absolute ml-5 mt-10 w-px h-4 bg-white/10" style={{ position: 'static', display: 'none' }} />
                )}
              </div>
            ))}
          </div>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Имя *</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/3 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-purple/60 transition-colors clip-polygon-sm placeholder-white/20"
                  placeholder="Алексей Громов"
                />
              </div>
              <div>
                <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/3 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-purple/60 transition-colors clip-polygon-sm placeholder-white/20"
                  placeholder="hello@example.com"
                />
              </div>
            </div>

            <div>
              <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Название проекта *</label>
              <input
                required
                value={form.project}
                onChange={e => setForm({ ...form, project: e.target.value })}
                className="w-full bg-white/3 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-purple/60 transition-colors clip-polygon-sm placeholder-white/20"
                placeholder="Мой проект"
              />
            </div>

            <div>
              <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">Номинация *</label>
              <select
                required
                value={form.nomination}
                onChange={e => setForm({ ...form, nomination: e.target.value })}
                className="w-full bg-[#0f0f1a] border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-purple/60 transition-colors clip-polygon-sm"
              >
                <option value="">Выбери номинацию</option>
                {nominations.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>

            <div>
              <label className="text-white/40 text-xs tracking-wider uppercase block mb-2">О проекте *</label>
              <textarea
                required
                rows={4}
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                className="w-full bg-white/3 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-neon-purple/60 transition-colors resize-none clip-polygon-sm placeholder-white/20"
                placeholder="Расскажи о проекте и его значимости (не более 300 слов)"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-neon-purple text-black font-black tracking-wider uppercase clip-polygon glow-purple hover:bg-white transition-all duration-300 text-sm"
            >
              Отправить заявку →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
