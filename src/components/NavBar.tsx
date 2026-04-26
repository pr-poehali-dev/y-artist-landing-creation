import { useState, useEffect } from 'react';

const links = [
  { href: 'home', label: 'Главная' },
  { href: 'about', label: 'О премии' },
  { href: 'nominations', label: 'Номинации' },
  { href: 'gallery', label: 'Галерея' },
  { href: 'results', label: 'Результаты' },
  { href: 'contacts', label: 'Контакты' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map(l => document.getElementById(l.href));
      const current = sections.find(s => {
        if (!s) return false;
        const rect = s.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#080810]/90 backdrop-blur-md border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} className="text-xl font-black tracking-tight">
          <span className="text-white">NOVA</span>
          <span className="text-neon-purple ml-1">★</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                active === l.href ? 'text-neon-purple' : 'text-white/40 hover:text-white/80'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('registration')}
          className="hidden md:block px-5 py-2 bg-neon-purple text-black text-xs font-bold tracking-wider uppercase clip-polygon-sm hover:bg-white transition-all duration-300"
        >
          Подать заявку
        </button>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#080810]/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-sm text-white/60 hover:text-white tracking-widest uppercase"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('registration')}
            className="mt-2 px-5 py-3 bg-neon-purple text-black text-xs font-bold tracking-wider uppercase clip-polygon-sm"
          >
            Подать заявку
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
