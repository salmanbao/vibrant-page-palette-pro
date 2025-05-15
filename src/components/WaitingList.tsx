
import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Check } from 'lucide-react';

const WaitingList: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been added to our waiting list",
      });
    }, 1000);
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="flex flex-col items-center p-8 bg-chainhawk-dark/20 rounded-lg border border-chainhawk-medium/50 shadow-md">
          <div className="bg-chainhawk-dark rounded-full p-3 mb-5 pulse-glow">
            <Check className="h-6 w-6 text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Thank you!</h3>
          <p className="text-center text-muted-foreground">
            You're on the waiting list! We'll notify you when ChainHawk launches.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow border-chainhawk-medium/50 focus-visible:ring-chainhawk-dark focus-visible:border-chainhawk-medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-chainhawk-dark hover:bg-chainhawk-medium text-white shadow-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. No spam, just updates about our launch.
          </p>
        </form>
      )}
    </div>
  );
};

export default WaitingList;
