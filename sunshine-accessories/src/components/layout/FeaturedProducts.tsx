"use client"; // This component will have animations and interactive elements

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, type Variants, type Transition } from 'framer-motion';

// Define the structure for a single product item
interface ProductItem {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  link: string;
}

// Example data for your featured products (replace with your actual data)
const featuredProducts: ProductItem[] = [
  {
    id: 'prod_001',
    name: 'Diamond Solitaire Pendant',
    price: '$1,850.00',
    imageUrl: '/images/product-pendant.jpg',
    link: '/product/prod_001',
  },
  {
    id: 'prod_002',
    name: 'Emerald Cut Eternity Band',
    price: '$2,400.00',
    imageUrl: '/images/product-eternity-band.jpg',
    link: '/product/prod_002',
  },
  {
    id: 'prod_003',
    name: 'Gold Teardrop Hoop Earrings',
    price: '$890.00',
    imageUrl: '/images/product-hoops.jpg',
    link: '/product/prod_003',
  },
  {
    id: 'prod_004',
    name: 'Sapphire & Diamond Necklace',
    price: '$1,200.00',
    imageUrl: '/images/product-sapphire-necklace.jpg',
    link: '/product/prod_004',
  },
  {
    id: 'prod_005',
    name: 'Classic Pearl Bracelet',
    price: '$450.00',
    imageUrl: '/images/product-pearl-bracelet.jpg',
    link: '/product/prod_005',
  },
  {
    id: 'prod_006',
    name: 'Men\'s Onyx Ring',
    price: '$720.00',
    imageUrl: '/images/product-mens-ring.jpg',
    link: '/product/prod_006',
  },
];

// Animation variants for the entire section container (for stagger effect)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger items by 0.1 seconds
    },
  },
};

// Define the spring transition properties explicitly
const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 10,
};

// Animation variants for individual product cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition, // Use the explicitly typed spring transition
  },
  hover: {
    scale: 1.03, // Slight scale up on hover
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)", // Add a subtle shadow
    transition: {
      duration: 0.2,
    },
  },
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-yellow-800 dark:text-yellow-300 mb-4">
            Our Curated Selections
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Discover our most sought-after designs and latest arrivals,
            perfectly crafted to elevate your style.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <Link href={product.link} className="block group">
                <div className="relative w-full aspect-square overflow-hidden"> {/* Using aspect-square for consistent image size */}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg md:text-xl font-semibold font-serif mb-1 text-zinc-800 dark:text-zinc-100">
                    {product.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                    {product.price}
                  </p>
                  {/* Optional: Add to Cart button on hover */}
                  {/* <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold">
                      Add to Cart
                    </Button>
                  </div> */}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action for All Products */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            asChild
            className="px-10 py-4 md:px-12 md:py-5 text-base md:text-lg font-bold bg-zinc-900 text-white hover:bg-zinc-700 transition-colors duration-300 uppercase tracking-wider shadow-lg"
          >
            <Link href="/shop">
              View All Products
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;