import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Truck, Shield, Clock, RefreshCw, Star } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const Index = () => {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const trendingProducts = products.filter(p => p.tags?.includes('bestseller')).slice(0, 4);
  const dealsProducts = products.filter(p => p.category === 'deals').slice(0, 6);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Beauty, Cosmetics & Gym Essentials
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Starting at just <span className="text-primary font-bold">$2!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop?category=beauty">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Beauty
                </Button>
              </Link>
              <Link to="/shop?category=gym">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Shop Gym
                </Button>
              </Link>
              <Link to="/deals">
                <Button size="lg" className="w-full sm:w-auto bg-destructive hover:bg-destructive/90">
                  $2 Deals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Icons */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Truck className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Fast U.S. Shipping</h3>
              <p className="text-sm text-muted-foreground">Free over $20</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-1">100% Secure</h3>
              <p className="text-sm text-muted-foreground">Card Payments</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Always Here</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw className="h-10 w-10 text-primary mb-3" />
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-Day Policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Products</h2>
            <p className="text-muted-foreground">Our most popular items this month</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop">
              <Button size="lg" variant="outline">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* $2 Deals Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">$2 Deals!</h2>
            <p className="text-muted-foreground">Incredible products at unbeatable prices</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/deals">
              <Button size="lg">See All $2 Deals</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', review: 'Amazing quality for the price! The makeup sponges are just as good as expensive brands.', rating: 5 },
              { name: 'Jessica L.', review: 'Fast shipping and great customer service. Love the $2 deals section!', rating: 5 },
              { name: 'Mike R.', review: 'The gym accessories are perfect for my home workouts. Highly recommend!', rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-card p-6 rounded-lg border border-border shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{review.review}"</p>
                <p className="font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Popup */}
      <Dialog open={showEmailPopup} onOpenChange={setShowEmailPopup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">Get 10% Off Your First Order!</DialogTitle>
            <DialogDescription>
              Join our mailing list for exclusive deals and beauty tips.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Input type="email" placeholder="Enter your email" />
            <Button className="w-full" onClick={() => setShowEmailPopup(false)}>
              Subscribe & Save
            </Button>
            <button 
              onClick={() => setShowEmailPopup(false)}
              className="text-sm text-muted-foreground hover:text-foreground w-full text-center"
            >
              No thanks, I'll pay full price
            </button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Index;
