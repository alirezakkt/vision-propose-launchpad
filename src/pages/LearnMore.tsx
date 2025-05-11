
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';

const LearnMore = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      <Header />
      
      <main className="flex-1">
        <Hero 
          title="Learn More About Our Solutions"
          subtitle="Discover how our AI-powered technologies transform urban management and industrial operations."
          ctaText="Contact Us"
          ctaLink="/contact"
        />
        
        {/* Overview Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">Intelligent Solutions for Urban Challenges</h2>
                <p className="text-lg mb-6">
                  Sanjaghak develops cutting-edge AI systems that help cities and industries operate more efficiently, 
                  safely, and sustainably. Our solutions combine advanced computer vision, machine learning, and 
                  IoT technologies to address real-world challenges.
                </p>
                <p className="mb-8">
                  With our systems deployed across major cities in Iran, we're helping urban managers make 
                  data-driven decisions, improve resource allocation, and enhance public safety.
                </p>
              </div>
              
              <div className="order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/d9b547f5-6e02-4718-bec4-403e612cfa6c.png" 
                  alt="Smart City Technologies" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Technologies Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Technologies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                
                <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
                <p>
                  Our advanced computer vision systems can detect, track, and analyze objects, people, 
                  and vehicles in real-time, enabling intelligent monitoring and automated decision-making.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="12" rx="2" stroke="#F87060" strokeWidth="1.5"/>
                    <path d="M7 12L10 14.5L17 8.5" stroke="#F87060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                <p>
                  Our AI models continuously improve through machine learning, adapting to new scenarios 
                  and increasing accuracy over time for more reliable detection and prediction.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L12 20" stroke="#F87060" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 12L20 12" stroke="#F87060" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#45E3E3" strokeWidth="1.5"/>
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">IoT Integration</h3>
                <p>
                  We integrate with diverse sensors and devices to create comprehensive monitoring systems 
                  that provide real-time data collection and analysis across urban environments.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solution Benefits Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Our Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">For Municipalities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Improved traffic flow and reduced congestion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Enhanced public safety through automated violation detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Optimized parking management and reduced illegal parking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Data-driven decision making for urban planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Increased revenue through more efficient violation enforcement</span>
                  </li>
                </ul>
              </div>
              
              <div className="border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">For Industrial Operations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Enhanced worker safety through collision prevention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Predictive maintenance for equipment, reducing downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Improved operational efficiency and resource allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Real-time monitoring of critical equipment and processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1">✓</span>
                    <span>Comprehensive data analytics for process optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement intelligent solutions tailored to your specific needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/projects">
                <Button variant="outline" className="flex items-center gap-2">
                  Browse Our Projects <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg">Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
