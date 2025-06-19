// src/data/products.ts

// Define the interface for a Product
export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
}

// Dummy product data
export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Diamond Solitaire Ring',
    price: 2500.00,
    imageUrl: '/images/product-solitaire-ring.jpg', // You'll need to add these images to your public/images folder
    imageAlt: 'Classic Diamond Solitaire Ring',
  },
  {
    id: '2',
    name: 'Emerald Cut Eternity Band',
    price: 1800.00,
    imageUrl: '/images/product-eternity-band.jpg',
    imageAlt: 'Emerald Cut Eternity Band',
  },
  {
    id: '3',
    name: 'Vintage Pearl Drop Earrings',
    price: 550.00,
    imageUrl: '/images/product-pearl-earrings.jpg',
    imageAlt: 'Vintage Pearl Drop Earrings',
  },
  {
    id: '4',
    name: 'Custom Engraved Gold Locket',
    price: 720.00,
    imageUrl: '/images/product-gold-locket.jpg',
    imageAlt: 'Custom Engraved Gold Locket',
  },
  {
    id: '5',
    name: 'Sapphire & Diamond Pendant',
    price: 1100.00,
    imageUrl: '/images/product-sapphire-pendant.jpg',
    imageAlt: 'Sapphire & Diamond Pendant',
  },
  {
    id: '6',
    name: 'Men\'s Onyx Signet Ring',
    price: 480.00,
    imageUrl: '/images/product-onyx-ring.jpg',
    imageAlt: 'Men\'s Onyx Signet Ring',
  },
];