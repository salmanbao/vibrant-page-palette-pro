
import * as React from 'react';
import { ArrowRight, Shield, Database, BarChart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaitingList from '@/components/WaitingList';
import AnimatedBlock from '@/components/AnimatedBlock';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Waiting List */}
        <section className="py-20 bg-gradient-to-b from-background to-chainhawk-dark/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-chainhawk-accent">ChainHawk</span> - Blockchain Intelligence Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The next-generation blockchain intelligence platform for security professionals and investigators.
                </p>
              </div>
              
              {/* Waiting List Section */}
              <div className="w-full max-w-md mx-auto py-6">
                <h2 className="text-xl font-semibold mb-3">Join our Waiting List</h2>
                <WaitingList />
              </div>
            </div>
          </div>
        </section>
        
        {/* What is ChainHawk? */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What is ChainHawk?</h2>
                <p className="text-muted-foreground md:text-xl">
                  ChainHawk is a comprehensive blockchain intelligence platform that helps you understand wallet relationships, 
                  assess risks, and trace fund movements across multiple blockchains with unparalleled clarity and speed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-chainhawk-light">•</span>
                    <span>Real-time monitoring and alerts across chains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chainhawk-light">•</span>
                    <span>Visualization of wallet relationship graphs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-chainhawk-light">•</span>
                    <span>AI-powered risk scoring and behavioral analytics</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-[300px]">
                <AnimatedBlock />
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-chainhawk-dark/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 md:text-4xl">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-chainhawk-medium bg-background/80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Search className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">Relationship Graphs</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Visualize connections between wallets and transactions with our interactive graph explorer.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-chainhawk-medium bg-background/80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">Risk Assessment</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Get comprehensive risk scores based on on-chain behavior and known patterns.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-chainhawk-medium bg-background/80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Database className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">Cross-Chain Intelligence</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Follow fund movements across multiple blockchains with our unified monitoring system.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-chainhawk-medium bg-background/80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <BarChart className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">API Access</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Integrate our intelligence directly into your applications with our comprehensive API.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-chainhawk-dark text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Be the First to Know</h2>
                <p className="mx-auto max-w-[600px]">
                  Join our waiting list to get early access when we launch.
                </p>
              </div>
              <Button variant="outline" className="border-white hover:bg-white hover:text-chainhawk-dark" onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                Join Waiting List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
