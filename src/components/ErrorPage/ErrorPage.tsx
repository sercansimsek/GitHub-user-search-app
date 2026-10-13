import "./Error.scss";

export const ErrorPage = () => {
  return (
    <>
      <div className="Errorpage">
        <h2 className="Errorpage-title">No results found!</h2>
        <span className="Errorpage-text">
          We couldn’t find any GitHub users matching your search. Please
          double-check the username and try again.
        </span>
      </div>
    </>
  );
};
