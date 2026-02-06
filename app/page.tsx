import Image from "next/image";
import HeroSection from "@/components/hero-section";
import BackgroundBubbles from "@/components/background-bubbles";
import Timeline from "@/components/timeline";
import NavBar from "@/components/nav-bar";
import Projects from "@/components/projects";
import Connect from "@/components/connect";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection />
      <Timeline></Timeline>
      <Projects></Projects>
      <Connect></Connect>
    </div>
  );
}
