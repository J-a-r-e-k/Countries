import Style from './ClickedCountry.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ClickedCountry = ({ countryName }) => {
  const [country, setCountrie] = useState([]);

  const navigate = useNavigate();

  const API_URL = 'https://restcountries.com/v3.1/name';

  const getCountriesData = async () => {
    try {
      const response =
        await fetch(`${API_URL}/${countryName}?fields=name,nativeName,population,region,subregion,capital,cca2,currencies,languages,borders,flags
  `);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCountrie(data);
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  

  const borderBtn = (country) =>
    country.borders.map((element) => {
      return (
        <button
          className={Style.btnBorder}
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              navigate('/' + 'Poland');
            }, 10);
          }}
        >
          {element}
        </button>
      );
    });

  const returnsCountry = country.map((country, index) => {
    const currencie = Object.values(country.currencies)[0].name;
    const language = Object.values(country.languages).map((nameLanguage) => {
      return <span>{nameLanguage} </span>;
    });

    return (
      <div className={Style.contry} key={index}>
        <button
          className={Style.btnContry}
          onClick={() => {
            navigate(-1);
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
        <div className={Style.wrapFlag}>
          <img
            className={Style.flag}
            src={country.flags.svg}
            alt={country.flags.alt}
          />
        </div>

        <div className={Style.wrapDescription}>
          <h2 className={Style.countryName}>{country.name.common}</h2>
          <div className={Style.wrapContent}>
            <p className={Style.description}>
              Native Name: <span>{country.name.official}</span>
            </p>
            <p className={Style.description}>
              Population: <span>{country.population}</span>
            </p>
            <p className={Style.description}>
              Region: <span>{country.region}</span>
            </p>
            <p className={Style.description}>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p className={Style.description}>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
          <div className={Style.wrapContent}>
            <p className={Style.description}>
              Top Level Domain: <span>{country.cca2}</span>
            </p>
            <p className={Style.description}>
              Currencies: <span>{currencie}</span>
            </p>
            <p className={Style.description}>Languages: {language}</p>
          </div>
          <div className={Style.wrapBorderBtn}>
            <p className={Style.description}>Border Countries:</p>
            <div className={Style.wrapCountries}> {borderBtn(country)}</div>
          </div>
        </div>
      </div>
    );
  });

  return <>{returnsCountry}</>;
};

export default ClickedCountry;
