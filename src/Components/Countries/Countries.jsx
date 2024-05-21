import Style from './Countries.module.scss';

const Countries = (globalData) => {
  const Countries = globalData.globalData.map((country, index) => {
    return (
      <div className={Style.contrie} key={index}>
        <img
          className={Style.flag}
          src={country.flags.svg}
          alt=""
          width={100}
        />
        <div className={Style.wrapDescription}>
          <h2 className={Style.countryName}>{country.name.common}</h2>
          <p className={Style.description}>
            Population: <span>{country.population}</span>
          </p>
          <p className={Style.description}>
            Region: <span>{country.region}</span>
          </p>
          <p className={Style.description}>
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    );
  });

  return <> {Countries}</>;
};

export default Countries;
