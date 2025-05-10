
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  
  return (
    <footer className={`w-full bg-card text-card-foreground py-8 border-t ${language === 'fa' ? 'font-[Vazirmatn]' : ''}`}>
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${language === 'fa' ? 'text-right' : ''}`}>
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-primary transition-colors">
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li>{t('footer.tehran')}</li>
              <li>{t('footer.isfahan')}</li>
              <li>info@sanjaghak.com</li>
              <li>+98 123 456 7890</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">{t('about.team.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/20">
                    <User size={20} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{t('about.team.product.title')}</p>
                  <p className="text-xs text-muted-foreground">{t('about.team.product.location')}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-secondary/20">
                    <User size={20} />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{t('about.team.developer.title')}</p>
                  <p className="text-xs text-muted-foreground">{t('about.team.developer.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-8 pt-8 border-t text-center text-sm text-muted-foreground ${language === 'fa' ? 'font-[Vazirmatn]' : ''}`}>
          <p>© {currentYear} Sanjaghak. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
