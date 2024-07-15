import "../../styles/header.css";
import { useAppContext } from "../AppContext";

const HeaderPresenter = () => {
  const { showPersonalData } = useAppContext();

  return (
    <header>
      <div className="header__container">
        <div className="header__iconContainer">
          <a href="/">
            <i className="header__icon fab fa-html5"></i>
          </a>
        </div>
        <div className="header__text">
          <h1 className="header__title">
            Zadanie <strong>rekrutacyjne</strong>
          </h1>
          {showPersonalData && (
            <h2 className="header__subtitle">Hubert Adamkowski</h2>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderPresenter;
