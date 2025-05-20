
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-glow-sm' : 'py-4'
      }`}
    >
      <div className="backdrop-blur-xl bg-black/30 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <h1 
                className="text-2xl font-bold text-white hover:text-gradient cursor-pointer"
                onClick={() => scrollToSection('hero')}
              >
                Paracras
              </h1>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", id: "hero" },
                { name: "Our Services", id: "services" },
                { name: "How It Works", id: "how-it-works" },
                { name: "Use Cases", id: "use-cases" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-400 transition-colors relative group"
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
        <div className="md:hidden backdrop-blur-xl bg-black/90 border-b border-purple-500/30 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            {[
              { name: "Home", id: "hero" },
              { name: "Our Services", id: "services" },
              { name: "How It Works", id: "how-it-works" },
              { name: "Use Cases", id: "use-cases" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <div key={item.id} className="block">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-purple-400 transition-colors w-full text-left py-2"
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
