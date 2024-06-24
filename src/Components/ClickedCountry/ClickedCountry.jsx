import Style from './ClickedCountry.module.scss';
const ClickedCountry = ({ countryOn }) => {
  return (
    <div className={Style.contry}>
      <button
        className={Style.btnContry}
        onClick={() => {
          countryOn('');
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z" />
        </svg>
        Back
      </button>
      <img src="" alt="" />

      <div className={Style.wrapDescription}>
        <h2 className={Style.countryName}>Polska</h2>
        <div>
          <p className={Style.description}>
            Native Name: <span>Poland</span>
          </p>
          <p className={Style.description}>
            Population: <span>999</span>
          </p>
          <p className={Style.description}>
            Region: <span>Europa</span>
          </p>
          <p className={Style.description}>
            Sub Region: <span> Western Europa</span>
          </p>
          <p className={Style.description}>
            Capital: <span>Warszawa</span>
          </p>
        </div>
        <div>
          <p className={Style.description}>
            Top Level Domain: <span>PL</span>
          </p>
          <p className={Style.description}>
            Currencies: <span>Zloty</span>
          </p>
          <p className={Style.description}>
            Languages: <span>Polski</span>
          </p>
        </div>
        <div>
          <p className={Style.description}>Border Countries:</p>
          <button className={Style.btnContry}>Germany</button>
        </div>
      </div>
    </div>
  );
};

export default ClickedCountry;
