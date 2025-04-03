
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Shield, Globe, AlertCircle, Users, BarChart, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      
      <main className="flex-grow">
        {/* Hero Section with Address Search */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  The Google Maps for <span className="text-primary">Blockchain Relationships</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Glassblock is a real-time blockchain intelligence platform that brings together data, context, and insight.
                </p>
              </div>
              
              {/* Address Search Bar */}
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search wallet address or domain..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <Button size="lg">
                  Start Investigating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* What is Glassblock? */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What is Glassblock?</h2>
                <p className="text-muted-foreground md:text-xl">
                  Glassblock is a comprehensive blockchain intelligence platform that helps you understand wallet relationships, 
                  assess risks, and trace fund movements across multiple blockchains with unparalleled clarity and speed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Real-time monitoring and alerts across chains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Visualization of wallet relationship graphs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>AI-powered risk scoring and behavioral analytics</span>
                  </li>
                </ul>
              </div>
              <div className="bg-secondary/20 rounded-lg p-6 h-[300px] flex items-center justify-center">
                <p className="text-xl font-semibold text-center">Interactive Graph Visualization Placeholder</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Who is it for? */}
        <section className="py-16 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 md:text-4xl">Who is it for?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Security Teams</h3>
                  <p className="text-muted-foreground">Monitor wallet activities and receive real-time notifications about suspicious patterns.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Exchanges & Wallets</h3>
                  <p className="text-muted-foreground">Ensure compliance and mitigate risks with comprehensive wallet screening.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <AlertCircle className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">DeFi Protocols</h3>
                  <p className="text-muted-foreground">Protect against exploits, Sybil attacks, and monitor treasury activities.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <BarChart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Investigators</h3>
                  <p className="text-muted-foreground">Trace fund movements and uncover relationships between addresses and entities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Key Features */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 md:text-4xl">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Relationship Graphs</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Visualize connections between wallets and transactions with our interactive graph explorer.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Risk Assessment</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Get comprehensive risk scores based on on-chain behavior and known patterns.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Database className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Cross-Chain Intelligence</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Follow fund movements across multiple blockchains with our unified monitoring system.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <BarChart className="h-5 w-5 text-primary" />
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
        
        {/* Live Demo */}
        <section className="py-16 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Live Demo</h2>
              <p className="text-muted-foreground md:text-xl max-w-[700px]">
                See the power of Glassblock in action with a sample wallet analysis
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 h-[400px] flex items-center justify-center">
              <p className="text-xl font-semibold">Wallet Lookup Preview Interface</p>
            </div>
          </div>
        </section>
        
        {/* Trust Banner */}
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <h3 className="text-center text-muted-foreground mb-8">Trusted by security researchers and blockchain professionals</h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <div className="h-8 w-24 bg-muted rounded"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
              <div className="h-8 w-24 bg-muted rounded"></div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Start Investigating Today</h2>
                <p className="mx-auto max-w-[600px]">
                  Join the community of professionals who trust Glassblock for blockchain intelligence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Try Free Lookup
                </Button>
                <Link to="/pricing">
                  <Button variant="outline" className="border-primary-foreground" size="lg">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <PublicFooter />
    </div>
  );
};

export default Landing;
