import HeroSection from "@/components/section/HeroSection";
import AboutUS from "@/components/AboutUS/AboutUS";
import Products from "@/components/Products/Products";
import ContactUS from "@/components/ContactUS/ContactUS";
import Latestproducts from "@/components/Products/LatestProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUS />
      <Products />
      <Latestproducts/>
      <ContactUS/>
    </>
  );
}
