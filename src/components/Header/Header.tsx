import Logo from "../Logo/Logo";
import NavContainer from "../NavContainer/NavContainer";
import NavElement from "../NavElement/NavElement";
import "./Header.css";

function Header() {
  return (
    <header>
      <Logo />
      <NavContainer>
        <NavElement text="O mnie" sectionId="aboutme" />
        <NavElement text="Osiągnięcia" sectionId="achievements" />
        <NavElement text="Galeria" sectionId="gallery" />
        <NavElement text="Usługi" sectionId="services" />
        <NavElement text="Kontakt" sectionId="contact" />
      </NavContainer>
    </header>
  );
}

export default Header;
