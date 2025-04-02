
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddressLookup: React.FC = () => {
  return (
    <div className="blockchain-card">
      <Label htmlFor="address" className="blockchain-header">Address Lookup</Label>
      <Input 
        id="address" 
        placeholder="0x7e2f3c0e634c03292a59254a3846e38c4e434e38" 
        className="font-mono text-sm"
        defaultValue="0x7e2f3c0e634c03292a59254a3846e38c4e434e38"
      />
    </div>
  );
};

export default AddressLookup;
