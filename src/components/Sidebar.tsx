
import React from 'react';
import { Search, AlertTriangle, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar: React.FC = () => {
  return (
    <div className="w-16 bg-secondary border-r flex flex-col items-center py-4 gap-4">
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <Search className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <AlertTriangle className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
        <Settings className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Sidebar;
