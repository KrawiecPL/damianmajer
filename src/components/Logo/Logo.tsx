import Logoimg from "../../assets/images/logo.webp";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img src={Logoimg} alt="Logo" />
    </div>
  );
}

export default Logo;
