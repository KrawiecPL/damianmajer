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

type Service = {
  image: string;
  title: string;
  content: string;
  price: string;
  period: string;
  decorImg: string;
};

const services: Service[] = [
  {
    image: ServiceImg4,
    title: "treningi personalne",
    content:
      "Trening na miarę Twoich potrzeb i celów. Z moim wsparciem osiągniesz swoją wymarzoną sylwetkę szybciej, skuteczniej i z pełną motywacją!",
    price: "80 zł",
    period: "godz.",
    decorImg: Decor1,
  },
  {
    image: ServiceImg,
    title: "Treningi online",
    content:
      "Trening personalny online to elastyczne rozwiązanie. Otrzymasz indywidualny plan, stałą opiekę oraz regularne konsultacje bez wychodzenia z domu.",
    price: "300 zł",
    period: "tydz.",
    decorImg: Decor2,
  },
  {
    image: ServiceImg3,
    title: "Plany żywieniowe",
    content:
      "Tworzę indywidualne plany żywieniowe, dopasowane do Twoich celów, zapotrzebowania kalorycznego oraz stylu życia.",
    price: "150 zł",
    period: "szt.",
    decorImg: Decor3,
  },
  {
    image: ServiceImg2,
    title: "Plany treningowe",
    content:
      "Spersonalizowany plan treningowy to fundament satysfakcjonujących rezultatów. Mój plan skutecznie poprowadzi Cię przez drogę udoskonalania ciała i umysłu.",
    price: "200 zł",
    period: "szt.",
    decorImg: Decor4,
  },
  {
    image: ServiceImg5,
    title: "Nauka pozowania",
    content:
      "Pomogę Ci opanować techniki, które podkreślą Twoją symetrię, definicję mięśni i proporcje, jednocześnie dodając pewności siebie na scenie lub w sesjach zdjęciowych.",
    price: "80 zł",
    period: "godz.",
    decorImg: Decor5,
  },
];

type ServicesSectionProps = {
  id: string;
  isMobile: boolean;
};

function ServicesSection({ id, isMobile }: ServicesSectionProps) {
  return (
    <div className="servicesSection" id={id}>
      <div className="servicesTopContainer">
        <HeadingText size="medium" text="Usługi" />
        <Text weight="semibold" className="topText">
          Znajdziesz tutaj profesjonalne wsparcie i rozwiązania dopasowane do
          Twoich potrzeb. Wspólnie osiągniemy Twoje cel!
        </Text>
      </div>
      <div className="servicesBottomContainer">
        {services.map((service, index) => (
          <ServiceTile
            key={index}
            image={service.image}
            title={service.title}
            price={service.price}
            period={service.period}
            decorImg={service.decorImg}
            decorLocation={
              index % 2 === 0 || index === 0 ? "servicesRight" : "servicesLeft"
            }
            isMobile={isMobile}
          >
            {service.content}
          </ServiceTile>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
