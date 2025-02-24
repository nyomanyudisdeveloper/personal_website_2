import { ContactSection } from "@/components/Index/ContactSection";
import { HeroSection } from "@/components/Index/HeroSection";
import { JourneySection } from "@/components/Index/JourneySection";
import { ServiceSection } from "@/components/Index/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
