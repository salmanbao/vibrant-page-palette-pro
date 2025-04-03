
import * as React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Shield, FileText, LineChart, Users, Briefcase, Code } from 'lucide-react';

const SolutionCard: React.FC<{
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

const Solutions: React.FC = () => {
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
                  Custom intelligence for every kind of blockchain professional
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Tailored blockchain intelligence solutions for different sectors and use cases.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Grid */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Solutions By User Type</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SolutionCard 
                title="For Security Teams" 
                description="Enterprise-grade intelligence to detect threats and protect digital assets."
                features={[
                  "Real-time suspicious activity monitoring",
                  "Automated threat detection",
                  "Customizable risk scoring models",
                  "Incident response workflows",
                ]}
                icon={<Shield className="h-5 w-5 text-primary" />}
              />
              
              <SolutionCard 
                title="For Exchanges & Wallets" 
                description="Compliance and risk management solutions for crypto businesses."
                features={[
                  "AML/KYT compliance tools",
                  "VASP due diligence",
                  "Automated suspicious activity reports",
                  "Travel rule compliance support",
                ]}
                icon={<LineChart className="h-5 w-5 text-primary" />}
              />
              
              <SolutionCard 
                title="For Regulators" 
                description="Transparent blockchain monitoring tools for oversight and enforcement."
                features={[
                  "Cross-chain transaction monitoring",
                  "Address blacklist/whitelist registries",
                  "Macro fund flow analysis",
                  "Forensic investigation tools",
                ]}
                icon={<FileText className="h-5 w-5 text-primary" />}
              />
              
              <SolutionCard 
                title="For DeFi Protocols" 
                description="Security and analytics tools to protect protocols and communities."
                features={[
                  "Treasury monitoring and alerts",
                  "Airdrop Sybil protection",
                  "Exploit pattern detection",
                  "Wallet safety SDK integration",
                ]}
                icon={<Code className="h-5 w-5 text-primary" />}
              />
              
              <SolutionCard 
                title="For Web3 Investors" 
                description="Due diligence and monitoring tools for crypto investment professionals."
                features={[
                  "Portfolio address monitoring",
                  "Token flow analysis",
                  "Team wallet tracking",
                  "Investment risk profiling",
                ]}
                icon={<Briefcase className="h-5 w-5 text-primary" />}
              />
              
              <SolutionCard 
                title="For Individual Users" 
                description="Personal protection tools to secure your crypto assets."
                features={[
                  "Personal wallet monitoring",
                  "Transaction verification",
                  "Scam detection before sending funds",
                  "Simple risk assessment tools",
                ]}
                icon={<Users className="h-5 w-5 text-primary" />}
              />
            </div>
          </div>
        </section>
        
        {/* Custom Solutions */}
        <section className="py-16 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Custom Integrations</h2>
                <p className="text-muted-foreground">
                  Need a specialized solution? Our team can build custom integrations and workflows
                  tailored to your specific use case and requirements.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Dedicated Implementation</h4>
                      <p className="text-sm text-muted-foreground">Custom dashboards and workflows built for your team</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Enterprise Data Ingestion</h4>
                      <p className="text-sm text-muted-foreground">Connect your internal systems with our intelligence platform</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">White-labeled Solutions</h4>
                      <p className="text-sm text-muted-foreground">Integrate our tools into your product with your own branding</p>
                    </div>
                  </li>
                </ul>
                <Button>Contact Sales</Button>
              </div>
              <div className="bg-card border rounded-lg p-6 h-[300px] flex items-center justify-center">
                <p className="text-center">Custom Solutions Illustration</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Supported Chains */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Supported Chains & Integrations</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-bold">Ethereum</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-bold">Bitcoin</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-bold">Solana</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-bold">Polygon</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-bold">BNB Chain</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-bold">Arbitrum</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
                <h3 className="font-bold">Optimism</h3>
              </div>
              <div className="bg-card border rounded-lg p-6 text-center">
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
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px]">
                  Talk to our team about how Glassblock can help with your specific use case.
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

export default Solutions;
