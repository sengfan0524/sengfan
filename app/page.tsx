import Image from "next/image";
import HeroSection from "@/components/hero-section";
import BackgroundBubbles from "@/components/background-bubbles";
import Timeline from "@/components/timeline";
export default function Home() {
  return (
    <div>
      <HeroSection />

      <Timeline></Timeline>
    </div>
  );
}
