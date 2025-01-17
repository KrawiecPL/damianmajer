import "./HeadingText.css";

type HeadingTextProps = {
  text: string;
  size: "small" | "medium" | "semibig" | "big";
  invert?: boolean;
  className?: string;
};

function HeadingText({
  text,
  size,
  invert = false,
  className,
}: HeadingTextProps) {
  return size === "big" ? (
    <h1 className={`headingText ${className} ${invert ? "invert" : ""}`}>
      {text}
    </h1>
  ) : size === "medium" || size === "semibig" ? (
    <h2
      className={`headingText ${size} ${className} ${invert ? "invert" : ""}`}
    >
      {text}
    </h2>
  ) : (
    <div className={`headingText ${className} ${invert ? "invert" : ""}`}>
      {text}
    </div>
  );
}

export default HeadingText;
