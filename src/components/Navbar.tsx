
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="backdrop-blur-xl bg-black/30 border border-purple-500/30 rounded-full shadow-glow-sm max-w-5xl mx-auto">
        <div className="px-6">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="mr-6 md:mr-12">
              <div 
                className="flex items-center gap-3 cursor-pointer py-2"
                onClick={() => scrollToSection('hero')}
              >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-20 w-20">
                  <defs>
                    <style>
                      {`.logo-primary { fill: none; stroke: #a855f7; stroke-width: 8; stroke-linecap: round; stroke-linejoin: round; }
                      .logo-fill { fill: #a855f7; }`}
                    </style>
                  </defs>
                  <rect x="60" y="80" width="80" height="70" rx="12" className="logo-primary"/>
                  <line x1="100" y1="80" x2="100" y2="65" className="logo-primary"/>
                  <circle cx="100" cy="60" r="5" className="logo-fill"/>
                  <circle cx="52" cy="115" r="8" className="logo-fill"/>
                  <circle cx="148" cy="115" r="8" className="logo-fill"/>
                  <circle cx="80" cy="110" r="6" className="logo-fill"/>
                  <circle cx="120" cy="110" r="6" className="logo-fill"/>
                  <path d="M 85 130 Q 100 138 115 130" className="logo-primary"/>
                </svg>
                <h1 className="text-2xl font-bold text-white hover:text-gradient font-poppins uppercase tracking-wider">
                  Paracras
                </h1>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Our Services", id: "services" },
                { name: "How It Works", id: "how-it-works" },
                { name: "Use Cases", id: "use-cases" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-400 transition-colors relative group py-2 font-poppins"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-purple-400"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/90 border border-purple-500/30 rounded-2xl mt-2 shadow-glow-sm animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            {[
              { name: "Our Services", id: "services" },
              { name: "How It Works", id: "how-it-works" },
              { name: "Use Cases", id: "use-cases" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <div key={item.id} className="block">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-400 transition-colors w-full text-left py-2 font-poppins"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
