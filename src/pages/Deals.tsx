import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { AlertCircle } from 'lucide-react';

const Deals = () => {
  const dealsProducts = products.filter(p => p.category === 'deals');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">$2 Deals!</h1>
          <p className="text-xl opacity-90">Unbeatable quality at incredible prices</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full">
            <AlertCircle className="h-5 w-5" />
            <span className="font-semibold">Limited Stock - Grab Them Before They're Gone!</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dealsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 bg-muted p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Why Our $2 Deals?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="font-semibold mb-2">Same Great Quality</h3>
              <p className="text-sm text-muted-foreground">
                We never compromise on quality, even at $2!
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Perfect for Testing</h3>
              <p className="text-sm text-muted-foreground">
                Try new products without breaking the bank
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mystery Bags</h3>
              <p className="text-sm text-muted-foreground">
                Order 5+ items and get a surprise $2 mystery product!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Deals;
