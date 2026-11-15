import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { kosData } from '../data/kosData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md border-[#49382B]/12 shadow-xs'
          : 'bg-[#F8F5EF]/90 backdrop-blur-sm border-[#49382B]/8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, '#beranda')}
          className="text-xl font-bold tracking-tight text-[#49382B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B6F55] rounded-sm"
        >
          {kosData.brand.name}
        </a>

        {/* Zone 2: Desktop navigation */}
        <nav
          aria-label="Navigasi utama"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#292522]/80"
        >
          {kosData.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#49382B] underline-offset-4 hover:underline transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B6F55] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + Mobile menu toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#kontak"
            onClick={(e) => handleNavClick(e, '#kontak')}
            className="hidden sm:inline-flex items-center justify-center min-h-[40px] px-4 py-2 text-sm font-semibold text-white bg-[#49382B] hover:bg-[#292522] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
          >
            Hubungi Kami
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#49382B] hover:bg-[#E9DFD0]/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B6F55]"
          >
            {isOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-[#49382B]/10 bg-[#F8F5EF] px-4 sm:px-6 py-4"
        >
          <nav aria-label="Navigasi seluler" className="flex flex-col gap-1">
            {kosData.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="min-h-[44px] flex items-center px-3 rounded-xl text-base font-medium text-[#292522] hover:bg-[#E9DFD0]/60 hover:text-[#49382B] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={(e) => handleNavClick(e, '#kontak')}
              className="mt-2 min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 text-base font-semibold text-white bg-[#49382B] hover:bg-[#292522] rounded-xl transition-colors"
            >
              Hubungi Kami
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
