
import * as React from 'react';
import PublicHeader from '@/components/PublicHeader';
import PublicFooter from '@/components/PublicFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicHeader />
      
      <main className="flex-grow py-20">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-xl">
              Have questions or need help? Our team is here to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="sales">Sales Question</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" rows={6} />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Info & Map */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground mb-1">Sales Inquiries:</p>
                    <p>sales@glassblock.io</p>
                    <p className="text-muted-foreground mt-2 mb-1">Support:</p>
                    <p>support@glassblock.io</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Social</h3>
                    <div className="flex gap-4 mt-2">
                      <Button variant="outline" size="sm">Twitter</Button>
                      <Button variant="outline" size="sm">Discord</Button>
                      <Button variant="outline" size="sm">LinkedIn</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p>123 Blockchain Avenue</p>
                    <p>Suite 200</p>
                    <p>San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
              
              {/* Map placeholder */}
              <div className="bg-card border rounded-lg h-[200px] flex items-center justify-center mt-8">
                <p className="text-center">Location Map</p>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">What are your support hours?</h3>
                <p className="text-muted-foreground">Our support team is available Monday through Friday, 9:00 AM to 5:00 PM EST. For urgent matters, premium support is available 24/7 for enterprise customers.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">How quickly will you respond to my inquiry?</h3>
                <p className="text-muted-foreground">We typically respond to all inquiries within 24 business hours. Enterprise support queries are answered within 4 hours.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I request a custom demo?</h3>
                <p className="text-muted-foreground">Yes! Select "Sales Question" in the subject dropdown and mention that you'd like a custom demo tailored to your use case.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer educational resources?</h3>
                <p className="text-muted-foreground">We provide extensive documentation, tutorials, and webinars. For educational institutions, we offer special programs and discounted rates.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <PublicFooter />
    </div>
  );
};

export default Contact;
