
import * as React from 'react';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-[800px]">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                Our Mission
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're building the Google Maps for blockchain relationships - making advanced blockchain 
                intelligence accessible to everyone, not just enterprises.
              </p>
              <div className="flex justify-center">
                <Link to="/contact">
                  <Button size="lg">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-lg text-muted-foreground">
                  Glassblock was founded by a team of blockchain security researchers and data scientists who 
                  were frustrated by the lack of accessible tools for blockchain analysis.
                </p>
                <p className="text-lg text-muted-foreground">
                  We recognized that as blockchain adoption grows, there's an increasing need for transparency 
                  and intelligence tools that are available to everyone - from individuals to enterprises.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our platform combines advanced data analytics, machine learning, and a deep understanding 
                  of blockchain protocols to provide unparalleled visibility into on-chain relationships.
                </p>
              </div>
              <div className="bg-card border rounded-lg p-6 h-[300px] flex items-center justify-center">
                <p className="text-center">Team/Founders Image</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Community-First</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of collective intelligence and building tools that serve the entire ecosystem.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Security-Focused</h3>
                  <p className="text-muted-foreground">
                    We're committed to enhancing blockchain security through better intelligence and transparency.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Chain Agnostic</h3>
                  <p className="text-muted-foreground">
                    We support all major blockchains and are committed to multi-chain integration and interoperability.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Briefcase className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Innovation-Driven</h3>
                  <p className="text-muted-foreground">
                    We're constantly pushing the boundaries of what's possible with blockchain data analytics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Team Section - Optional */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team members would go here - using placeholders for now */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold">Team Member {i}</h3>
                  <p className="text-primary mb-2">Position/Role</p>
                  <p className="text-muted-foreground">Brief bio about the team member's background and expertise.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Investors/Backers - Optional */}
        <section className="py-16 bg-secondary/10">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Backed By</h2>
            
            <div className="flex flex-wrap justify-center gap-12">
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
                <p className="font-semibold">Investor 1</p>
              </div>
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
                <p className="font-semibold">Investor 2</p>
              </div>
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
                <p className="font-semibold">Investor 3</p>
              </div>
              <div className="w-32 h-16 bg-muted rounded flex items-center justify-center">
                <p className="font-semibold">Investor 4</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Careers - Optional */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-[800px] mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals who are passionate about blockchain intelligence and data analytics.
              </p>
              <Button variant="outline" size="lg">View Open Positions</Button>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Interested in learning more?</h2>
                <p className="mx-auto max-w-[600px]">
                  Get in touch with our team to learn how Glassblock can help you navigate blockchain relationships.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" className="border-primary-foreground" size="lg">
                    Explore Products
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

export default About;
