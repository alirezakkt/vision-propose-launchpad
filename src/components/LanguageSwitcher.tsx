
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fa' : 'en');
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      title={language === 'en' ? 'Switch to Persian' : 'Switch to English'}
      className="rounded-full"
    >
      <Globe className="h-5 w-5" />
      <span className="ml-1 text-xs">{language === 'en' ? 'FA' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
