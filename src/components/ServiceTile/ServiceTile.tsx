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
  isMobile: boolean;
};

function ServiceTile({
  image,
  title,
  period,
  price,
  decorImg,
  decorLocation,
  children,
  isMobile,
}: ServiceTileProps) {
  return (
    <div className="serviceTile">
      <div className="leftContainer">
        <img src={image} alt="Zdjęcie usługi" />
      </div>
      <div className="rightContainer">
        <div className="descContainer">
          <HeadingText size="small" text={title} />
          <Text weight="regular" className="tileText">
            {children}
          </Text>
        </div>
        <div className="rate">
          <HeadingText size="small" text={`${price}/${period}`} />
        </div>
      </div>
      {!isMobile && <Decor image={decorImg} location={decorLocation} />}
    </div>
  );
}

export default ServiceTile;
