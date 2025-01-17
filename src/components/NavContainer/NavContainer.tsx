import NavElement from "../NavElement/NavElement";
import "./NavContainer.css";

type NavContainerProps = {
  children: React.ReactElement<typeof NavElement>[];
  footer?: boolean;
};

function NavContainer({ children, footer = false }: NavContainerProps) {
  return (
    <div className={`navContainer ${footer ? "footer" : ""}`}>{children}</div>
  );
}

export default NavContainer;
