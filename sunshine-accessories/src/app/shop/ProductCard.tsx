// src/components/shop/ProductCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast'; // REMOVE THIS LINE
import { toast } from 'sonner'; // NEW: Import toast directly from sonner
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  // const { toast } = useToast(); // REMOVE THIS LINE

  const handleAddToCart = () => {
    addToCart(product, 1); // Add 1 quantity of the product
    toast.success("Added to cart!", { // NEW: Use sonner's toast.success API
      description: `${product.name} has been added to your shopping cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="relative h-64 w-full overflow-hidden">
        <Link href={`/shop/${product.id}`} className="block">
          <Image
            src={product.imageUrl}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="flex flex-grow flex-col p-4 text-center">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
          <Link href={`/shop/${product.id}`} className="hover:text-amber-600 dark:hover:text-amber-400">
            {product.name}
          </Link>
        </h3>
        <p className="mb-4 text-xl font-bold text-amber-700 dark:text-amber-500">
          ${product.price.toFixed(2)}
        </p>
        <div className="mt-auto">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-amber-600 text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 transition-colors duration-200"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;