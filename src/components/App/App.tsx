import "./App.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import IntroductorySection from "../IntroductorySection/IntroductorySection";
import Separator from "../Separator/Separator";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import MetamorphosesSection from "../MetamorphosesSection/MetamorphosesSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer/Footer";
import GallerySection from "../GallerySection/GallerySection";
import AchievementsSection from "../AchievementsSection/AchievementsSection";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <IntroductorySection isMobile={isMobile} />
      <Separator bottomMargin></Separator>
      <AboutMeSection id="aboutme" />
      <Separator topMargin></Separator>
      <AchievementsSection id="achievements" />
      <GallerySection id="gallery" />
      <MetamorphosesSection id="metamorphoses" />
      <ServicesSection id="services" isMobile={isMobile} />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}

export default App;
