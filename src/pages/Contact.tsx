import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Have a question? We're here to help!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">support@glowfitdeals.com</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm text-muted-foreground">1-800-GLOWFIT</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-sm text-muted-foreground">24/7 Support</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us how we can help..."
                  rows={6}
                />
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

          <div className="mt-12 bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How long does shipping take?</h3>
                <p className="text-sm text-muted-foreground">
                  Most orders arrive within 3-5 business days. Free shipping on orders over $20!
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's your return policy?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer hassle-free returns within 30 days of purchase. See our full policy for details.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Are your $2 deals really that good?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We never compromise on quality. Our $2 deals are perfect for trying new products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
