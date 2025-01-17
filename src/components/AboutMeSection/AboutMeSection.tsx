import HeadingText from "../HeadingText/HeadingText";
import Text from "../Text/Text";
import "./AboutMeSection.css";
import DecorImage from "../../assets/images/aboutmesectiondecor.png";
import Decor from "../Decor/Decor";

type AboutMeSectionProps = {
  id: string;
};

function AboutMeSection({ id }: AboutMeSectionProps) {
  return (
    <div id={id} className="aboutMeSection">
      <Decor image={DecorImage} location="aboutmeup" />
      <div className="aboutMeTopContainer">
        <HeadingText size="medium" text="O mnie" />
        <Text weight="semibold">
          Pasja, doświadczenie podparte osiągnięciami oraz zdrowa relacja ciałai
          umysłu.
        </Text>
      </div>
      <div className="aboutMeMainContainer">
        <div className="aboutMeLeftContainer">
          <Text weight="regular">
            Jestem certyfikowanym trenerem personalnym z wieloletnim
            doświadczeniem w sportach siłowych i kulturystyce, które od lat są
            moją największą pasją i stylem życia. Moją misją jest wspieranie
            ludzi w osiąganiu ich celów sylwetkowych, budowaniu siły, zdrowia i
            pewności siebie możesz liczyć na pełne wsparcie na każdym etapie
            Twojej przemiany. Przez lata pracy pomogłem wielu osobom osiągnąć
            satysfakcjonujące metamorfozy, zdobywając przy tym ich zaufanie i
            uznanie. Sam mogę pochwalić się wieloma osiągnięciami w kulturystyce
            i sportach siłowych, które nauczyły mnie wytrwałości, dyscypliny i
            konsekwencji. Od najmłodszych lat fascynowałem się możliwościami
            ludzkiego ciała i dążyłem do tego, by stale przekraczać własne
            granice. Sporty siłowe to dla mnie nie tylko praca, ale przede
            wszystkim styl życia, który inspiruje mnie do ciągłego rozwoju i
            dzielenia się wiedzą z innymi.
          </Text>
          <Decor image={DecorImage} location="aboutmebottom" />
        </div>
        <div className="aboutMeRightContainer">
          <div className="rightContainerImage leftImage"></div>
          <div className="rightContainerImage rightImage"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
