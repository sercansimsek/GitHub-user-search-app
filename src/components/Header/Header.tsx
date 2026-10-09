import moon from "../../assets/images/icon-moon.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="Header">
      <div className="Header-logo">devfinder</div>
      <div className="Header-mode">
        <p className="Header-mode_text">DARK</p>
        <button className="Header-mode_btn">
          <img src={moon} alt="moon icon" className="Header-mode_btn-icon" />
        </button>
      </div>
    </div>
  );
};
