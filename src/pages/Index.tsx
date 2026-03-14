import HeroSearch from "@/components/HeroSearch";
import FeaturedApartments from "@/components/FeaturedApartments";
import CityCards from "@/components/CityCards";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const Index = () => (
  <main>
    <HeroSearch />
    <FeaturedApartments />
    {/** 
    <CityCards />
    */}
    <Reviews />
    <FAQ />
    <CTASection />
  </main>
);

export default Index;
