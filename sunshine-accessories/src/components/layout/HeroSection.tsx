// src/components/layout/HeroSection.tsx
"use client"; // Keep this at the very top!

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, type Variants } from 'framer-motion';

interface HeroSectionProps {
  // Make imageUrl and imageAlt optional
  imageUrl?: string;
  imageAlt?: string;
  // Add a new optional prop for the gradient Tailwind class
  gradientClass?: string;

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
  gradientClass, // Destructure the new prop
  headline,
  subheadline,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  videoUrl,
}) => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1], delay: 0.3 } },
  };

  return (
    <section className="relative w-full h-[700px] md:h-[900px] lg:h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Media (Video, Image, or Gradient) */}
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
      ) : imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageAlt || ''} // Ensure alt is not undefined even if optional
          fill
          priority
          className="object-cover object-center transition-transform duration-700 ease-out hover:scale-103"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      ) : gradientClass ? ( // NEW: Render gradient if gradientClass is provided
        <div className={`absolute inset-0 w-full h-full pointer-events-none ${gradientClass}`}></div>
      ) : (
        // Fallback if no video, image, or gradient class is provided
        <div className="absolute inset-0 w-full h-full bg-gray-800"></div>
      )}

      {/* Elegant Overlays (can remain or be adjusted/removed depending on desired look) */}
      {/* These might interact differently with a solid gradient vs. an image. Test and adjust. */}
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
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1, duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
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