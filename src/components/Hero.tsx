
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = "Learn More",
  ctaLink = "/projects",
  backgroundImage
}) => {
  return (
    <div 
      className="relative overflow-hidden py-24 md:py-36"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
      )}
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-up">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 slide-up">
            {subtitle}
          </p>
          
          <Link to={ctaLink}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
