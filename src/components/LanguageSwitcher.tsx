
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    // Store the new language we're switching to
    const newLanguage = language === 'en' ? 'fa' : 'en';
    
    // Set the document direction based on the new language
    document.documentElement.dir = newLanguage === 'fa' ? 'rtl' : 'ltr';
    
    // Then update the language in context
    setLanguage(newLanguage);
    
    // Refresh the page to ensure all content gets updated
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
