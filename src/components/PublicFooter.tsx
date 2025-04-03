
import * as React from 'react';
import { Link } from 'react-router-dom';

const PublicFooter: React.FC = () => {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Glassblock</h3>
          <p className="text-sm text-muted-foreground">
            The blockchain intelligence platform that brings together data, context, and insight.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Features</Link></li>
            <li><Link to="/solutions" className="text-muted-foreground hover:text-foreground">Solutions</Link></li>
            <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Plans</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Community</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Support</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Team</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-4 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Glassblock. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
