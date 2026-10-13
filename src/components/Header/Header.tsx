import "./Header.scss";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";

type Props = {
  isLightMode: boolean;
  onSetIsLightMode: (b: boolean) => void;
};

export const Header = ({ isLightMode, onSetIsLightMode }: Props) => {
  const handleClick = () => {
    onSetIsLightMode(!isLightMode);
  };
  return (
    <div className="Header">
      <div className="Header-logo">devfinder</div>
      <div className="Header-mode">
        <button
          className={isLightMode ? "Header-mode_btn" : "Header-mode_btn-dark"}
          onClick={handleClick}
        >
          {isLightMode ? "DARK" : "LIGHT"}
        </button>
        <img
          src={isLightMode ? moon : sun}
          alt="moon icon"
          className="Header-mode_icon"
        />
      </div>
    </div>
  );
};
