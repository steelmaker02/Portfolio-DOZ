import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkModal = () => {
      if (document.body.style.overflow === 'hidden' && !mobileMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    return () => observer.disconnect();
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,transform,opacity,box-shadow] duration-300 ease-in-out border-b ${isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        } ${isScrolled || mobileMenuOpen
          ? 'py-4 bg-[#050505]/90 backdrop-blur-xl border-white/5 shadow-lg'
          : 'pt-8 pb-6 md:pt-12 md:pb-6 bg-transparent border-transparent'
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">

        <a href="#" className="relative block group z-[60]" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="images/logo.svg"
            alt="Logo"
            width="48"
            height="48"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 -ml-0 md:-ml-0"
          />
        </a>

        <nav className="hidden lg:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-secondary hover:text-accent transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden z-[60] relative text-white p-2 -mr-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div
          className={`fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center pt-16 h-[100dvh] transition-all duration-500 ${mobileMenuOpen
            ? 'opacity-100 pointer-events-auto visible'
            : 'opacity-0 pointer-events-none invisible'
            }`}
        >
          <div className="absolute inset-0 bg-accent/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-col gap-4 text-center relative z-10">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl font-display font-medium text-secondary hover:text-accent hover:scale-105 transition-all duration-300 py-2"
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;