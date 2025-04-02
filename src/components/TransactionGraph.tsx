
import React from 'react';
import { Label } from '@/components/ui/label';

const TransactionGraph: React.FC = () => {
  return (
    <div className="blockchain-card h-full">
      <Label className="blockchain-header">Transaction Graph</Label>
      <div className="w-full h-[200px] flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          {/* Central node */}
          <circle cx="100" cy="100" r="15" className="transaction-node" />

          {/* Outer nodes and connections */}
          <circle cx="60" cy="60" r="10" className="transaction-node" />
          <line x1="85" y1="85" x2="70" y2="70" className="transaction-link" />

          <circle cx="140" cy="60" r="10" className="transaction-node" />
          <line x1="115" y1="85" x2="130" y2="70" className="transaction-link" />

          <circle cx="60" cy="140" r="10" className="transaction-node" />
          <line x1="85" y1="115" x2="70" y2="130" className="transaction-link" />

          <circle cx="140" cy="140" r="10" className="transaction-node" />
          <line x1="115" y1="115" x2="130" y2="130" className="transaction-link" />

          <circle cx="50" cy="100" r="10" className="transaction-node" />
          <line x1="85" y1="100" x2="60" y2="100" className="transaction-link" />

          <circle cx="150" cy="100" r="10" className="transaction-node" />
          <line x1="115" y1="100" x2="140" y2="100" className="transaction-link" />

          <circle cx="100" cy="50" r="10" className="transaction-node" />
          <line x1="100" y1="85" x2="100" y2="60" className="transaction-link" />

          <circle cx="100" cy="150" r="10" className="transaction-node" />
          <line x1="100" y1="115" x2="100" y2="140" className="transaction-link" />
        </svg>
      </div>
    </div>
  );
};

export default TransactionGraph;
