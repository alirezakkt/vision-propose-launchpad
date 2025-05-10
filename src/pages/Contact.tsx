
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background dark">
      <Header />
      
      <main className="flex-1">
        <Hero 
          title="Contact Us"
          subtitle="Get in touch with our team to learn more about our solutions or discuss your specific needs."
        />
        
        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project or inquiry..." 
                      className="min-h-[150px]" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto">Send Message</Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Tehran Office</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Address</h4>
                        <p className="text-sm text-muted-foreground">
                          123 Innovation Street<br />
                          Tehran, Iran
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Phone</h4>
                        <p className="text-sm text-muted-foreground">+98 21 1234 5678</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Email</h4>
                        <p className="text-sm text-muted-foreground">tehran@sanjaghak.com</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Office Hours</h4>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Isfahan Office</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Address</h4>
                        <p className="text-sm text-muted-foreground">
                          456 Technology Avenue<br />
                          Isfahan, Iran
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Phone</h4>
                        <p className="text-sm text-muted-foreground">+98 31 1234 5678</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Email</h4>
                        <p className="text-sm text-muted-foreground">isfahan@sanjaghak.com</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-1">Office Hours</h4>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Map or Additional Information */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                  <p className="mb-6">
                    We're always looking for opportunities to collaborate and develop innovative solutions. Contact us to learn more about our services and how we can help you achieve your goals.
                  </p>
                  <div className="bg-accent p-4 rounded-lg">
                    <h4 className="font-medium mb-2">General Inquiries</h4>
                    <p className="text-sm text-muted-foreground">
                      For general inquiries, please email us at <span className="text-primary">info@sanjaghak.com</span>
                    </p>
                  </div>
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

export default Contact;
