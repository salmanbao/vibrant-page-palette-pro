
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const EntityLabel: React.FC = () => {
  return (
    <div className="blockchain-card">
      <Label htmlFor="entity" className="blockchain-header">Entity Label</Label>
      <Input 
        id="entity" 
        placeholder="Entity name" 
        defaultValue="Binance Hot Wallet"
      />
    </div>
  );
};

export default EntityLabel;
