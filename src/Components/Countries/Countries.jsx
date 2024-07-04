import Style from './Countries.module.scss';
import SearchEngine from '../SearchEngine/SearchEngine';
import { useNavigate } from 'react-router-dom';

const Countries = ({
  globalData,
  stanRegionBtn,
  changeRegion,
  nameRegionBtn,
  getCountriesData,
  changeNameRegionBtn,
  setSearch,
  search,
}) => {

  // zmienic na sprawdzenie czy impust jest pusta jeśli nie wyświetl search , jeśli search jest pusta tablica warunek wyświetl Countris == brak wyszukiwań 
  const viueCuntry = search.length !== 0 ? search : globalData;

  const navigate = useNavigate();

  const Countries = viueCuntry.map((country, index) => {
    return (
      <button
        className={Style.contrie}
        key={index}
        onClick={function () {
          navigate('/' + country.name.common);
        }}
      >
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
      </button>
    );
  });

  return (
    <section className={Style.countries}>
      <SearchEngine
        stanRegionBtn={stanRegionBtn}
        changeRegion={changeRegion}
        nameRegionBtn={nameRegionBtn}
        getCountriesData={getCountriesData}
        changeNameRegionBtn={changeNameRegionBtn}
        globalData={globalData}
        setSearch={setSearch}
      />

      {Countries}
    </section>
  );
};

export default Countries;
