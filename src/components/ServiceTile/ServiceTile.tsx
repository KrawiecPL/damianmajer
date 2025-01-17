import Decor from "../Decor/Decor";
import HeadingText from "../HeadingText/HeadingText";
import Text from "../Text/Text";
import "./ServiceTile.css";

type ServiceTileProps = {
  image: string;
  title: string;
  period: string;
  price: string;
  decorImg: string;
  decorLocation: string;
  children: React.ReactNode;
};

function ServiceTile({
  image,
  title,
  period,
  price,
  decorImg,
  decorLocation,
  children,
}: ServiceTileProps) {
  return (
    <div className="serviceTile">
      <div className="leftContainer">
        <img src={image} alt="Zdjęcie usługi" />
      </div>
      <div className="rightContainer">
        <HeadingText size="small" text={title} />
        <Text weight="regular" className="tileText">
          {children}
        </Text>
        <div className="rate">
          <HeadingText size="small" text={`${price}/${period}`} />
        </div>
      </div>
      <Decor image={decorImg} location={decorLocation} />
    </div>
  );
}

export default ServiceTile;
