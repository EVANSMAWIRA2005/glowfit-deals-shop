import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">GlowFit Deals</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for beauty, cosmetics, and gym essentials at unbeatable prices.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop?category=beauty" className="text-muted-foreground hover:text-primary">Beauty</Link></li>
              <li><Link to="/shop?category=cosmetics" className="text-muted-foreground hover:text-primary">Cosmetics</Link></li>
              <li><Link to="/shop?category=gym" className="text-muted-foreground hover:text-primary">Gym Accessories</Link></li>
              <li><Link to="/deals" className="text-muted-foreground hover:text-primary">$2 Deals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link to="/policies?section=shipping" className="text-muted-foreground hover:text-primary">Shipping Info</Link></li>
              <li><Link to="/policies?section=returns" className="text-muted-foreground hover:text-primary">Returns</Link></li>
              <li><Link to="/policies?section=faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/policies?section=privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/policies?section=terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/policies?section=refund" className="text-muted-foreground hover:text-primary">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 GlowFit Deals. All rights reserved. | Secure card payments accepted</p>
          <div className="flex justify-center gap-4 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" alt="Discover" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};
