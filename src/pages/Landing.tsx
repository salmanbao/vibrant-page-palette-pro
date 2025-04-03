
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Shield, Globe, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  The Google Maps for <span className="text-primary">Blockchain Relationships</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  OpenTrace is a real-time, community-powered, API-first blockchain intelligence platform that democratizes advanced analytics.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <Button size="lg">
                  Get Started
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
        
        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Address Intelligence</h3>
                  <p className="text-muted-foreground">
                    Unified risk scoring across chains with entity clustering and detailed tagging.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-Time Alerts</h3>
                  <p className="text-muted-foreground">
                    Monitor wallets and protocols for suspicious activities with instant notifications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Cross-Chain Analytics</h3>
                  <p className="text-muted-foreground">
                    Follow fund movements between chains with comprehensive bridge monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why OpenTrace Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why OpenTrace?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  We're democratizing blockchain intelligence for everyone, not just enterprises.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Open Access</h3>
                    <p className="text-muted-foreground">Freemium model with no sales gatekeeping</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Community-Driven</h3>
                    <p className="text-muted-foreground">Crowdsourced labeling and trust scores</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Cross-Chain</h3>
                    <p className="text-muted-foreground">Support for all major and emerging chains</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">Developer-First</h3>
                    <p className="text-muted-foreground">Public APIs and SDKs for seamless integration</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Start Tracing Today</h2>
                <p className="mx-auto max-w-[600px]">
                  Join thousands of users who trust OpenTrace for blockchain intelligence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Get Started
                </Button>
                <Link to="/pricing">
                  <Button variant="outline" className="border-primary-foreground" size="lg">
                    View Pricing
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
