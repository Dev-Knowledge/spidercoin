import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Partners from "./components/Partners";
import RoadMap from "./components/RoadMap";
import HowToBuy from "./components/HowToBuy";
import Footer from "./components/Footer";
import Ecosystem from "./components/Ecosystem";
import NewsLetter from "./components/NewsLetter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Features />
      <Partners />
      <RoadMap />
      <HowToBuy />
      <Ecosystem />
      <NewsLetter />
      <Footer />
    </main>
  );
}
