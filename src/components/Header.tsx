import { ShoppingCart, Menu, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

export const Header = () => {
  const itemCount = useCart((state) => state.getItemCount());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            GlowFit Deals
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/deals" className="text-foreground hover:text-primary transition-colors">
              $2 Deals
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors py-2">
              Shop
            </Link>
            <Link to="/deals" className="text-foreground hover:text-primary transition-colors py-2">
              $2 Deals
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors py-2">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors py-2">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
