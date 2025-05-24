import HeroSection from "@/components/About/HeroSection";
import HistorySection from "@/components/About/HistorySection";
import ValuesSection from "@/components/About/ValuesSection";
import TeamSection from "@/components/About/TeamSection";
import ApproachSection from "@/components/About/ApproachSection";
import WhyWorkWithUsSection from "@/components/About/WhyWorkWithUsSection";
//import LocationSection from "@/components/About/LocationSection";
import CTAFinalSection from "@/components/About/CTAFinalSection";

export default function AboutPage() {
  return (
    <div className="pt-16">
      <HeroSection />
      <HistorySection />
      <ValuesSection />
      <TeamSection />
      <ApproachSection />
      <WhyWorkWithUsSection />
      {/*       <LocationSection />
       */}{" "}
      <CTAFinalSection />
    </div>
  );
}
