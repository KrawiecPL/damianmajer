import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadingText from "../HeadingText/HeadingText";
import Text from "../Text/Text";
import "./ContactSection.css";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import SelectInput from "../SelectInput/SelectInput";
import SelectElement from "../SelectElement/SelectElement";
import { SetStateAction, useState } from "react";

type ContactSectionProps = {
  id: string;
};

type InputElement = {
  value: SetStateAction<string>;
  text: string;
};

const InputElements: InputElement[] = [
  {
    value: "1",
    text: "Treningi personalne",
  },
  {
    value: "2",
    text: "Treningi online",
  },
  {
    value: "3",
    text: "Plany żywieniowe",
  },
  {
    value: "4",
    text: "Plany treningowe",
  },
  {
    value: "5",
    text: "Nauka pozowania",
  },
  {
    value: "6",
    text: "Inny",
  },
];

function ContactSection({ id }: ContactSectionProps) {
  const [activeElement, setActiveElement] = useState("");

  return (
    <div className="contactSection" id={id}>
      <div className="contactContainer">
        <div className="contactLeftContainer">
          <HeadingText size="semibig" text="Kontakt" />
          <Text weight="regular" className="contactText">
            Jeżeli jesteś zainteresowany i zmotywowany do działania pisz śmiało!{" "}
          </Text>
          <div className="contactForm">
            <div className="inlineInputs">
              <input type="text" placeholder="Imię" />
              <input type="text" placeholder="Nazwisko" />
            </div>
            <input type="text" placeholder="Adres email" />
            <input type="text" placeholder="Numer telefonu" />
            <SelectInput
              activeElement={activeElement}
              placeholder="Wybierz temat"
              inputElements={InputElements}
            >
              {InputElements.map((element, index) => (
                <SelectElement
                  key={index}
                  onClick={setActiveElement}
                  value={element.value}
                >
                  {element.text}
                </SelectElement>
              ))}
            </SelectInput>
            <textarea
              name="message"
              id="message"
              placeholder="Treść wiadomości"
            ></textarea>
            <div className="sendButton disabled">
              Wyślij{" "}
              <FontAwesomeIcon icon={faPaperPlane} className="buttonIcon" />
            </div>
          </div>
        </div>
        <div className="contactRightContainer">
          <div className="contentContainer">
            <div className="contentTopContainer">
              <HeadingText size="semibig" text="Media" />
              <Text weight="regular" className="contactText">
                Zapraszam do kontaktu i śledzenia mojej pracy w mediach
                społecznościowych!{" "}
              </Text>
            </div>
            <div className="contentBottomContainer">
              <a
                href="https://instagram.com/trener_personalny_chojnice"
                target="_blank"
                rel="noopener noreferrer"
                className="contentElement"
              >
                <FontAwesomeIcon icon={faInstagram} className="elementIcon" />
                <div className="elementLabel">trener_personalny_chojnice</div>
              </a>
              <a
                href="https://facebook.com/damian.majer.988"
                target="_blank"
                rel="noopener noreferrer"
                className="contentElement"
              >
                <FontAwesomeIcon icon={faFacebook} className="elementIcon" />
                <div className="elementLabel">damian.majer.988</div>
              </a>
              <a
                href="https://tiktok.com/@damiantiiktok"
                target="_blank"
                rel="noopener noreferrer"
                className="contentElement"
              >
                <FontAwesomeIcon icon={faTiktok} className="elementIcon" />
                <div className="elementLabel">@damiantiiktok</div>
              </a>
              <a
                href="mailto:dmajer92@wp.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="contentElement"
              >
                <FontAwesomeIcon icon={faEnvelope} className="elementIcon" />
                <div className="elementLabel">dmajer92@wp.pl</div>
              </a>
              <a
                href="tel:+48 661 701 751"
                target="_blank"
                rel="noopener noreferrer"
                className="contentElement"
              >
                <FontAwesomeIcon icon={faPhone} className="elementIcon" />
                <div className="elementLabel">+48 661 701 751</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
