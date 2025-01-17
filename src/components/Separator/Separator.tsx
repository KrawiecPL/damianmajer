import "./Separator.css";

type SeparatorProps = {
  children?: React.ReactNode;
  hasDecor?: boolean;
  topMargin?: boolean;
  bottomMargin?: boolean;
};

function Separator({
  children,
  hasDecor = false,
  topMargin = false,
  bottomMargin = false,
}: SeparatorProps) {
  return (
    <div
      className={`separatorContainer ${topMargin ? "marginTop" : ""} ${
        bottomMargin ? "marginBottom" : ""
      }`}
    >
      {hasDecor ? children : ""}
      <div className="separator"></div>;
    </div>
  );
}

export default Separator;
