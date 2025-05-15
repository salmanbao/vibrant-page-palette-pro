
import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-chainhawk-light" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-bold text-xl text-chainhawk-accent">ChainHawk</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
