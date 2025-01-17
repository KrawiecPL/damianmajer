import "./MetamorphosesTile.css";
import Logo from "../../assets/images/logo.webp";
import HeadingText from "../HeadingText/HeadingText";

type MetamorphosesTileProps = {
  beforeImage: string;
  afterImage: string;
};

function MetamorphosesTile({
  beforeImage,
  afterImage,
}: MetamorphosesTileProps) {
  if (
    !beforeImage ||
    !afterImage ||
    beforeImage.trim() === "" ||
    afterImage.trim() === "" ||
    typeof beforeImage !== "string" ||
    typeof afterImage !== "string"
  ) {
    return null; // Nie renderuje nic
  }

  return (
    <div className="metamorphosesTile">
      <div className="imageContainer">
        <img src={beforeImage} alt="Przed" className="tileBeforeImage" />
        <HeadingText size="medium" text="Przed" className="imageLabel" />
      </div>
      <img src={Logo} alt="Logo" className="tileCenteredLogo" />
      <div className="imageContainer">
        <img src={afterImage} alt="Po" className="tileAfterImage" />
        <HeadingText size="medium" text="Po" className="imageLabel" />
      </div>
    </div>
  );
}

export default MetamorphosesTile;
