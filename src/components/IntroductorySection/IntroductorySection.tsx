import HeadingText from "../HeadingText/HeadingText";
import RightImage from "../../assets/images/introsec.webp";
import DecorImage from "../../assets/images/introductorysectiondecor.png";
import Text from "../Text/Text";
import "./IntroductorySection.css";
import SpecialButton from "../SpecialButton/SpecialButton";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import {
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Decor from "../Decor/Decor";

type IntroductorySectionProps = {
  isMobile: boolean;
};

function IntroductorySection({ isMobile }: IntroductorySectionProps) {
  return (
    <div className="introductorySection">
      <Decor image={DecorImage} location="introup" />
      <div className="leftContainer">
        <HeadingText text="Trener z pasji do sportu" size="big" />
        <Text weight="regular">
          Nazywam się Damian Majer i jestem trenerem personalnym i kulturystą z
          pasji z wieloletnim doświadczeniem w kulturystyce oraz sportach
          siłowych. Przebrnąłem przez wiele wyzwań i przeszkód żeby osiągnąć
          mistorzstwo w budowaniu i eksponowaniu własnej masy mięśniowej. Teraz
          zapragnąłem dzielić się swoim doświadczeniem z innymi.
        </Text>
        <SpecialButton text="Metamorfozy" href="metamorphoses" />
        {!isMobile && (
          <SocialMediaContainer>
            <SocialMediaButton
              href="https://facebook.com/damian.majer.988"
              icon={faFacebook}
            />
            <SocialMediaButton
              href="https://instagram.com/trener_personalny_chojnice"
              icon={faInstagram}
            />
            <SocialMediaButton
              href="https://tiktok.com/@damiantiiktok"
              icon={faTiktok}
            />
          </SocialMediaContainer>
        )}

        <Decor image={DecorImage} location="introdown" />
      </div>
      <div className="rightContainer">
        <div className="backGradient"></div>
        <img src={RightImage} alt="Zdjęcie muskularnego trenera" />
      </div>
    </div>
  );
}

export default IntroductorySection;
