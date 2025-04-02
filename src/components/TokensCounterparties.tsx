
import React from 'react';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const TokensCounterparties: React.FC = () => {
  return (
    <div className="blockchain-card h-full flex flex-col">
      <div>
        <Label className="blockchain-header">Tokens & Counterparties</Label>
        <h3 className="text-sm font-medium">Tokens</h3>
        <div className="mt-2 space-y-2">
          <div className="h-3 bg-muted rounded w-3/4"></div>
          <div className="h-3 bg-muted rounded"></div>
          <div className="h-3 bg-muted rounded w-5/6"></div>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div>
        <h3 className="text-sm font-medium">Cross-chain Activity</h3>
        <div className="mt-2 space-y-2">
          <div className="h-3 bg-muted rounded"></div>
          <div className="h-3 bg-muted rounded w-2/3"></div>
          <div className="h-3 bg-muted rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default TokensCounterparties;
