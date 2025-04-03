
import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Shield, FileText, LineChart, Users, Briefcase } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}> = ({ title, description, features, icon }) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col">
      <p className="mb-4 text-muted-foreground">
        {description}
      </p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full">Learn More</Button>
    </CardContent>
  </Card>
);

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Industry-Specific Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Tailored blockchain intelligence services for different sectors and use cases.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Target Audience Solutions */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions For Your Industry</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard 
                title="For Individuals" 
                description="Personal wallet monitoring and protection tools for crypto users."
                features={[
                  "Wallet monitoring and alerts",
                  "Scam and phishing detection",
                  "Visual tracing of funds",
                  "Address safety scoring",
                ]}
                icon={<Users className="h-5 w-5 text-primary" />}
              />
              
              <ServiceCard 
                title="For Exchanges" 
                description="Compliance and risk management solutions for crypto exchanges."
                features={[
                  "KYT/AML compliance",
                  "Chain-agnostic wallet screening",
                  "Suspicious Activity Reports",
                  "Market manipulation detection",
                ]}
                icon={<LineChart className="h-5 w-5 text-primary" />}
              />
              
              <ServiceCard 
                title="For DeFi Teams" 
                description="Security and analytics tools for decentralized protocols and NFT platforms."
                features={[
                  "Airdrop Sybil protection",
                  "NFT marketplace fraud detection",
                  "Treasury wallet monitoring",
                  "Wallet safety SDK integration",
                ]}
                icon={<Shield className="h-5 w-5 text-primary" />}
              />
              
              <ServiceCard 
                title="For Regulators" 
                description="Transparent blockchain monitoring tools for regulatory compliance."
                features={[
                  "Cross-chain wallet surveillance",
                  "Address blacklist registries",
                  "Open incident response",
                  "Chain-level AML statistics",
                ]}
                icon={<FileText className="h-5 w-5 text-primary" />}
              />
              
              <ServiceCard 
                title="For Blockchain Foundations" 
                description="Ecosystem transparency and security solutions for blockchain networks."
                features={[
                  "Ecosystem fund flow visualization",
                  "Network health tracking",
                  "Real-time illicit usage alerts",
                  "Public transparency dashboards",
                ]}
                icon={<Briefcase className="h-5 w-5 text-primary" />}
              />
              
              <ServiceCard 
                title="For Enterprises" 
                description="Enterprise-grade blockchain intelligence with advanced capabilities."
                features={[
                  "Custom integration services",
                  "Private intelligence sharing",
                  "White-labeled solutions",
                  "Dedicated support team",
                ]}
                icon={<Briefcase className="h-5 w-5 text-primary" />}
              />
            </div>
          </div>
        </section>
        
        {/* Integration Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Supported Chains & Integrations</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">Ethereum</h3>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">Bitcoin</h3>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">Solana</h3>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">Polygon</h3>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">BNB Chain</h3>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">Arbitrum</h3>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">Optimism</h3>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold">Avalanche</h3>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Plus support for Cosmos zones, Monero, Secret Network, and many other chains.
              </p>
              <Button variant="outline">See All Supported Chains</Button>
            </div>
          </div>
        </section>
        
        {/* Service Process */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Services Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Onboard</h3>
                <p className="text-muted-foreground">
                  Sign up for an account and choose the plan that fits your needs.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Integrate</h3>
                <p className="text-muted-foreground">
                  Connect your systems with our APIs or use our web interface.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Analyze</h3>
                <p className="text-muted-foreground">
                  Start analyzing blockchain data with our powerful tools.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px]">
                  Talk to our team about how OpenTrace can help you with your specific use case.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Request Demo
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

export default Services;
