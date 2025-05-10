
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredProjects: ProjectCardProps[] = [
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
  },
  {
    id: "equipment-monitoring",
    title: "Heavy Equipment Monitoring",
    description: "Advanced monitoring system for heavy machinery with wear detection and collision prevention.",
    image: "/lovable-uploads/12c6d2c7-f631-49aa-95ac-a8cea09a870e.png",
    technologies: ["Thermal Imaging", "AI Detection", "Predictive Maintenance"]
  }
];

const Index = () => {
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
              
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/d9b547f5-6e02-4718-bec4-403e612cfa6c.png" 
                  alt="Sanjaghak Logo" 
                  className="w-full h-full object-contain" 
                />
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
