import "./Footer.css";
import Logo from "../../assets/images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import NavContainer from "../NavContainer/NavContainer";
import NavElement from "../NavElement/NavElement";

function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="logoContainer">
          <img src={Logo} alt="logo" />
        </div>
        <div className="contactContainer">
          <a
            href="tel:+48 661 701 751"
            target="_blank"
            rel="noopener noreferrer"
            className="elementContainer"
          >
            <FontAwesomeIcon icon={faPhone} className="elementIcon" />
            <div className="elementLabel">+48 661 701 751</div>
          </a>
          <a
            href="mailto:dmajer92@wp.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="elementContainer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="elementIcon" />
            <div className="elementLabel">dmajer92@wp.pl</div>
          </a>
        </div>
        <div className="socialmediaContainer">
          <div className="socialmediaLabel">Social media:</div>
          <div className="socialmediaIcons">
            <SocialMediaButton
              icon={faFacebook}
              href="https://facebook.com/damian.majer.988"
            />
            <SocialMediaButton
              icon={faInstagram}
              href="https://instagram.com/trener_personalny_chojnice"
            />
            <SocialMediaButton
              icon={faTiktok}
              href="https://tiktok.com/@damiantiiktok"
            />
          </div>
        </div>
        <div className="bottomFooterContainer">
          <div className="bottomFooter">
            <NavContainer footer>
              <NavElement text="O mnie" sectionId="aboutme" footer />
              <NavElement text="Osiągnięcia" sectionId="achievements" footer />
              <NavElement text="Galeria" sectionId="gallery" footer />
              <NavElement text="Usługi" sectionId="services" footer />
              <NavElement text="Kontakt" sectionId="contact" footer />
            </NavContainer>
            <div className="copyrightContainer">
              Copyright © 2024 • Damian Majer • Wszelkie prawa zastrzeżone
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
