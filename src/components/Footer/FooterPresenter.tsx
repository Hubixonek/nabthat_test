const FooterPresenter = ({ handleShowPersonalData, handleReset }) => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__square">
            <p>
              CSS
              <br />
              IS
              <br />
              AWESOME
            </p>
          </div>
          <div className="footer__nabthat">
            <span className="footer__line"></span>
            <h1>nabthat</h1>
            <span className="footer__line"></span>
          </div>
          <div className="footer__buttonContainer">
            <div className="footer__displayOptionsContainer">
              <button className="footer__button--displayOptions">
                POKAŻ <i className={`fa fa-angle-up`}></i>
              </button>
              <div className={`footer__options`}>
                <button
                  className="footer__option"
                  onClick={() => {
                    console.log("Reset button clicked");
                    handleReset();
                  }}
                >
                  <span>
                    <i className="fa fa-angle-right"></i>
                  </span>
                  ZRESETUJ USTAWIENIA
                </button>
                <button
                  className="footer__option"
                  onClick={handleShowPersonalData}
                >
                  <span>
                    {" "}
                    <i className="fa fa-angle-right"></i>
                  </span>
                  POKAŻ DANE OSOBOWE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterPresenter;
