
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const AppHeader: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold tracking-tight">BLOCKCHAIN INTELLIGENCE PLATFORM</h1>
      <div className="flex items-center space-x-2">
        <Label htmlFor="api-mode" className="text-sm">API</Label>
        <Switch id="api-mode" />
      </div>
    </header>
  );
};

export default AppHeader;
