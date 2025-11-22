import { Product } from '@/types/product';

export const products: Product[] = [
  // Beauty Products
  {
    id: 'b1',
    name: 'Premium Makeup Sponges Set',
    price: 8.99,
    originalPrice: 14.99,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    description: 'Professional beauty blender sponges for flawless makeup application',
    inStock: true,
    stockCount: 45,
    rating: 4.8,
    reviews: 234,
    tags: ['bestseller']
  },
  {
    id: 'b2',
    name: 'Luxury Lip Gloss Collection',
    price: 12.99,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=500',
    description: '6-piece moisturizing lip gloss set with stunning shine',
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 'b3',
    name: 'Magnetic Eyelash Kit',
    price: 15.99,
    originalPrice: 24.99,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1583001809144-25e2f8894c6b?w=500',
    description: 'Reusable magnetic false eyelashes with applicator',
    inStock: true,
    stockCount: 12,
    rating: 4.9,
    reviews: 412
  },
  {
    id: 'b4',
    name: 'Hydrating Face Mask Set',
    price: 9.99,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500',
    description: '10-pack Korean beauty face masks for glowing skin',
    inStock: true,
    rating: 4.7,
    reviews: 567
  },

  // Cosmetics
  {
    id: 'c1',
    name: 'Professional Makeup Brush Set',
    price: 19.99,
    originalPrice: 34.99,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500',
    description: '12-piece professional makeup brush collection',
    inStock: true,
    rating: 4.9,
    reviews: 891,
    tags: ['bestseller']
  },
  {
    id: 'c2',
    name: 'Nail Polish Ultimate Kit',
    price: 16.99,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500',
    description: 'Complete nail art kit with 20 trending colors',
    inStock: true,
    rating: 4.5,
    reviews: 324
  },
  {
    id: 'c3',
    name: 'LED Makeup Mirror',
    price: 24.99,
    originalPrice: 39.99,
    category: 'cosmetics',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500',
    description: 'Touch screen LED vanity mirror with magnification',
    inStock: true,
    stockCount: 8,
    rating: 4.8,
    reviews: 678
  },

  // Gym Accessories
  {
    id: 'g1',
    name: 'Resistance Bands Set',
    price: 14.99,
    originalPrice: 22.99,
    category: 'gym',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500',
    description: '5-level resistance bands for full body workout',
    inStock: true,
    rating: 4.7,
    reviews: 543,
    tags: ['bestseller']
  },
  {
    id: 'g2',
    name: 'Premium Shaker Bottle',
    price: 11.99,
    category: 'gym',
    image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500',
    description: '28oz leak-proof protein shaker with storage',
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 'g3',
    name: 'Wrist Wraps Support',
    price: 8.99,
    category: 'gym',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500',
    description: 'Professional wrist support for heavy lifting',
    inStock: true,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'g4',
    name: 'Speed Jump Rope',
    price: 13.99,
    originalPrice: 19.99,
    category: 'gym',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    description: 'Adjustable weighted jump rope for cardio',
    inStock: true,
    stockCount: 23,
    rating: 4.5,
    reviews: 289
  },

  // $2 Deals
  {
    id: 'd1',
    name: 'Mini Beauty Sponges',
    price: 2.00,
    originalPrice: 5.99,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?w=500',
    description: 'Pack of 3 mini makeup blending sponges',
    inStock: true,
    rating: 4.4,
    reviews: 892,
    tags: ['$2 deal']
  },
  {
    id: 'd2',
    name: 'Hair Ties Bundle',
    price: 2.00,
    originalPrice: 4.99,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500',
    description: '20-pack no-damage hair elastics',
    inStock: true,
    rating: 4.3,
    reviews: 567,
    tags: ['$2 deal']
  },
  {
    id: 'd3',
    name: 'Makeup Remover Pads',
    price: 2.00,
    originalPrice: 6.99,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
    description: 'Reusable cotton makeup remover pads - 10 pack',
    inStock: true,
    rating: 4.6,
    reviews: 1234,
    tags: ['$2 deal']
  },
  {
    id: 'd4',
    name: 'Gym Sweat Band',
    price: 2.00,
    originalPrice: 5.99,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    description: 'Absorbent sports headband',
    inStock: true,
    rating: 4.2,
    reviews: 345,
    tags: ['$2 deal']
  },
  {
    id: 'd5',
    name: 'Nail File Set',
    price: 2.00,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500',
    description: 'Professional nail files - 5 pack',
    inStock: true,
    rating: 4.5,
    reviews: 678,
    tags: ['$2 deal']
  },
  {
    id: 'd6',
    name: 'Face Roller Mini',
    price: 2.00,
    originalPrice: 7.99,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500',
    description: 'Jade face massage roller',
    inStock: true,
    stockCount: 15,
    rating: 4.7,
    reviews: 923,
    tags: ['$2 deal']
  }
];
