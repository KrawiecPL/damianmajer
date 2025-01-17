import "./AchievementTile.css";

type AchievementTileProps = {
  image: string;
  title: string;
  category: string;
};

function AchievementTile({ image, title, category }: AchievementTileProps) {
  return (
    <div className="achievementTile">
      <img src={image} alt="Osiągnięcie" />
      <div className="tileText">
        <div className="titleText">{title}</div>
        <div className="categoryText">{category}</div>
      </div>
    </div>
  );
}

export default AchievementTile;
