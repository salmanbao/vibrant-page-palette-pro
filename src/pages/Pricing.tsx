
import * as React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, HelpCircle } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const PricingTier: React.FC<{
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
  popular?: boolean;
}> = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonVariant = "default",
  popular = false 
}) => (
  <Card className={`flex flex-col ${popular ? 'border-primary shadow-md relative' : ''}`}>
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
        Most Popular
      </div>
    )}
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <div className="mt-4 flex items-baseline text-5xl font-extrabold">
        {price}
        {price !== "Free" && <span className="ml-1 text-2xl font-medium text-muted-foreground">/mo</span>}
      </div>
      <CardDescription className="mt-2">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button variant={buttonVariant} className="w-full">{buttonText}</Button>
    </CardFooter>
  </Card>
);

const Pricing: React.FC = () => {
  const [annual, setAnnual] = React.useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      
      <main className="flex-grow py-20">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Transparent pricing for everyone
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-xl">
              Choose the plan that's right for you, from individual researchers to enterprise teams.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mt-8 space-x-3">
              <Label htmlFor="billing-toggle" className={!annual ? "font-semibold" : ""}>Monthly</Label>
              <Switch
                id="billing-toggle"
                checked={annual}
                onCheckedChange={setAnnual}
              />
              <Label htmlFor="billing-toggle" className={annual ? "font-semibold" : ""}>
                Annual <span className="text-sm text-primary ml-1">Save 20%</span>
              </Label>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <PricingTier 
              title="Free"
              price="Free"
              description="Basic tools for individual users"
              features={[
                "10 wallet lookups per month",
                "Basic risk score information",
                "1-hop transaction graph",
                "Community support",
                "Single wallet monitoring"
              ]}
              buttonText="Get Started Free"
              buttonVariant="outline"
            />
            
            <PricingTier 
              title="Pro Analyst"
              price={annual ? "$79" : "$99"}
              description="Advanced tools for professionals"
              features={[
                "Unlimited wallet lookups",
                "Full risk score analysis",
                "Up to 5-hop transaction graph",
                "Email support",
                "10 wallet monitoring",
                "Data export capabilities",
                "API access (100 calls/day)"
              ]}
              buttonText="Start Free Trial"
              popular={true}
            />
            
            <PricingTier 
              title="Enterprise"
              price="Custom"
              description="Full-featured solution for organizations"
              features={[
                "Unlimited everything",
                "Custom risk scoring rules",
                "Unlimited hop transaction graph",
                "Dedicated account manager",
                "Unlimited wallet monitoring",
                "Bulk data operations",
                "Full API access",
                "White-label options"
              ]}
              buttonText="Contact Sales"
              buttonVariant="secondary"
            />
          </div>
          
          {/* Feature Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Compare Plan Features</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Feature</th>
                    <th className="py-3 px-4">Free</th>
                    <th className="py-3 px-4">Pro Analyst</th>
                    <th className="py-3 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Wallet Lookups</td>
                    <td className="py-3 px-4 text-center">10/month</td>
                    <td className="py-3 px-4 text-center">Unlimited</td>
                    <td className="py-3 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Risk Scoring</td>
                    <td className="py-3 px-4 text-center">Basic</td>
                    <td className="py-3 px-4 text-center">Full</td>
                    <td className="py-3 px-4 text-center">Custom Rules</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Graph Depth</td>
                    <td className="py-3 px-4 text-center">1-hop</td>
                    <td className="py-3 px-4 text-center">5-hop</td>
                    <td className="py-3 px-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">API Access</td>
                    <td className="py-3 px-4 text-center">✗</td>
                    <td className="py-3 px-4 text-center">Limited</td>
                    <td className="py-3 px-4 text-center">Full</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-medium">Support</td>
                    <td className="py-3 px-4 text-center">Community</td>
                    <td className="py-3 px-4 text-center">Email</td>
                    <td className="py-3 px-4 text-center">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer a free trial?</h3>
                <p className="text-muted-foreground">Yes, we offer a 14-day free trial of our Pro Analyst plan with no credit card required.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-muted-foreground">Absolutely! You can upgrade, downgrade, or cancel your plan at any time.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept credit/debit cards, PayPal, and crypto payments including BTC, ETH, and USDC.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer academic or non-profit discounts?</h3>
                <p className="text-muted-foreground">Yes, we offer special pricing for academic researchers, non-profits, and open source projects. Contact our sales team for details.</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started with Glassblock?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Sign up in minutes and start exploring blockchain relationships with powerful analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Free Trial</Button>
              <Button variant="outline" size="lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </main>
      
      <PublicFooter />
    </div>
  );
};

export default Pricing;
