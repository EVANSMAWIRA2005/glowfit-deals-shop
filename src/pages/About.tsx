import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About GlowFit Deals</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Your trusted destination for beauty, cosmetics, and fitness essentials
          </p>

          <div className="bg-card p-8 rounded-lg border border-border mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              GlowFit Deals was founded with a simple mission: make high-quality beauty and fitness products accessible to everyone. We believe that looking and feeling your best shouldn't break the bank.
            </p>
            <p className="text-muted-foreground">
              From our humble beginnings, we've grown into a trusted online destination for thousands of customers across the United States. Our famous $2 Deals section has helped countless people discover new favorite products without the risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Customer First</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Community Driven</h3>
              <p className="text-sm text-muted-foreground">
                Built on feedback from real customers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Always Improving</h3>
              <p className="text-sm text-muted-foreground">
                Constantly adding new products and deals
              </p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>Carefully curated selection of beauty and fitness products</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>Unbeatable prices with our famous $2 Deals</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>Fast, reliable shipping across the United States</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>100% secure card payments with trusted providers</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                <span>Responsive customer support available 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
