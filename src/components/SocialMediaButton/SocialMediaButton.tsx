import "./SocialMediaButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SocialMediaButtonProps = {
  href: string;
  icon: IconProp;
};

function SocialMediaButton({ href, icon }: SocialMediaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="socialMediaButton"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default SocialMediaButton;
