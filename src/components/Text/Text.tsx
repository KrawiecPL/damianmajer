import "./Text.css";

type TextProps = {
  children: React.ReactNode;
  weight: "bold" | "semibold" | "regular";
  className?: string;
};

function Text({ children, weight, className }: TextProps) {
  return <div className={`text ${weight} ${className}`}>{children}</div>;
}

export default Text;
