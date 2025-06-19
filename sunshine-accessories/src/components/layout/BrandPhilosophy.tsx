"use client";

import { motion, type Variants } from 'framer-motion';
import { Gem, HandMetal, Leaf, HeartHandshake } from 'lucide-react';

interface ValueProp {
  icon: React.ElementType;
  title: string;
  description: string;
}

const valuePropositions: ValueProp[] = [
  {
    icon: HandMetal,
    title: 'Unrivaled Craftsmanship',
    description: 'Each piece meticulously handcrafted by master artisans, ensuring exceptional quality and detail.',
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced Gems',
    description: 'Committed to responsible and sustainable sourcing practices, empowering communities and protecting our planet.',
  },
  {
    icon: Gem,
    title: 'Timeless Design & Brilliance',
    description: 'Creations designed to transcend trends, becoming cherished heirlooms that sparkle for generations.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Experiences',
    description: 'Offering bespoke services and heartfelt support, ensuring your jewelry journey is as unique as you are.',
  },
];

const containerVariants: Variants = { // Explicitly type as Variants
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = { // Explicitly type as Variants
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring", // <-- The type property. TypeScript wants a specific literal here.
      stiffness: 100,
      damping: 12,
    },
  },
};

const BrandPhilosophy: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif text-yellow-800 dark:text-yellow-300 mb-4"
            variants={itemVariants} // Applies itemVariants to h2
          >
            The Art of Brilliance: Our Philosophy
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto"
            variants={itemVariants} // Applies itemVariants to p
          >
            At Sunshine Accessories, we believe jewelry is more than an adornment;
            it&apos;s a narrative. Each piece tells a story of unparalleled dedication,
            ethical provenance, and timeless design.
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {valuePropositions.map((prop) => (
              <motion.div
                key={prop.title}
                className="flex flex-col items-center text-center p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={itemVariants}
              >
                <prop.icon className="h-12 w-12 text-yellow-700 dark:text-yellow-400 mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold font-serif mb-2 text-zinc-800 dark:text-zinc-100">
                  {prop.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;