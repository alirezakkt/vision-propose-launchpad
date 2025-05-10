
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="px-3 text-xs" 
      onClick={toggleLanguage}
    >
      {language === 'en' ? 'فارسی' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;
