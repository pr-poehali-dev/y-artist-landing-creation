import { useState, useEffect } from 'react';

const links = [
  { href: 'home',         label: 'Главная' },
  { href: 'about',        label: 'О премии' },
  { href: 'nominations',  label: 'Номинации' },
  { href: 'gallery',      label: 'Галерея' },
  { href: 'results',      label: 'Результаты' },
  { href: 'contacts',     label: 'Контакты' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const current = links
        .map(l => document.getElementById(l.href))
        .find(s => s && s.getBoundingClientRect().top <= 120 && s.getBoundingClientRect().bottom > 120);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? 'bg-[#06061a]/90 backdrop-blur-md border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
          <span className="text-xl font-bold text-3d-gold tracking-wider">Я АРТИСТ</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 font-semibold
                ${active === l.href ? 'text-neon-pink' : 'text-white/40 hover:text-white/80'}`}>
              {l.label}
            </button>
          ))}
        </div>

        <button onClick={() => scrollTo('registration')}
          className="hidden md:block btn-gold px-5 py-2 text-xs rounded-lg">
          Подать заявку
        </button>

        {/* Burger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#06061a]/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              className="text-left text-sm text-white/60 hover:text-white tracking-widest uppercase font-semibold">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('registration')} className="btn-gold mt-2 py-3 text-xs rounded-lg">
            Подать заявку
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
