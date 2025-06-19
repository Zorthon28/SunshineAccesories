// src/app/page.tsx

import HeroSection from '@/components/layout/HeroSection';
import CollectionGrid from '@/components/layout/CollectionGrid';
import BrandPhilosophy from '@/components/layout/BrandPhilosophy';
import FeaturedProducts from '@/components/layout/FeaturedProducts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection
        // REMOVE imageUrl and imageAlt
        // imageUrl="/images/hero-gold-ring.jpg"
        // imageAlt="Brilliant gold diamond engagement ring on a dark background."
        // NEW: Add the gradientClass prop
        gradientClass="bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#B8860B]" // A nice metallic gold gradient
        headline="Where Timelessness Meets Brilliance"
        subheadline="Crafted for moments that last forever. Discover the art of fine jewelry."
        ctaText="Shop Engagement"
        ctaLink="/shop/engagement-rings"
        secondaryCtaText="Explore Collections"
        secondaryCtaLink="/collections"
        // videoUrl="/videos/jewelry-sparkle.mp4"
      />

      {/* New: Featured Collections Section */}
      <CollectionGrid />

      {/* New: Brand Philosophy Section */}
      <BrandPhilosophy />

      <FeaturedProducts />

      {/* ... other homepage sections will go here ... */}
    </main>
  );
}