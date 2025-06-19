// src/app/shop/page.tsx
import { products } from '@/data/products'; // Import your product data
import ProductCard from '@/app/shop/ProductCard'; // Import the ProductCard component

export const metadata = {
  title: 'Shop All Jewelry - Sunshine Accessories',
  description: 'Explore our exquisite collection of fine jewelry.',
};

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="mb-8 text-center text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
        Our Collections
      </h1>
      <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Discover unparalleled craftsmanship and timeless elegance across our curated selection of rings, necklaces, earrings, and more.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}