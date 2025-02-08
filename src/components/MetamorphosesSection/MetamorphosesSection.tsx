import HeadingText from "../HeadingText/HeadingText";
import MetamorphosesTile from "../MetamorphosesTile/MetamorphosesTile";
import Text from "../Text/Text";
import Slider from "react-slick";
import "./MetamorphosesSection.css";
import SliderArrow from "../SliderArrow/SliderArrow";
import BeforeImg from "../../assets/images/przed.png";
import AfterImg from "../../assets/images/po.png";

type MetamorphosesSectionProps = {
  id: string;
};

function MetamorphosesSection({ id }: MetamorphosesSectionProps) {
  const settings = {
    className: "tileSlider",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow prev />,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="metamorphosesSection" id={id}>
      <div className="metamorphosesTopContainer">
        <HeadingText text="Metamorfozy" size="medium" />
        <Text weight="semibold">
          Praca z ludźmi daje mi ogromną satysfakcję, a widok ich postępów jest
          dla mnie największą nagrodą.
        </Text>
      </div>
      <div className="metamorphosesBottomContainer">
        <Slider {...settings}>
          <MetamorphosesTile beforeImage={BeforeImg} afterImage={AfterImg} />
          <MetamorphosesTile beforeImage={BeforeImg} afterImage={AfterImg} />
          <MetamorphosesTile beforeImage={BeforeImg} afterImage={AfterImg} />
          <MetamorphosesTile beforeImage={BeforeImg} afterImage={AfterImg} />
        </Slider>
      </div>
    </div>
  );
}

export default MetamorphosesSection;
