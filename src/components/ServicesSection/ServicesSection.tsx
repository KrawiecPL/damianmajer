import HeadingText from "../HeadingText/HeadingText";
import "./ServicesSection.css";
import Text from "../Text/Text";
import ServiceTile from "../ServiceTile/ServiceTile";
import ServiceImg from "../../assets/images/serviceimg.png";
import ServiceImg2 from "../../assets/images/serviceimg2.jpg";
import ServiceImg3 from "../../assets/images/serviceimg3.jpg";
import ServiceImg4 from "../../assets/images/serviceimg4.jpg";
import ServiceImg5 from "../../assets/images/serviceimg5.png";
import Decor1 from "../../assets/images/services1decor.png";
import Decor2 from "../../assets/images/services2decor.png";
import Decor3 from "../../assets/images/services3decor.png";
import Decor4 from "../../assets/images/services4decor.png";
import Decor5 from "../../assets/images/services5decor.png";

type ServicesSectionProps = {
  id: string;
};

function ServicesSection({ id }: ServicesSectionProps) {
  return (
    <div className="servicesSection" id={id}>
      <div className="servicesTopContainer">
        <HeadingText size="medium" text="Usługi" />
        <Text weight="semibold">
          Znajdziesz tutaj profesjonalne wsparcie i rozwiązania dopasowane do
          Twoich potrzeb. Wspólnie osiągniemy Twoje cel!
        </Text>
      </div>
      <div className="servicesBottomContainer">
        <ServiceTile
          image={ServiceImg4}
          title="treningi personalne"
          price="80 zł"
          period="godz."
          decorImg={Decor1}
          decorLocation="servicesRight"
        >
          Trening na miarę Twoich potrzeb i celów. Z moim wsparciem osiągniesz
          swoją wymarzoną sylwetkę szybciej, skuteczniej i z pełną motywacją!
        </ServiceTile>
        <ServiceTile
          image={ServiceImg}
          title="Treningi online"
          price="300 zł"
          period="tydz."
          decorImg={Decor2}
          decorLocation="servicesLeft"
        >
          Trening personalny online to elastyczne rozwiązanie. Otrzymasz
          indywidualny plan, stałą opiekę oraz regularne konsultacje bez
          wychodzenia z domu.
        </ServiceTile>
        <ServiceTile
          image={ServiceImg3}
          title="Plany żywieniowe"
          price="150 zł"
          period="szt."
          decorImg={Decor3}
          decorLocation="servicesRight"
        >
          Tworzę indywidualne plany żywieniowe, dopasowane do Twoich celów,
          zapotrzebowania kalorycznego oraz stylu życia.
        </ServiceTile>
        <ServiceTile
          image={ServiceImg2}
          title="Plany treningowe"
          price="200 zł"
          period="szt."
          decorImg={Decor4}
          decorLocation="servicesLeft"
        >
          Spersonalizowany plan treningowy to fundament satysfakcjonujących
          rezultatów. Mój plan skutecznie poprowadzi Cię przez drogę
          udoskonalania ciała i umysłu.
        </ServiceTile>
        <ServiceTile
          image={ServiceImg5}
          title="Nauka pozowania"
          price="80 zł"
          period="godz."
          decorImg={Decor5}
          decorLocation="servicesRight"
        >
          Pomogę Ci opanować techniki, które podkreślą Twoją symetrię, definicję
          mięśni i proporcje, jednocześnie dodając pewności siebie na scenie lub
          w sesjach zdjęciowych.
        </ServiceTile>
      </div>
    </div>
  );
}

export default ServicesSection;
