import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./SliderArrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

type SliderArrowProps = {
  negative?: boolean;
  prev?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

function SliderArrow({
  negative = false,
  prev = false,
  onClick,
}: SliderArrowProps) {
  return (
    <div
      className={`sliderArrow ${negative ? "negative" : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={prev ? faArrowLeft : faArrowRight} />
    </div>
  );
}

export default SliderArrow;
