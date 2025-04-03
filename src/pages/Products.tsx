
import * as React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, BarChart3, Database, Network, Shield, Eye } from 'lucide-react';
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
                  Glassblock brings together data, context, and insight
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive tools for tracing, analyzing, and securing blockchain transactions across any chain.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Wallet Relationship Graph */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Wallet Relationship Graph</h2>
                </div>
                <p className="text-muted-foreground">
                  Visualize connections between wallets and transactions with our interactive graph explorer. 
                  Trace fund flows across multiple hops and identify patterns that would be impossible to see manually.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>2-5 hop transaction tracing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Filter by token, date, value, and more</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Save and share investigation graphs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6 h-[300px] flex items-center justify-center">
                <p className="text-center">Graph Explorer UI Preview</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Risk & Behavior Engine */}
        <section className="py-16 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-card border rounded-lg p-6 h-[300px] flex items-center justify-center">
                <p className="text-center">Risk Scoring UI Preview</p>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Risk & Behavior Engine</h2>
                </div>
                <p className="text-muted-foreground">
                  Our advanced risk scoring system analyzes on-chain behavior to identify suspicious patterns and provide 
                  detailed risk assessments for any address or transaction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Unified risk scores (0-100) with detailed breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Behavioral pattern recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Risk type classification and tagging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Cross-Chain Asset Monitoring */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Cross-Chain Asset Monitoring</h2>
                </div>
                <p className="text-muted-foreground">
                  Track assets as they move between different blockchains through bridges, wrapping, or other cross-chain 
                  mechanisms with our unified monitoring system.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Support for 20+ blockchains including EVM, Bitcoin, and Solana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Bridge transaction monitoring and tracing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Token wrapping and cross-chain identity linking</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card border rounded-lg p-6 h-[300px] flex items-center justify-center">
                <p className="text-center">Cross-Chain Monitoring UI Preview</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* NFT & Token Intelligence */}
        <section className="py-16 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-card border rounded-lg p-6 h-[300px] flex items-center justify-center">
                <p className="text-center">NFT Intelligence UI Preview</p>
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">NFT & Token Intelligence</h2>
                </div>
                <p className="text-muted-foreground">
                  Specialized tools for NFT and token analysis including provenance tracking, wash trading detection, 
                  and illicit activity monitoring in digital asset markets.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>NFT provenance and ownership history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Wash trading and market manipulation detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Stolen asset tracking and flagging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* API Access */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4">API & Developer Tools</h2>
                <p className="text-muted-foreground mb-6">
                  Integrate Glassblock's powerful intelligence capabilities directly into your applications with our 
                  comprehensive API suite and developer tools.
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
fetch('https://api.glassblock.io/v1/address/risk', {
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
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Ready to Start Exploring?</h2>
                <p className="mx-auto max-w-[600px]">
                  Get access to the most comprehensive blockchain intelligence tools available.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  Start Free Trial
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

export default Products;
