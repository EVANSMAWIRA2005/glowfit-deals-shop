import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group bg-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-border">
        <div className="relative overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-semibold">
              SAVE {Math.round((1 - product.price / product.originalPrice) * 100)}%
            </div>
          )}
          {product.stockCount && product.stockCount < 20 && (
            <div className="absolute top-3 right-3 bg-background/90 text-foreground px-2 py-1 rounded-md text-xs font-medium">
              Only {product.stockCount} left!
            </div>
          )}
          {product.tags?.includes('$2 deal') && (
            <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-bold">
              $2 DEAL!
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
          )}

          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button 
            className="w-full gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};
