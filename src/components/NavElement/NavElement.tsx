import "./NavElement.css";

type NavElementProps = {
  text: string;
  sectionId: string;
  footer?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

function NavElement({
  text,
  sectionId,
  footer = false,
  onClick,
}: NavElementProps) {
  return (
    <a
      href={`#${sectionId}`}
      className={`navElement ${footer ? "footer" : ""}`}
      onClick={onClick}
    >
      <span className="elementText">{text}</span>
    </a>
  );
}

export default NavElement;
