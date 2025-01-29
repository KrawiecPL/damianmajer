import HeadingText from "../HeadingText/HeadingText";
import Text from "../Text/Text";
import Medal1 from "../../assets/images/Medal16.webp";
import Medal2 from "../../assets/images/Medal18.webp";
import Medal3 from "../../assets/images/Medal10.webp";
import "./AchievementsSection.css";
import AchievementTile from "../AchievementTile/AchievementTile";
import Decor from "../Decor/Decor";
import LeftDecor from "../../assets/images/achievements1decor.png";
import RightDecor from "../../assets/images/achievements2decor.png";
import { useEffect, useState } from "react";

type AchievementsSectionProps = {
  id: string;
};

type Achievement = {
  image: string;
  title: string;
  category: string;
  type: "medale" | "puchary";
};

const achievementsList: Achievement[] = [
  {
    image: Medal1,
    title: "Mistrz Polski federacji W.F.F",
    category: "Kategoria kulturystyka do 90 kg",
    type: "medale",
  },
  {
    image: Medal2,
    title: "Mistrz Polski federacji W.F.F",
    category: "Kategoria kulturystyka do 90 kg",
    type: "medale",
  },
  {
    image: Medal3,
    title: "Mistrz Polski federacji W.F.F",
    category: "Kategoria kulturystyka do 90 kg",
    type: "medale",
  },
  {
    image: Medal3,
    title: "Mistrz Polski federacji W.F.F",
    category: "Kategoria kulturystyka do 90 kg",
    type: "medale",
  },
  {
    image: Medal3,
    title: "Mistrz Polski federacji W.F.F",
    category: "Kategoria kulturystyka do 90 kg",
    type: "medale",
  },
  {
    image: Medal3,
    title: "Mistrz Polski federacji W.F.F",
    category: "Kategoria kulturystyka do 90 kg",
    type: "puchary",
  },
  {
    image: Medal1,
    title: "Mistrz Polski federacji W.F.F",
    category: "Kategoria kulturystyka do 90 kg",
    type: "puchary",
  },
];

function AchievementsSection({ id }: AchievementsSectionProps) {
  const [activeType, setActiveType] = useState<"medale" | "puchary">("medale");
  const [filteredAchievements, setFilteredAchievements] = useState<
    Achievement[]
  >([]);

  useEffect(() => {
    const filtered = achievementsList.filter(
      (item) => item.type === activeType
    );
    setFilteredAchievements(filtered);
  }, [activeType]);

  const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const dataType = target.getAttribute("data-type");
    if (dataType === "medale" || dataType === "puchary") {
      setActiveType(dataType);
    }
  };

  return (
    <div className="achievementsSection" id={id}>
      <div className="achievementsTopContainer">
        <HeadingText size="medium" text="Osiągnięcia" />
        <Text weight="semibold">
          Wytrwałość w pasji i pokonane trudności zaowocowały całą gablotą
          prestiżowych nagród w kulturystyce
        </Text>
      </div>
      <div className="buttonsContainer">
        <div
          className={`achievementTypeButton ${
            activeType === "medale" ? "active" : ""
          }`}
          data-type="medale"
          onClick={(e) => handleButtonClick(e)}
        >
          Medale
        </div>
        <div
          className={`achievementTypeButton ${
            activeType === "puchary" ? "active" : ""
          }`}
          data-type="puchary"
          onClick={(e) => handleButtonClick(e)}
        >
          Puchary
        </div>
      </div>
      <div className="achievementsBottomContainer">
        <div className="bottomContainerWrapper">
          <Decor image={LeftDecor} location="achieLeft" />
          {filteredAchievements.map((achievement, index) => (
            <AchievementTile
              key={index}
              image={achievement.image}
              title={achievement.title}
              category={achievement.category}
            />
          ))}
          <Decor image={RightDecor} location="achieRight" />
        </div>
      </div>
    </div>
  );
}

export default AchievementsSection;
