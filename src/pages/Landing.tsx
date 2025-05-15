
import * as React from 'react';
import { ArrowRight, Shield, Database, BarChart, Search, Zap, Layers, Globe } from 'lucide-react';
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
        <section className="chainhawk-section bg-gradient-to-b from-background to-chainhawk-dark/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-chainhawk-accent">ChainHawk</span> - Real-Time Threat Detection for Web3
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Secure. Observe. Act. The AI-powered blockchain observability and threat detection platform.
                </p>
              </div>
              
              {/* Waiting List Section */}
              <div className="w-full max-w-md mx-auto py-8">
                <h2 className="text-xl font-semibold mb-4">Join our Waiting List</h2>
                <WaitingList />
              </div>
            </div>
          </div>
        </section>
        
        {/* What is ChainHawk? */}
        <section className="chainhawk-section bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What is ChainHawk?</h2>
                <p className="text-muted-foreground md:text-xl">
                  ChainHawk is your security companion for blockchain networks. It listens to the chain, understands smart contract behavior, 
                  indexes critical events, and leverages AI agents to detect risks, flag anomalies, and trigger 
                  automatic or human-guided responses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-chainhawk-light">•</span>
                    <span>AI-Driven Threat Detection across EVM and non-EVM chains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-chainhawk-light">•</span>
                    <span>Cross-Chain Indexing with unified data contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-chainhawk-light">•</span>
                    <span>Real-Time Alerting and Graph-Based Intelligence</span>
                  </li>
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[350px] chainhawk-subtle-border">
                <AnimatedBlock />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-chainhawk-accent bg-background/60 px-6 py-3 rounded-full font-medium">
                    Blockchain Security Visualization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How it Works */}
        <section className="chainhawk-section-alt">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16 md:text-4xl">How ChainHawk Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-chainhawk-dark/20 p-4 rounded-full mb-5">
                    <Database className="h-6 w-6 text-chainhawk-light" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">1. Index</h3>
                  <p className="text-muted-foreground text-sm">
                    ChainHawk Indexers parse and standardize on-chain transactions block-by-block.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-chainhawk-dark/20 p-4 rounded-full mb-5">
                    <Zap className="h-6 w-6 text-chainhawk-light" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">2. Analyze</h3>
                  <p className="text-muted-foreground text-sm">
                    AI Agents evaluate indexed data using real-time threat models.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-chainhawk-dark/20 p-4 rounded-full mb-5">
                    <Shield className="h-6 w-6 text-chainhawk-light" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">3. Score & Alert</h3>
                  <p className="text-muted-foreground text-sm">
                    Risk scores are computed. Threats are alerted or auto-remediated.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-chainhawk-dark/20 p-4 rounded-full mb-5">
                    <Layers className="h-6 w-6 text-chainhawk-light" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">4. Feedback Loop</h3>
                  <p className="text-muted-foreground text-sm">
                    Every action and false positive feeds back into the learning engine.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-chainhawk-dark/20 p-4 rounded-full mb-5">
                    <Globe className="h-6 w-6 text-chainhawk-light" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">5. Respond</h3>
                  <p className="text-muted-foreground text-sm">
                    Alerts can trigger human review, automated workflows, or mitigation scripts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="chainhawk-section bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16 md:text-4xl">Why ChainHawk?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-chainhawk-dark/20 p-3 rounded-full">
                      <Zap className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">AI-Driven Threat Detection</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Autonomous agents powered by ML analyze behavior patterns, detect exploits, and surface high-risk activities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-chainhawk-dark/20 p-3 rounded-full">
                      <Globe className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">Cross-Chain Indexing</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Unified data contracts let indexers process blockchain data in a standardized way across any chain.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-chainhawk-dark/20 p-3 rounded-full">
                      <Layers className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">Community-Operated Indexers</h3>
                  </div>
                  <p className="text-muted-foreground">
                    ChainHawk supports decentralized data providers with staking and slashing incentives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="chainhawk-feature-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-chainhawk-dark/20 p-3 rounded-full">
                      <Search className="h-5 w-5 text-chainhawk-light" />
                    </div>
                    <h3 className="text-xl font-bold">Graph-Based Intelligence</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Maps blockchain address activity into interactive, visual graphs to trace ins/outs and anomaly clusters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Who it's for */}
        <section className="chainhawk-section-alt">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16 md:text-4xl">Who is ChainHawk for?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              <div className="chainhawk-feature-card text-center">
                <div className="bg-chainhawk-dark/20 p-3 rounded-full inline-flex mb-5">
                  <Shield className="h-5 w-5 text-chainhawk-light" />
                </div>
                <h3 className="font-bold mb-3">Security Teams</h3>
                <p className="text-sm text-muted-foreground">Monitor & defend protocol and infrastructure in real time</p>
              </div>
              
              <div className="chainhawk-feature-card text-center">
                <div className="bg-chainhawk-dark/20 p-3 rounded-full inline-flex mb-5">
                  <Zap className="h-5 w-5 text-chainhawk-light" />
                </div>
                <h3 className="font-bold mb-3">Founders & DAOs</h3>
                <p className="text-sm text-muted-foreground">Gain insight into smart contract threats and fund flows</p>
              </div>
              
              <div className="chainhawk-feature-card text-center">
                <div className="bg-chainhawk-dark/20 p-3 rounded-full inline-flex mb-5">
                  <Search className="h-5 w-5 text-chainhawk-light" />
                </div>
                <h3 className="font-bold mb-3">Auditors</h3>
                <p className="text-sm text-muted-foreground">Visualize and explore transactional patterns</p>
              </div>
              
              <div className="chainhawk-feature-card text-center">
                <div className="bg-chainhawk-dark/20 p-3 rounded-full inline-flex mb-5">
                  <Globe className="h-5 w-5 text-chainhawk-light" />
                </div>
                <h3 className="font-bold mb-3">Validators/Indexers</h3>
                <p className="text-sm text-muted-foreground">Participate in data infrastructure and earn rewards</p>
              </div>
              
              <div className="chainhawk-feature-card text-center">
                <div className="bg-chainhawk-dark/20 p-3 rounded-full inline-flex mb-5">
                  <Database className="h-5 w-5 text-chainhawk-light" />
                </div>
                <h3 className="font-bold mb-3">Researchers</h3>
                <p className="text-sm text-muted-foreground">Access structured threat intelligence across multiple chains</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* In Development / Roadmap */}
        <section className="chainhawk-section bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-8 md:text-4xl">In Development</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Layers className="h-4 w-4 text-chainhawk-light" />
                    </div>
                    <span>Custom Rule Engine</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <BarChart className="h-4 w-4 text-chainhawk-light" />
                    </div>
                    <span>Analytics Dashboards</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Zap className="h-4 w-4 text-chainhawk-light" />
                    </div>
                    <span>Self-Training AI Agents</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Globe className="h-4 w-4 text-chainhawk-light" />
                    </div>
                    <span>Chain-specific Plugins (Solana, Cosmos, BTC)</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Database className="h-4 w-4 text-chainhawk-light" />
                    </div>
                    <span>Security Oracle Integration for DApps</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="bg-chainhawk-dark/20 p-2 rounded-full">
                      <Shield className="h-4 w-4 text-chainhawk-light" />
                    </div>
                    <span>Staking & Slashing Economy for Indexers</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-8 md:text-4xl">MVP Focus</h2>
                <p className="text-muted-foreground mb-6">
                  We're starting with <span className="font-medium">Binance Smart Chain (BSC)</span> as our prototype network, 
                  indexing from a specific block height to reduce hardware costs.
                </p>
                <div className="chainhawk-feature-card p-8">
                  <h3 className="text-xl font-bold mb-6">Core MVP Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-chainhawk-light mt-1">•</span>
                      <span>Address activity graphs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chainhawk-light mt-1">•</span>
                      <span>Threat score generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chainhawk-light mt-1">•</span>
                      <span>Basic alerting system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-chainhawk-light mt-1">•</span>
                      <span>Manual feedback submission</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="chainhawk-section-alt">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 md:text-4xl">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="chainhawk-feature-card">
                <h3 className="text-xl font-bold mb-3">What chains are supported?</h3>
                <p className="text-muted-foreground">
                  We're starting with BSC and plan to expand to Ethereum, Solana, Bitcoin, 
                  and Cosmos ecosystems. Our indexing framework is designed to be chain-agnostic.
                </p>
              </div>
              
              <div className="chainhawk-feature-card">
                <h3 className="text-xl font-bold mb-3">How is data stored?</h3>
                <p className="text-muted-foreground">
                  ChainHawk uses a combination of traditional databases for speed and decentralized 
                  storage for immutability, ensuring data integrity while maintaining high performance.
                </p>
              </div>
              
              <div className="chainhawk-feature-card">
                <h3 className="text-xl font-bold mb-3">Will I be able to run my own indexer?</h3>
                <p className="text-muted-foreground">
                  Yes! Our roadmap includes support for community-operated indexers with incentives 
                  for quality data provision through our staking and slashing mechanism.
                </p>
              </div>
              
              <div className="chainhawk-feature-card">
                <h3 className="text-xl font-bold mb-3">When will ChainHawk launch?</h3>
                <p className="text-muted-foreground">
                  We're currently developing our private beta. Join our waiting list to be among 
                  the first to access the platform when we're ready to onboard users.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-chainhawk-dark text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Be the First to Know</h2>
                <p className="mx-auto max-w-[600px] text-lg opacity-90">
                  Join our waiting list to get early access to ChainHawk's private beta.
                </p>
              </div>
              <Button variant="outline" className="border-white hover:bg-white hover:text-chainhawk-dark transition-colors" onClick={() => {
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
