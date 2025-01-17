import "./SpecialButton.css";

type SpecialButtonProps = {
  text: string;
  href: string;
};

function SpecialButton({ text, href }: SpecialButtonProps) {
  return (
    <a href={`#${href}`} className="specialButton">
      {text}
    </a>
  );
}

export default SpecialButton;
