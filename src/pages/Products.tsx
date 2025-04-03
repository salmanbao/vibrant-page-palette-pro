
import React from 'react';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, BarChart3, Bell, Eye, Network, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products: React.FC = () => {
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
                  Advanced Blockchain Intelligence Products
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive tools for tracing, analyzing, and securing blockchain transactions across any chain.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Products */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Core Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <AlertCircle className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Risk Engine</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Unified risk scoring (0-100) based on on-chain behavior, entity clustering, and risk type tagging.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>On-chain behavioral heuristics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Cross-chain asset movement analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Known bad actor linkages</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Network className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Graph Explorer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Interactive visualization tool to explore wallet and transaction relationships with powerful filtering.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>2-5 hop transaction tracing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Filter by token, date, direction, etc</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Save and share public/private graphs</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Bell className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Real-Time Alerts</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Monitor wallets, protocols, or chains for suspicious activities with customizable notifications.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Inflow/outflow monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Risk score change notifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Multi-channel delivery (webhook, email, Telegram)</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Eye className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>Community Intel</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Crowdsourced blockchain intelligence with a reputation-based verification system.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Address and entity labeling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Risk reports and scam identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Gamified "Intel-to-Earn" rewards</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Advanced Features */}
        <section className="py-16 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Cross-Chain Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Follow the movement of funds between bridges and track assets across wrapped formats.
                </p>
                <Button variant="link" className="p-0">Coming Soon</Button>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Fund Flow Tracing</h3>
                <p className="text-muted-foreground mb-4">
                  One-click "follow the money" with automated detection of chain hops and mixers.
                </p>
                <Button variant="link" className="p-0">Coming Soon</Button>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">NFT & Token Forensics</h3>
                <p className="text-muted-foreground mb-4">
                  Detect wash trading, trace provenance, and track illicit NFT activities.
                </p>
                <Button variant="link" className="p-0">Coming Soon</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Developer Tools */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Developer Tools & APIs</h2>
                <p className="text-muted-foreground mb-6">
                  Integrate OpenTrace's powerful intelligence capabilities directly into your applications with our comprehensive API suite.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">REST/GraphQL APIs</h4>
                      <p className="text-sm text-muted-foreground">Access risk scoring, relationship graphs, and address metadata</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">SDK Integration</h4>
                      <p className="text-sm text-muted-foreground">Pre-built components for wallets, DeFi protocols, and explorers</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Network className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Webhook Notifications</h4>
                      <p className="text-sm text-muted-foreground">Real-time alerts for suspicious activities</p>
                    </div>
                  </li>
                </ul>
                <Button>Explore Developer Docs</Button>
              </div>
              <div className="lg:w-1/2 bg-secondary/10 p-6 rounded-lg font-mono text-sm">
                <pre className="text-muted-foreground">
                  {`// Example API Request
fetch('https://api.opentrace.io/v1/address/risk', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    address: '0x7e2f3c0e634c03292a59254a3846e38c4e434e38',
    chains: ['ethereum', 'bsc', 'polygon']
  })
})
.then(response => response.json())
.then(data => console.log(data))`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <PublicFooter />
    </div>
  );
};

export default Products;
