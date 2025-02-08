import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MobileCloseNav.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type MobileCloseNavProps = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function MobileCloseNav({ onClick }: MobileCloseNavProps) {
  return (
    <div className="mobileCloseNav" onClick={onClick}>
      <FontAwesomeIcon icon={faXmark} />
    </div>
  );
}

export default MobileCloseNav;
