import HeroSection from '@/components/layout/HeroSection';
import CollectionGrid from '@/components/layout/CollectionGrid';
import BrandPhilosophy from '@/components/layout/BrandPhilosophy';
import FeaturedProducts from '@/components/layout/FeaturedProducts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <HeroSection
        imageUrl="/images/hero-gold-ring.jpg"
        imageAlt="Brilliant gold diamond engagement ring on a dark background."
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