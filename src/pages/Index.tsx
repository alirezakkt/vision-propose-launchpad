
import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProjects: ProjectCardProps[] = [
  {
    id: "virtual-try-on",
    title: "Virtual Try-On System",
    description: "Smart mirror system allowing shoppers to virtually try on clothes using AI and computer vision.",
    image: "/lovable-uploads/0673bad2-da23-49b2-8c37-137f2ad5e289.png",
    technologies: ["Computer Vision", "AR Technology", "Real-time Rendering"]
  },
  {
    id: "traffic-violations",
    title: "Traffic Violation Detection",
    description: "AI-powered system for detecting traffic violations, particularly at red lights and intersections.",
    image: "/lovable-uploads/b3b90ac5-dca8-437c-bbdf-1973cd95a8eb.png",
    cities: ["Tehran", "Shiraz"],
    technologies: ["Computer Vision", "AI", "Image Recognition"]
  },
  {
    id: "smart-parking",
    title: "Smart Parking System",
    description: "Intelligent parking management solution to optimize parking space utilization and improve user experience.",
    image: "/lovable-uploads/0e74f8e4-f3ea-4007-9d15-223b133ce2bc.png",
    cities: ["Isfahan"],
    technologies: ["IoT", "Computer Vision", "Mobile App"]
  }
];

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Dragonfly animation
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = 600;
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
      ctx.ellipse(0, 0, 30, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Head
      ctx.beginPath();
      ctx.arc(-35, 0, 18, 0, Math.PI * 2);
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(-40, -5, 5, 0, Math.PI * 2);
      ctx.arc(-40, 5, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Antennas
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-45, -10);
      ctx.lineTo(-65, -20);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(-45, 10);
      ctx.lineTo(-65, 20);
      ctx.stroke();
      
      // Wings
      ctx.globalAlpha = 0.7;
      
      // Top left wing
      ctx.save();
      ctx.rotate(wingPosition);
      ctx.fillStyle = primaryColor;
      ctx.beginPath();
      ctx.ellipse(-10, -25, 50, 20, Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      // Top right wing
      ctx.save();
      ctx.rotate(-wingPosition);
      ctx.fillStyle = primaryColor;
      ctx.beginPath();
      ctx.ellipse(10, -25, 50, 20, -Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      // Bottom left wing
      ctx.save();
      ctx.rotate(-wingPosition);
      ctx.fillStyle = secondaryColor;
      ctx.beginPath();
      ctx.ellipse(-10, 25, 50, 20, -Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      // Bottom right wing
      ctx.save();
      ctx.rotate(wingPosition);
      ctx.fillStyle = secondaryColor;
      ctx.beginPath();
      ctx.ellipse(10, 25, 50, 20, Math.PI/4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      ctx.globalAlpha = 1;
      
      // Tail
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.lineTo(90, 0);
      ctx.stroke();
      
      // Tail segments
      for (let i = 0; i < 3; i++) {
        const segmentPos = 45 + (i * 20);
        ctx.beginPath();
        ctx.arc(segmentPos, 0, 5, 0, Math.PI * 2);
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
      const wingPosition = Math.sin(wingAngle) * 0.6;
      
      // Update position
      posX += directionX;
      posY += directionY;
      
      // Boundary check
      if (posX > canvas.width - 100 || posX < 100) {
        directionX *= -1;
      }
      if (posY > canvas.height - 80 || posY < 80) {
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
          title="Smart Urban Solutions Powered by AI"
          subtitle="We develop intelligent traffic management and monitoring systems using cutting-edge artificial intelligence."
          ctaText="Explore Our Solutions"
        />
        
        {/* About Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="fade-in">
                <h2 className="text-3xl font-bold mb-6">About Sanjaghak</h2>
                <p className="text-lg mb-6">
                  Sanjaghak is a leading provider of intelligent urban management and industrial monitoring solutions based on artificial intelligence.
                </p>
                <p className="mb-8">
                  Our systems help municipalities, construction companies, and industrial facilities improve safety, efficiency, and regulatory compliance through advanced computer vision and AI technologies.
                </p>
                <Link to="/about">
                  <Button variant="outline">Learn More About Us</Button>
                </Link>
              </div>
              
              <div className="relative bg-card rounded-lg shadow-lg overflow-hidden p-4">
                {/* Animated Dragonfly Canvas */}
                <canvas 
                  ref={canvasRef} 
                  className="w-full h-auto max-w-[600px] mx-auto"
                  style={{ maxHeight: '400px' }}
                ></canvas>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover how our innovative solutions are transforming urban environments and industrial operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button>View All Projects</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-primary/10 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement intelligent solutions tailored to your specific needs.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us Today</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
