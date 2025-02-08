import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HamburgerMenu.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type HamburgerMenuProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

function HamburgerMenu({ onClick }: HamburgerMenuProps) {
  return (
    <div onClick={onClick} className="hamburgerMenuContainer">
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}

export default HamburgerMenu;
