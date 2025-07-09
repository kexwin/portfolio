import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Home, User, Briefcase, Mail, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-green-500/30' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={handleLogoClick} className="flex items-center space-x-3">
            <Terminal className="h-8 w-8 text-green-400" />
            <span className="text-2xl font-bold text-green-400 font-mono tracking-wider">
               kexwin
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
            >
              <Home className="h-4 w-4" />
              <span>./home</span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
            >
              <User className="h-4 w-4" />
              <span>./about</span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
            >
              <Briefcase className="h-4 w-4" />
              <span>./projects</span>
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
            >
              <FileText className="h-4 w-4" />
              <span>./blog</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
            >
              <Mail className="h-4 w-4" />
              <span>./contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-green-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-green-500/30 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
              >
                <Home className="h-4 w-4" />
                <span>./home</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
              >
                <User className="h-4 w-4" />
                <span>./about</span>
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
              >
                <Briefcase className="h-4 w-4" />
                <span>./projects</span>
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
              >
                <FileText className="h-4 w-4" />
                <span>./blog</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
              >
                <Mail className="h-4 w-4" />
                <span>./contact</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;