import Image from "next/image";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import Overview from "./Overview";
import ContactGallery from "./ContactGallery";

export default function Home() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <HeroSection></HeroSection>
      {/* <Overview></Overview> */}
      <ContactGallery></ContactGallery>
    </div>
  );
}
