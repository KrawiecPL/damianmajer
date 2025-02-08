import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import NavContainer from "../NavContainer/NavContainer";
import NavElement from "../NavElement/NavElement";
import MobileNavContainer from "../MobileNavContainer/MobileNavContainer";
import "./Header.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import MobileCloseNav from "../MobileCloseNav/MobileCloseNav";

type HeaderProps = {
  isMobile: boolean;
};

function Header({ isMobile }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Sprzątanie po zamknięciu
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsVisible((prev) => !prev);
  };

  return (
    <header>
      <Logo />
      {isMobile ? (
        <>
          <MobileNavContainer className={isVisible ? "active" : ""}>
            <MobileCloseNav onClick={handleClick} />
            <NavElement
              text="O mnie"
              sectionId="aboutme"
              onClick={handleClick}
            />
            <NavElement
              text="Osiągnięcia"
              sectionId="achievements"
              onClick={handleClick}
            />
            <NavElement
              text="Galeria"
              sectionId="gallery"
              onClick={handleClick}
            />
            <NavElement
              text="Usługi"
              sectionId="services"
              onClick={handleClick}
            />
            <NavElement
              text="Kontakt"
              sectionId="contact"
              onClick={handleClick}
            />
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
          </MobileNavContainer>

          <HamburgerMenu onClick={handleClick} />
        </>
      ) : (
        <NavContainer>
          <NavElement text="O mnie" sectionId="aboutme" />
          <NavElement text="Osiągnięcia" sectionId="achievements" />
          <NavElement text="Galeria" sectionId="gallery" />
          <NavElement text="Usługi" sectionId="services" />
          <NavElement text="Kontakt" sectionId="contact" />
        </NavContainer>
      )}
    </header>
  );
}

export default Header;
