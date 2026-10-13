import "./Form.scss";
import search from "../../assets/images/icon-search.svg";
import { type ChangeEvent } from "react";

type Props = {
  query: string;
  onSetQuery: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ query, onSetQuery, onSubmit }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSetQuery(e.target.value);
  };

  return (
    <form className="Form" onSubmit={onSubmit}>
      <label htmlFor="Form-input">
        <img src={search} alt="search icon" className="Form-input_icon" />
        <input
          type="text"
          id="Form-input"
          className="Form-input"
          name="Form-input"
          placeholder="Search GitHub username..."
          onChange={handleChange}
          value={query}
        />
      </label>
      <button className="Form-btn">Search</button>
    </form>
  );
};
