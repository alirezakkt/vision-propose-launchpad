
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      <Header />
      
      <main className="flex-1">
        <Hero 
          title="About Sanjaghak"
          subtitle="Meet our team and learn about our mission to transform urban environments and industrial operations with AI."
        />
        
        {/* Company Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-6">
                  At Sanjaghak, we are dedicated to developing intelligent solutions that enhance urban living and industrial efficiency through the power of artificial intelligence.
                </p>
                <p className="mb-4">
                  Our systems are designed to solve real-world challenges in traffic management, construction site monitoring, and heavy equipment maintenance, making cities smarter and industrial operations safer.
                </p>
                <p>
                  We continuously innovate and improve our technologies to provide cutting-edge solutions that meet the evolving needs of municipalities, construction companies, and industrial facilities.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12L10 15L17 8" stroke="#45E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Innovation</h4>
                      <p className="text-sm text-muted-foreground">We continuously push the boundaries of what's possible with AI and computer vision technologies.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12L10 15L17 8" stroke="#45E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Reliability</h4>
                      <p className="text-sm text-muted-foreground">Our systems are built to perform consistently and accurately in real-world conditions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-2 rounded-full mr-4 mt-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12L10 15L17 8" stroke="#45E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-1">Impact</h4>
                      <p className="text-sm text-muted-foreground">We measure our success by the positive difference our solutions make in urban and industrial environments.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experts behind Sanjaghak's innovative solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-accent w-24 h-24 rounded-full flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle>Product Owner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center mb-4">
                    Leading our product vision and strategy, ensuring our solutions address real-world challenges effectively.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-1"><strong>Location:</strong> Tehran Office</p>
                    <p className="mb-1"><strong>Expertise:</strong> Product Strategy, Urban Solutions, AI Applications</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-accent w-24 h-24 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-12 h-12 text-secondary" />
                  </div>
                  <CardTitle>Lead Developer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center mb-4">
                    Architecting and implementing our advanced AI algorithms and computer vision systems.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-1"><strong>Location:</strong> Isfahan Office</p>
                    <p className="mb-1"><strong>Expertise:</strong> AI Development, Computer Vision, System Architecture</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Cities Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Cities We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our solutions are currently deployed in several major cities across Iran.
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
