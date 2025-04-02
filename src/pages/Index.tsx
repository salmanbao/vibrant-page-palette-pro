
import React from 'react';
import AppHeader from '@/components/AppHeader';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import AddressLookup from '@/components/AddressLookup';
import RiskScore from '@/components/RiskScore';
import EntityLabel from '@/components/EntityLabel';
import TransactionGraph from '@/components/TransactionGraph';
import TokensCounterparties from '@/components/TokensCounterparties';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="w-full max-w-sm">
              <SearchBar />
            </div>
            
            <AddressLookup />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RiskScore />
              <EntityLabel />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[250px]">
              <TransactionGraph />
              <TokensCounterparties />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
