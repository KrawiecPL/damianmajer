import "./SelectElement.css";

type SelectElementType = {
  children: string;
  value?: string | number;
  onClick: React.Dispatch<React.SetStateAction<string>>;
};

function SelectElement({ children, value, onClick }: SelectElementType) {
  const handleElementClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    onClick(String(target.getAttribute("data-value")));
  };

  return (
    <div
      data-value={value}
      onClick={(e) => handleElementClick(e)}
      className="selectElement"
    >
      <div className="text">{children}</div>
    </div>
  );
}

export default SelectElement;
