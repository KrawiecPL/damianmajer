import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";
import "./SocialMediaContainer.css";

type SocialMediaContainerProps = {
  children: React.ReactElement<typeof SocialMediaButton>[];
};

function SocialMediaContainer({ children }: SocialMediaContainerProps) {
  return <div className="socialMediaContainer">{children}</div>;
}

export default SocialMediaContainer;
