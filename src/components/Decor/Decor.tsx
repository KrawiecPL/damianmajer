import "./Decor.css";

type DecorProps = {
  image: string;
  location: string;
};

function Decor({ image, location }: DecorProps) {
  return <img src={image} alt="Decor" className={`decor ${location}`} />;
}

export default Decor;
