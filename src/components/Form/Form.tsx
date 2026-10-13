import "./Form.scss";
import search from "../../assets/images/icon-search.svg";
import { type ChangeEvent } from "react";

type Props = {
  query: string;
  onSetQuery: (value: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  hasError: boolean;
  errMsg: string;
};

export const Form = ({
  query,
  onSetQuery,
  onSubmit,
  errMsg,
  hasError,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSetQuery(e.target.value);
  };

  return (
    <form className="Form" onSubmit={onSubmit}>
      <div className="Form-search">
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
            aria-invalid={hasError}
            aria-describedby={hasError ? "Form-error" : undefined}
          />
        </label>
        {hasError && (
          <span className="Form-error" id="Form-error" role="alert">
            {errMsg}
          </span>
        )}
      </div>
      <button className="Form-btn">Search</button>
    </form>
  );
};
