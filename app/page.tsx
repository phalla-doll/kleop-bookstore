import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { BookCarousel } from "@/components/BookCarousel";
import { FeatureSection } from "@/components/FeatureSection";
import { FeaturedCollection } from "@/components/FeaturedCollection";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";
import { GridLines } from "@/components/GridLines";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-light font-body text-brand-dark overflow-hidden">
      <GridLines />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Partners />
          <BookCarousel title="New Arrivals" />
          <FeatureSection />
          <FeaturedCollection title="Featured Collection" />
          <Categories />
        </main>
        <Footer />
      </div>
    </div>
  );
}
