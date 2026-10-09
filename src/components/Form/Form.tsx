import "./Form.scss";
import search from "../../assets/images/icon-search.svg";

export const Form = () => {
  return (
    <form className="Form">
      <label htmlFor="Form-input">
        <img src={search} alt="search icon" className="Form-input_icon" />
        <input
          type="text"
          id="Form-input"
          className="Form-input"
          name="Form-input"
          placeholder="Search GitHub username..."
        />
      </label>
      <button className="Form-btn">Search</button>
    </form>
  );
};
