
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${language === 'fa' ? 'font-[Vazirmatn]' : ''}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        
        <div className="flex items-center gap-4">
          {/* Desktop navigation */}
          <nav className={`hidden md:flex items-center gap-6 ${language === 'fa' ? 'flex-row-reverse' : ''}`}>
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              {t('nav.home')}
            </Link>
            <Link to="/projects" className="text-sm font-medium transition-colors hover:text-primary">
              {t('nav.projects')}
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
              {t('nav.about')}
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              {t('nav.contact')}
            </Link>
          </nav>
          
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg md:hidden z-50">
            <nav className={`flex flex-col p-4 gap-4 ${language === 'fa' ? 'text-right font-[Vazirmatn]' : ''}`}>
              <Link 
                to="/" 
                className="text-sm font-medium p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/projects" 
                className="text-sm font-medium p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.projects')}
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
