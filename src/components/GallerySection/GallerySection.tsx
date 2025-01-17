import HeadingText from "../HeadingText/HeadingText";
import "./GallerySection.css";
import Slider from "react-slick";
import SliderArrow from "../SliderArrow/SliderArrow";
import Image1 from "../../assets/images/gallery1.jpg";
import Image2 from "../../assets/images/gallery2.png";
import Image3 from "../../assets/images/gallery3.jpg";
import Image4 from "../../assets/images/gallery4.jpg";

type GallerySectionProps = {
  id: string;
};

const images = [Image1, Image2, Image3, Image4];

function GallerySection({ id }: GallerySectionProps) {
  const settings = {
    className: "tileSlider",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow negative />,
    prevArrow: <SliderArrow negative prev />,
    variableWidth: true,
  };

  return (
    <div className="gallerySection" id={id}>
      <div className="galleryContainer">
        <HeadingText size="medium" text="Galeria" invert />
        <Slider {...settings}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="sliderImg"
              alt={`Zdjęcie w galerii ${index}`}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default GallerySection;
