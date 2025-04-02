
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const RiskScore: React.FC = () => {
  return (
    <div className="blockchain-card">
      <Label className="blockchain-header">Risk Score</Label>
      <RadioGroup defaultValue="medium" className="flex">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="low" id="low" />
          <Label htmlFor="low" className="text-sm">Low</Label>
        </div>
        <div className="flex items-center space-x-2 mx-4">
          <RadioGroupItem value="medium" id="medium" />
          <Label htmlFor="medium" className="text-sm">Medium</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="high" id="high" />
          <Label htmlFor="high" className="text-sm">High</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default RiskScore;
