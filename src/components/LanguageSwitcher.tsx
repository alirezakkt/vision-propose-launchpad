
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
    // Set document direction based on language
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
    // Refresh the page to ensure all content gets updated
    // This is a simple solution to ensure all content reflects the new language
    window.location.reload();
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="px-3 text-xs flex items-center gap-1" 
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'فارسی' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;
