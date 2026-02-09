import HeroSection from "@/components/section/HeroSection";
import BasicInfo from "@/components/section/BasicInfo";
import OurFeaturedProducts from "@/components/section/OurFeaturedProducts";
import  {CustomerResponse}  from "@/components/section/CustomerResponse";
import { ConnectUS } from "@/components/section/ConnectUS";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BasicInfo />
      <OurFeaturedProducts/>
      <CustomerResponse/>
      <ConnectUS/>
    </>
  );
}
