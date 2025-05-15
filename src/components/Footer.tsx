
import * as React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background py-6 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-chainhawk-light" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-medium text-chainhawk-accent">ChainHawk</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ChainHawk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
