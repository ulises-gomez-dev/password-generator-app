import "./Button.css";
import ArrowRightIcon from "./assets/images/icon-arrow-right.svg";

function Button({ label }) {
  return (
    <button className="generate-btn">
      <p>{label}</p>
      <img src={ArrowRightIcon} alt="Arrow Right Icon" />
    </button>
  );
}

export default Button;
