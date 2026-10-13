import moon from "../../assets/images/icon-moon.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">devfinder</div>
      <div className="Header-mode">
        <button className="Header-mode_btn">DARK</button>
        <img src={moon} alt="moon icon" className="Header-mode_icon" />
      </div>
    </div>
  );
};
