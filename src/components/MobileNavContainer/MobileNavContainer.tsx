import "./MobileNavContainer.css";
import NavElement from "../NavElement/NavElement";

type MobileNavContainerProps = {
  children: React.ReactElement<typeof NavElement>[];
  className: string;
};

function MobileNavContainer({ children, className }: MobileNavContainerProps) {
  return (
    <div className={`mobileNavContainer ${className}`}>
      <div className="navWrapper">{children}</div>
    </div>
  );
}

export default MobileNavContainer;
