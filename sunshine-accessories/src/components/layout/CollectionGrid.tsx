"use client"; // Keep this at the very top!

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, type Variants, type Transition } from 'framer-motion'; // Import 'Variants' and 'Transition' types

// Define the structure for a single collection item
interface CollectionItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Example data for your collections (replace with your actual data)
const collections: CollectionItem[] = [
  {
    id: 'rings',
    name: 'Exquisite Rings',
    description: 'Description1',
    imageUrl: '/images/collection-rings.jpg',
    link: '/collections/rings',
  },
  {
    id: 'necklaces',
    name: 'Elegant Necklaces',
    description: 'Description1',
    imageUrl: '/images/collection-necklaces.jpg',
    link: '/collections/necklaces',
  },
  {
    id: 'earrings',
    name: 'Sparkling Earrings',
    description: 'Description1',
    imageUrl: '/images/collection-earrings.jpg',
    link: '/collections/earrings',
  },
  {
    id: 'bracelets',
    name: 'Luxurious Bracelets',
    description: 'Description1',
    imageUrl: '/images/collection-bracelets.jpg',
    link: '/collections/bracelets',
  },
  {
    id: 'custom',
    name: 'Custom Creations',
    description: 'Description1',
    imageUrl: '/images/collection-custom.jpg',
    link: '/custom-jewelry',
  },
  {
    id: 'mens',
    name: "Men's Collection",
    description: 'Description1',
    imageUrl: '/images/collection-mens.jpg',
    link: '/collections/mens',
  },
];

// Define the spring transition properties explicitly with the Transition type
const springItemTransition: Transition = {
  type: "spring", // TypeScript now validates this string as a literal allowed by Transition type
  stiffness: 100,
  damping: 10,
  duration: 0.5, // Keep duration here if you want it to affect spring behavior
};


// Animation variants for grid items
const itemVariants: Variants = { // Explicitly type as Variants
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springItemTransition, // Use the explicitly typed transition
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.2, // This transition is a simple tween, so duration is fine here.
    },
  },
};

const CollectionGrid: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-center mb-4 text-yellow-800 dark:text-yellow-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Our Exquisite Collections
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-12 text-zinc-600 dark:text-zinc-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore handcrafted elegance and find the perfect piece to
          illuminate your style.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => ( // Keep index here if you plan to use custom for staggered animation
            <motion.div
              key={collection.id}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-zinc-800"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              // custom={index} // Uncomment this line if you want to use the index for staggered animations like `delay: index * 0.05`
            >
              <Link href={collection.link} className="block">
                <div className="w-full h-72 md:h-80 lg:h-96 relative overflow-hidden">
                  <Image
                    src={collection.imageUrl}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-3xl font-serif font-semibold mb-2 drop-shadow-md">
                        {collection.name}
                      </h3>
                      <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  asChild
                  className="px-6 py-2 bg-yellow-400 text-zinc-900 hover:bg-yellow-300 font-semibold text-sm rounded-full shadow-md"
                >
                  <Link href={collection.link}>
                    Shop Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;