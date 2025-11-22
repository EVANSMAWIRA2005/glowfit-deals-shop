export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'beauty' | 'cosmetics' | 'gym' | 'deals';
  image: string;
  description: string;
  inStock: boolean;
  stockCount?: number;
  rating?: number;
  reviews?: number;
  tags?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
