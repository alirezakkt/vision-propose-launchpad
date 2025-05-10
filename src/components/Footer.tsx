
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-card text-card-foreground py-8 border-t">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Providing intelligent traffic management and industrial monitoring solutions powered by artificial intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Tehran Office</li>
              <li>Isfahan Office</li>
              <li>info@sanjaghak.com</li>
              <li>+98 123 456 7890</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Sanjaghak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
