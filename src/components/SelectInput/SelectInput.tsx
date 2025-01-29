import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SelectInput.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SelectElement from "../SelectElement/SelectElement";

type InputElement = {
  value: string | number;
  text: string;
};

type SelectInputType = {
  children?: React.ReactElement<typeof SelectElement>[];
  placeholder: string;
  activeElement?: string | number;
  inputElements: InputElement[];
};

function SelectInput({
  placeholder = "Wybierz",
  children,
  activeElement = "",
  inputElements,
}: SelectInputType) {
  const [activeSelect, setActiveSelect] = useState(false);

  const element = inputElements.find((item) => item.value === activeElement);

  return (
    <div
      className={`selectInput ${activeSelect ? "active" : ""}`}
      onClick={() => setActiveSelect(!activeSelect)}
    >
      <div className="placeholder">
        {activeElement === "" || !element ? placeholder : element?.text}
      </div>
      <FontAwesomeIcon
        icon={faAngleDown}
        className={`selectArrow ${activeSelect ? "active" : ""}`}
      />
      <div className={`selectList ${activeSelect ? "active" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default SelectInput;
