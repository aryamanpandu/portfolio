import Image from "next/image";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeroSection></HeroSection>
    </div>
  );
}
