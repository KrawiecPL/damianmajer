import "./App.css";
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
  return (
    <div className="App">
      <Header />
      <IntroductorySection />
      <Separator bottomMargin></Separator>
      <AboutMeSection id="aboutme" />
      <Separator topMargin></Separator>
      <AchievementsSection id="achievements" />
      <GallerySection id="gallery" />
      <MetamorphosesSection id="metamorphoses" />
      <ServicesSection id="services" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}

export default App;
