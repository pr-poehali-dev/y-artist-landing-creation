import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; color: string; life: number }[] = [];
    const colors = ['#ff3cac', '#3cf0ff', '#a855f7', '#f5c842'];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * Math.PI * 2,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life += 0.01;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const a = 0.25 + Math.abs(Math.sin(p.life)) * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(a * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #1a0a3d 0%, #0d0d2e 40%, #06061a 100%)' }}>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Прожекторы сверху */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="absolute top-0 pointer-events-none"
          style={{
            left: `${15 + i * 22}%`,
            width: `${160 + i * 15}px`,
            height: '55vh',
            clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)',
            background: ['rgba(255,255,255,.06)', 'rgba(60,240,255,.05)', 'rgba(255,60,172,.05)', 'rgba(168,85,247,.06)'][i],
          }} />
      ))}

      {/* Орбитальные кольца */}
      <div className="absolute z-10 pointer-events-none"
        style={{ width: 420, height: 420, top: '50%', left: '50%', transform: 'translate(-50%, -62%)' }}>

        <div className="absolute inset-0 rounded-full float"
          style={{
            border: '2px solid rgba(255,60,172,.65)',
            boxShadow: '0 0 14px rgba(255,60,172,.5), inset 0 0 14px rgba(255,60,172,.15)',
            transform: 'rotateX(70deg) rotateZ(20deg)',
            animationDuration: '7s',
          }} />
        <div className="absolute inset-8 rounded-full float"
          style={{
            border: '2px solid rgba(60,240,255,.65)',
            boxShadow: '0 0 14px rgba(60,240,255,.5), inset 0 0 14px rgba(60,240,255,.15)',
            transform: 'rotateX(65deg) rotateZ(-35deg)',
            animationDelay: '1s', animationDuration: '9s',
          }} />
        <div className="absolute inset-16 rounded-full float"
          style={{
            border: '1px solid rgba(245,200,66,.45)',
            boxShadow: '0 0 8px rgba(245,200,66,.3)',
            transform: 'rotateX(72deg) rotateZ(60deg)',
            animationDelay: '2s', animationDuration: '11s',
          }} />

        {/* Диско-шарики */}
        {[
          { top: '6%',  left: '4%',  size: 36, color: '#a855f7' },
          { top: '12%', left: '80%', size: 28, color: '#3cf0ff' },
          { top: '72%', left: '1%',  size: 22, color: '#ff3cac' },
          { top: '76%', left: '83%', size: 30, color: '#a855f7' },
        ].map((b, i) => (
          <div key={i} className="absolute rounded-full pulse-slow"
            style={{
              top: b.top, left: b.left, width: b.size, height: b.size,
              background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,.7), ${b.color})`,
              boxShadow: `0 0 12px ${b.color}, 0 0 24px ${b.color}66`,
              animationDelay: `${i * 0.7}s`,
            }} />
        ))}
      </div>

      {/* Подиум */}
      <div className="absolute z-10 pointer-events-none"
        style={{
          bottom: '7%', left: '50%', transform: 'translateX(-50%)',
          width: 280, height: 52,
          background: 'radial-gradient(ellipse at center, #2a1060 0%, #130830 60%, #06061a 100%)',
          borderRadius: '50%',
          boxShadow: '0 0 60px rgba(255,60,172,.4), 0 0 100px rgba(60,240,255,.2)',
        }} />

      {/* Силуэт */}
      <div className="absolute z-20 pointer-events-none select-none"
        style={{ bottom: 'calc(7% + 24px)', left: '50%', transform: 'translateX(-50%)' }}>
        <svg width="130" height="200" viewBox="0 0 130 200">
          <ellipse cx="65" cy="22" rx="14" ry="14" fill="#06061a" />
          <path d="M65 36 Q48 68 28 78 Q48 62 65 90 Q82 62 102 78 Q82 68 65 36Z" fill="#06061a" />
          <path d="M50 90 Q36 140 32 188" stroke="#06061a" strokeWidth="15" strokeLinecap="round" />
          <path d="M80 90 Q94 140 98 188" stroke="#06061a" strokeWidth="15" strokeLinecap="round" />
          <path d="M28 78 Q8 98 4 118" stroke="#06061a" strokeWidth="13" strokeLinecap="round" />
          <path d="M102 78 Q126 50 130 30" stroke="#06061a" strokeWidth="13" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center bottom, rgba(168,85,247,.35) 0%, transparent 70%)', filter: 'blur(10px)' }} />
      </div>

      {/* Контент */}
      <div className="relative z-30 text-center px-6 pt-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-pink/40 bg-neon-pink/8 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-pink pulse-slow" />
          <span className="text-neon-pink text-xs font-semibold tracking-widest uppercase">Премия 2026</span>
        </div>

        <h1 className="text-[4.5rem] md:text-[7.5rem] leading-none mb-3 text-3d-gold tracking-wider">
          Я АРТИСТ
        </h1>

        <div className="flex items-center justify-center gap-4 mb-7">
          <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, #ff3cac)' }} />
          <span className="text-white/45 text-xs tracking-[0.28em] uppercase">Международная премия в сфере искусства</span>
          <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, #3cf0ff)' }} />
        </div>

        <p className="text-white/55 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Ежегодная премия, отмечающая таланты,<br />которые зажигают сцену и покоряют сердца.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scroll('registration')} className="btn-gold px-10 py-4 text-sm">
            Подать заявку
          </button>
          <button onClick={() => scroll('nominations')} className="btn-outline-pink px-10 py-4 text-sm">
            Номинации
          </button>
        </div>

        <div className="mt-14 flex gap-12 justify-center">
          {[{ val: '12', label: 'Номинаций' }, { val: '500+', label: 'Участников' }, { val: '5', label: 'Лет на сцене' }].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-gold text-glow-gold">{s.val}</div>
              <div className="text-white/35 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 divider-glow" />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 pointer-events-none">
        <span className="text-[10px] tracking-widest uppercase">Скролл</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #ff3cac, transparent)' }} />
      </div>
    </section>
  );
};

export default HeroSection;
