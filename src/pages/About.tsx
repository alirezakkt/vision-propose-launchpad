
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Dragonfly animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 500;
    canvas.height = 400;
    
    // Colors based on company theme
    const primaryColor = '#45E3E3'; // Teal/cyan
    const secondaryColor = '#F87060'; // Orange/coral
    
    let wingAngle = 0;
    let posX = canvas.width / 2;
    let posY = canvas.height / 2;
    let directionX = 1;
    let directionY = 0.5;
    
    // Dragonfly drawing function
    function drawDragonfly(x: number, y: number, wingPosition: number) {
      if (!ctx) return;
      
      // Save current state
      ctx.save();
      ctx.translate(x, y);
      
      // Body
      ctx.fillStyle = primaryColor;
      ctx.beginPath();
      ctx.ellipse(0, 0, 25, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Head
      ctx.beginPath();
      ctx.arc(-30, 0, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Antennas
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-40, -5);
      ctx.lineTo(-55, -15);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-40, 5);
      ctx.lineTo(-55, 15);
      ctx.stroke();
      
      // Wings
      ctx.globalAlpha = 0.7;
      
      // Top left wing
      ctx.save();
      ctx.rotate(wingPosition);
      ctx.fillStyle = primaryColor;
      ctx.beginPath();
      ctx.ellipse(-10, -20, 40, 15, Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      // Top right wing
      ctx.save();
      ctx.rotate(-wingPosition);
      ctx.fillStyle = primaryColor;
      ctx.beginPath();
      ctx.ellipse(10, -20, 40, 15, -Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      // Bottom left wing
      ctx.save();
      ctx.rotate(-wingPosition);
      ctx.fillStyle = secondaryColor;
      ctx.beginPath();
      ctx.ellipse(-10, 20, 40, 15, -Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      // Bottom right wing
      ctx.save();
      ctx.rotate(wingPosition);
      ctx.fillStyle = secondaryColor;
      ctx.beginPath();
      ctx.ellipse(10, 20, 40, 15, Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      ctx.globalAlpha = 1;
      
      // Tail
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(25, 0);
      ctx.lineTo(70, 0);
      ctx.stroke();
      
      // Tail segments
      for (let i = 0; i < 3; i++) {
        const segmentPos = 35 + (i * 15);
        ctx.beginPath();
        ctx.arc(segmentPos, 0, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Restore state
      ctx.restore();
    }
    
    // Animation loop
    function animate() {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update wing angle
      wingAngle += 0.15;
      const wingPosition = Math.sin(wingAngle) * 0.5;
      
      // Update position
      posX += directionX;
      posY += directionY;
      
      // Boundary check
      if (posX > canvas.width - 80 || posX < 80) {
        directionX *= -1;
      }
      if (posY > canvas.height - 60 || posY < 60) {
        directionY *= -1;
      }
      
      // Add slight randomness to movement
      if (Math.random() < 0.02) {
        directionX = Math.random() * 2 - 1;
        directionY = Math.random() - 0.5;
      }
      
      // Draw dragonfly
      drawDragonfly(posX, posY, wingPosition);
      
      // Continue animation
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      // No specific cleanup needed for canvas
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      <Header />
      
      <main className="flex-1">
        <Hero 
          title={t("about.hero.title")}
          subtitle={t("about.hero.subtitle")}
        />
        
        {/* Company Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className={language === 'fa' ? 'text-right' : ''}>
                <h2 className="text-3xl font-bold mb-6">{t("about.mission.title")}</h2>
                <p className="text-lg mb-6">
                  {t("about.mission.description1")}
                </p>
                <p className="mb-4">
                  {t("about.mission.description2")}
                </p>
                <p>
                  {t("about.mission.description3")}
                </p>
              </div>
              
              <div className="flex justify-center items-center bg-card rounded-lg shadow-lg overflow-hidden">
                {/* Animated Dragonfly Canvas */}
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-auto max-w-[500px] animate-fade-in p-4"
                  style={{ maxHeight: '400px' }}
                ></canvas>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className={`text-center mb-12 ${language === 'fa' ? 'text-right' : ''}`}>
              <h2 className="text-3xl font-bold mb-6">{t("about.values.title")}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-accent p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V21M17 8L7 16M7 8L17 16" stroke="#45E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t("about.values.innovation")}</h3>
                <p className={`text-sm text-muted-foreground ${language === 'fa' ? 'text-right' : ''}`}>
                  {t("about.values.innovation.description")}
                </p>
              </div>
              
              <div className="bg-accent p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z" stroke="#45E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t("about.values.reliability")}</h3>
                <p className={`text-sm text-muted-foreground ${language === 'fa' ? 'text-right' : ''}`}>
                  {t("about.values.reliability.description")}
                </p>
              </div>
              
              <div className="bg-accent p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-primary/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#45E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{t("about.values.impact")}</h3>
                <p className={`text-sm text-muted-foreground ${language === 'fa' ? 'text-right' : ''}`}>
                  {t("about.values.impact.description")}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container">
            <div className={`text-center mb-12 ${language === 'fa' ? 'text-right' : ''}`}>
              <h2 className="text-3xl font-bold mb-4">{t("about.team.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("about.team.subtitle")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-accent w-24 h-24 rounded-full flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle>{t("about.team.product.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-center mb-4 ${language === 'fa' ? 'text-right' : ''}`}>
                    {t("about.team.product.description")}
                  </p>
                  <div className={`text-sm text-muted-foreground ${language === 'fa' ? 'text-right' : ''}`}>
                    <p className="mb-1"><strong>{t("contact.office.address")}:</strong> {t("about.team.product.location")}</p>
                    <p className="mb-1"><strong>{t("contact.office.email")}:</strong> product@sanjaghak.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-accent w-24 h-24 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-12 h-12 text-secondary" />
                  </div>
                  <CardTitle>{t("about.team.developer.title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-center mb-4 ${language === 'fa' ? 'text-right' : ''}`}>
                    {t("about.team.developer.description")}
                  </p>
                  <div className={`text-sm text-muted-foreground ${language === 'fa' ? 'text-right' : ''}`}>
                    <p className="mb-1"><strong>{t("contact.office.address")}:</strong> {t("about.team.developer.location")}</p>
                    <p className="mb-1"><strong>{t("contact.office.email")}:</strong> dev@sanjaghak.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Cities Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className={`text-center mb-12 ${language === 'fa' ? 'text-right' : ''}`}>
              <h2 className="text-3xl font-bold mb-4">{t("about.cities.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("about.cities.subtitle")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-accent rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Tehran</h3>
                <div className="text-sm">
                  <p>Traffic Violation Detection</p>
                  <p>Construction Site Monitoring</p>
                </div>
              </div>
              
              <div className="bg-accent rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Shiraz</h3>
                <div className="text-sm">
                  <p>Traffic Violation Detection</p>
                  <p>Red Light Enforcement</p>
                </div>
              </div>
              
              <div className="bg-accent rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4">Isfahan</h3>
                <div className="text-sm">
                  <p>Smart Parking System</p>
                  <p>Urban Traffic Management</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
