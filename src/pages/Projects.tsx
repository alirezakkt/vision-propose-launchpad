
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();

  const allProjects: ProjectCardProps[] = [
    {
      id: "virtual-try-on",
      title: t('project.thirdeye.title'),
      description: t('project.thirdeye.description'),
      image: "/lovable-uploads/0673bad2-da23-49b2-8c37-137f2ad5e289.png",
      technologies: ["Computer Vision", "Image Processing", "AR Technology", "Real-time Rendering"]
    },
    {
      id: "traffic-violations",
      title: t('project.trafficViolation.title'),
      description: t('project.trafficViolation.description'),
      image: "/lovable-uploads/b3b90ac5-dca8-437c-bbdf-1973cd95a8eb.png",
      cities: ["Tehran", "Shiraz"],
      technologies: ["Computer Vision", "AI", "Image Recognition"]
    },
    {
      id: "smart-parking",
      title: t('project.smartParking.title'),
      description: t('project.smartParking.description'),
      image: "/lovable-uploads/0e74f8e4-f3ea-4007-9d15-223b133ce2bc.png",
      cities: ["Isfahan"],
      technologies: ["IoT", "Computer Vision", "Mobile App"]
    },
    {
      id: "equipment-monitoring",
      title: t('project.equipmentMonitoring.title'),
      description: t('project.equipmentMonitoring.description'),
      image: "/lovable-uploads/12c6d2c7-f631-49aa-95ac-a8cea09a870e.png",
      technologies: ["Thermal Imaging", "AI Detection", "Predictive Maintenance"]
    },
    {
      id: "collision-warning",
      title: t('project.collisionWarning.title'),
      description: t('project.collisionWarning.description'),
      image: "/lovable-uploads/53ae4415-cee5-4ef6-9844-542e6ebaac95.png",
      technologies: ["360° Cameras", "Real-time Monitoring", "Distance Detection"]
    },
    {
      id: "construction-vehicles",
      title: t('project.constructionVehicles.title'),
      description: t('project.constructionVehicles.description'),
      image: "/lovable-uploads/4c86f9aa-f8eb-4ba2-a13f-cac010de6346.png",
      technologies: ["Vehicle Tracking", "Computer Vision", "Reporting"]
    },
    {
      id: "stationary-violations",
      title: t('project.stationaryViolations.title'),
      description: t('project.stationaryViolations.description'),
      image: "/lovable-uploads/0af53225-85a5-427a-bec1-d75f1b3f1b48.png",
      cities: ["Tehran"],
      technologies: ["Mobile Monitoring", "License Plate Recognition", "Real-time Reporting"]
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col bg-background dark ${language === 'fa' ? 'font-vazirmatn' : 'font-poppins'}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="flex-1">
        <Hero 
          title={t('projects.hero.title')}
          subtitle={t('projects.hero.subtitle')}
          ctaText={t('nav.contact')}
          ctaLink="/contact"
        />
        
        {/* Projects Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t('projects.tech.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('projects.tech.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-accent p-6 rounded-lg text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3.5" stroke="#45E3E3" strokeWidth="1.5"/>
                    <path d="M16.5 12H21" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 12H7.5" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 16.5L12 21" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M12 3L12 7.5" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M15 15L18 18" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M6 6L9 9" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M15 9L18 6" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M6 18L9 15" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('tech.computerVision')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('tech.computerVision.description')}
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="#F87060" strokeWidth="1.5"/>
                    <path d="M7 12L10 14.5L17 8.5" stroke="#F87060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('tech.ai')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('tech.ai.description')}
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L20 6" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 10L20 10" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 14L20 14" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 18L20 18" stroke="#45E3E3" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="8" cy="6" r="1.5" fill="#F87060"/>
                    <circle cx="8" cy="10" r="1.5" fill="#F87060"/>
                    <circle cx="16" cy="14" r="1.5" fill="#F87060"/>
                    <circle cx="12" cy="18" r="1.5" fill="#F87060"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('tech.dataAnalytics')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('tech.dataAnalytics.description')}
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg text-center">
                <div className="h-16 flex items-center justify-center mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20" stroke="#F87060" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 12L20 12" stroke="#F87060" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#45E3E3" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('tech.iot')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('tech.iot.description')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
