import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; life: number }[] = [];
    const colors = ['#bf5fff', '#00ffee', '#ffd93d'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random(),
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life += 0.005;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const alpha = 0.3 + Math.sin(p.life) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-lines">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Декоративные фигуры */}
      <div className="absolute top-20 left-10 w-64 h-64 border border-neon-purple/20 rotate-45 float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-neon-cyan/20 rotate-12 float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-neon-gold/20 -rotate-12 float" style={{ animationDelay: '4s' }} />

      {/* Большие размытые круги */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 border border-neon-gold/40 bg-neon-gold/5 clip-polygon-sm">
          <span className="w-2 h-2 bg-neon-gold rounded-full pulse-glow" />
          <span className="text-neon-gold text-sm font-medium tracking-widest uppercase">Премия 2026</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black leading-none mb-4 tracking-tighter">
          <span className="block text-white">NOVA</span>
          <span className="block text-neon-purple text-glow-purple">AWARD</span>
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-neon-cyan" />
          <p className="text-neon-cyan text-sm tracking-[0.3em] uppercase font-medium">Премия за выдающиеся достижения</p>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-neon-cyan" />
        </div>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Международная премия, отмечающая прорывные проекты,<br/>
          смелые идеи и людей, меняющих правила игры.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('registration')}
            className="group relative px-8 py-4 bg-neon-purple text-black font-bold tracking-wider uppercase clip-polygon glow-purple hover:bg-white transition-all duration-300 text-sm"
          >
            Подать заявку
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
          </button>
          <button
            onClick={() => scrollToSection('nominations')}
            className="px-8 py-4 border border-neon-cyan/50 text-neon-cyan font-medium tracking-wider uppercase clip-polygon hover:bg-neon-cyan/10 transition-all duration-300 text-sm"
          >
            Номинации
          </button>
        </div>

        {/* Счётчики */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { val: '12', label: 'Номинаций' },
            { val: '340+', label: 'Участников' },
            { val: '5', label: 'Лет подряд' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-black text-neon-gold text-glow-gold">{item.val}</div>
              <div className="text-white/40 text-xs tracking-widest uppercase mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Скролл-индикатор */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Скролл</span>
        <div className="w-px h-12 bg-gradient-to-b from-neon-purple to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
