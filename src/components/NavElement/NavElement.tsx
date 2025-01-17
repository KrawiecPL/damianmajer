import "./NavElement.css";

type NavElementProps = {
  text: string;
  sectionId: string;
  footer?: boolean;
};

function NavElement({ text, sectionId, footer = false }: NavElementProps) {
  return (
    <a
      href={`#${sectionId}`}
      className={`navElement ${footer ? "footer" : ""}`}
    >
      <span className="elementText">{text}</span>
    </a>
  );
}

export default NavElement;
