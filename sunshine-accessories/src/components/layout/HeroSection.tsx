"use client"; // Keep this at the very top!

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, type Variants } from 'framer-motion'; // Import 'Variants' type for better type safety
// You don't need to import Easing directly for common strings like "easeInOut" if using the array format

interface HeroSectionProps {
  imageUrl: string;
  imageAlt: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  videoUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  imageAlt,
  headline,
  subheadline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  videoUrl,
}) => {
  // Animation variants for text elements
  // Use cubic-bezier array for 'ease' to satisfy TypeScript's Easing type
  // Common easings:
  // "easeOut" is often [0, 0.55, 0.45, 1]
  // "easeInOut" is often [0.42, 0, 0.58, 1] (or [0.42, 0, 0.58, 1] for web standard ease-in-out)
  const textVariants: Variants = { // Explicitly type as Variants
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } }, // Using cubic-bezier array for ease
  };

  // Animation variants for button
  const buttonVariants: Variants = { // Explicitly type as Variants
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.3 } }, // Using cubic-bezier array for ease
  };

  return (
    <section className="relative w-full h-[700px] md:h-[900px] lg:h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Media (Image or Video) */}
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center transition-transform duration-700 ease-out hover:scale-103"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      )}

      {/* Elegant Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-transparent to-transparent opacity-10 md:opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 md:opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 md:flex-row md:justify-start md:text-left md:px-12 lg:px-24 max-w-7xl mx-auto">

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <motion.h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-tight mb-4 md:mb-6 drop-shadow-xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {headline}
          </motion.h1>
          <motion.p
            className="text-white text-lg md:text-xl lg:text-2xl max-w-xl md:max-w-none mb-8 md:mb-10 drop-shadow-md"
            variants={textVariants} // Still using textVariants
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.8, ease: [0.42, 0, 0.58, 1] }} // Updated ease
          >
            {subheadline}
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <Button
              asChild
              className="px-10 py-4 md:px-14 md:py-5 text-base md:text-lg lg:text-xl font-bold bg-white text-zinc-900 hover:bg-yellow-100 hover:text-yellow-800 transition-all duration-300 shadow-xl border border-yellow-200 uppercase tracking-wider"
            >
              <Link href={ctaLink}>
                {ctaText}
              </Link>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button
                asChild
                variant="outline"
                className="px-10 py-4 md:px-14 md:py-5 text-base md:text-lg lg:text-xl font-semibold text-white border-white hover:bg-white hover:text-zinc-900 transition-all duration-300 uppercase tracking-wider"
              >
                <Link href={secondaryCtaLink}>
                  {secondaryCtaText}
                </Link>
              </Button>
            )}
          </motion.div>
        </div>

        {/* Image/Video on the right */}
        <div className="hidden md:block md:w-1/2">
          {/* This could be a specific product shot, or an empty space for a clean look */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;