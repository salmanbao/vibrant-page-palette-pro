
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, HelpCircle } from 'lucide-react';

const PricingToggle: React.FC<{
  isAnnual: boolean;
  setIsAnnual: (value: boolean) => void;
}> = ({ isAnnual, setIsAnnual }) => (
  <div className="flex items-center justify-center gap-4 mb-8">
    <span className={`font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
    <div 
      className="w-12 h-6 bg-muted rounded-full p-1 cursor-pointer"
      onClick={() => setIsAnnual(!isAnnual)}
    >
      <div 
        className={`h-4 w-4 rounded-full bg-primary transition-transform ${isAnnual ? 'translate-x-6' : ''}`} 
      />
    </div>
    <span className={`font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
      Annual <span className="text-xs text-accent">Save 20%</span>
    </span>
  </div>
);

const FeatureCheck: React.FC<{ included: boolean; text: string }> = ({ included, text }) => (
  <div className="flex items-start gap-2">
    {included ? (
      <Check className="h-5 w-5 text-primary flex-shrink-0" />
    ) : (
      <HelpCircle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
    )}
    <span className={included ? '' : 'text-muted-foreground'}>{text}</span>
  </div>
);

const PricingCard: React.FC<{
  title: string;
  price: { monthly: string, annual: string };
  description: string;
  features: Array<{ text: string, included: boolean }>;
  cta: string;
  popular?: boolean;
  isAnnual: boolean;
}> = ({ title, price, description, features, cta, popular = false, isAnnual }) => (
  <Card className={`flex flex-col ${popular ? 'border-primary shadow-lg' : ''} h-full`}>
    <CardHeader>
      {popular && <div className="uppercase text-xs font-bold text-primary mb-2">Most Popular</div>}
      <CardTitle>{title}</CardTitle>
      <div className="mt-2">
        <span className="text-3xl font-bold">{isAnnual ? price.annual : price.monthly}</span>
        <span className="text-muted-foreground"> /mo</span>
        {isAnnual && <div className="text-xs text-muted-foreground">Billed annually</div>}
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <FeatureCheck key={index} included={feature.included} text={feature.text} />
        ))}
      </div>
    </CardContent>
    <CardFooter>
      <Button variant={popular ? "default" : "outline"} className="w-full">
        {cta}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      title: "Free",
      price: { monthly: "$0", annual: "$0" },
      description: "Basic tools for individual users",
      features: [
        { text: "Basic address lookup", included: true },
        { text: "2-hop transaction graphs", included: true },
        { text: "1 wallet monitor", included: true },
        { text: "Daily alerts", included: true },
        { text: "Limited API access", included: false },
        { text: "Community intel access", included: true },
      ],
      cta: "Get Started",
      popular: false
    },
    {
      title: "Pro",
      price: { monthly: "$29", annual: "$23" },
      description: "Advanced tools for serious users",
      features: [
        { text: "Advanced filters", included: true },
        { text: "5-hop transaction graphs", included: true },
        { text: "10 wallet monitors", included: true },
        { text: "Real-time alerts", included: true },
        { text: "API access (100 req/day)", included: true },
        { text: "Community intel contributions", included: true },
      ],
      cta: "Subscribe",
      popular: true
    },
    {
      title: "Analyst",
      price: { monthly: "$149", annual: "$119" },
      description: "Professional tools for investigators",
      features: [
        { text: "Unlimited filters", included: true },
        { text: "Unlimited hop tracing", included: true },
        { text: "50 wallet monitors", included: true },
        { text: "Priority alerts", included: true },
        { text: "API access (1000 req/day)", included: true },
        { text: "Bulk tagging tools", included: true },
      ],
      cta: "Subscribe",
      popular: false
    },
    {
      title: "Enterprise",
      price: { monthly: "Custom", annual: "Custom" },
      description: "Tailored solutions for organizations",
      features: [
        { text: "White-label options", included: true },
        { text: "Dedicated support", included: true },
        { text: "Custom integrations", included: true },
        { text: "Unlimited monitors", included: true },
        { text: "Unlimited API access", included: true },
        { text: "Private intel sharing", included: true },
      ],
      cta: "Contact Us",
      popular: false
    }
  ];

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
                  Transparent, Simple Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Choose the plan that works best for your needs, with no hidden fees or complicated tiers.
                </p>
              </div>
              <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
            </div>
          </div>
        </section>
        
        {/* Pricing Tables */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <PricingCard 
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  cta={plan.cta}
                  popular={plan.popular}
                  isAnnual={isAnnual}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Add-ons */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Add-on Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Developer SDKs</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">$199</span>
                    <span className="text-muted-foreground"> /mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Integrate our intelligence tools directly into your applications.
                  </p>
                  <div className="space-y-2">
                    <FeatureCheck included={true} text="Wallet safety SDK" />
                    <FeatureCheck included={true} text="Risk assessment API" />
                    <FeatureCheck included={true} text="Custom webhooks" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>NFT Forensics</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">$149</span>
                    <span className="text-muted-foreground"> /mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Specialized tools for NFT marketplaces and collections.
                  </p>
                  <div className="space-y-2">
                    <FeatureCheck included={true} text="Wash trade detection" />
                    <FeatureCheck included={true} text="Provenance tracing" />
                    <FeatureCheck included={true} text="Royalty analytics" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Token Analytics</CardTitle>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">$299</span>
                    <span className="text-muted-foreground"> /mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Deep insights into token flows and holder patterns.
                  </p>
                  <div className="space-y-2">
                    <FeatureCheck included={true} text="Whale tracking" />
                    <FeatureCheck included={true} text="Holder concentration analysis" />
                    <FeatureCheck included={true} text="Bridge monitoring" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-2">Can I switch plans anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will take effect on your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Do you offer refunds?</h3>
                <p className="text-muted-foreground">
                  We offer a 14-day money-back guarantee for all new subscriptions if you're not satisfied.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards and cryptocurrency payments in BTC, ETH, and USDC.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Do you offer custom enterprise solutions?</h3>
                <p className="text-muted-foreground">
                  Yes, our enterprise tier offers customized solutions. Contact our sales team to discuss your needs.
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
                  Sign up today and start exploring blockchain intelligence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Sign Up Now
                </Button>
                <Button variant="outline" className="border-primary-foreground" size="lg">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <PublicFooter />
    </div>
  );
};

export default Pricing;
