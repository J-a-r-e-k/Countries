import Style from './SearchEngine.module.scss';
import { ArrowRegionSVG } from '../../utils/Icon';
import { useEffect } from 'react';

const SearchEngine = ({
  stanRegionBtn,
  changeRegion,
  nameRegionBtn,
  getCountriesData,
  changeNameRegionBtn,
  arraySearch,
  globalData,
  updateSearchValue,
  searchValue,
}) => {
  useEffect(() => {
    const result = globalData.filter((element) => {
      // zwraca tablice z nazwami
      return Object.values(element.name)
        .join('') // zamienia na jednolity tekst
        .toLowerCase()
        .includes(searchValue.toLowerCase()); // sprawdca czy wpisany tekst jest jest w elemęcie tablicy
    });

    arraySearch(result);
  }, [searchValue, globalData]);

  // const continents = [
  // {id: "africa", label: "Africa"},
  // //
  // ]

  return (
    <section className={Style.searchEngine}>
      <input
        className={Style.imputSearch}
        type="text"
        placeholder="Search for a country"
        value={searchValue}
        onChange={(e) => {
          updateSearchValue(e.target.value);
          search();
        }}
      />

      <button
        className={Style.btnListRegion}
        onClick={() => {
          changeRegion(!stanRegionBtn);
        }}
      >
        {`${nameRegionBtn}`}
        <ArrowRegionSVG />
        {stanRegionBtn && (
          <div className={Style.regionList}>
            <ul>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('africa');
                    changeNameRegionBtn('Africa');
                  }}
                >
                  Africa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('americas');
                    changeNameRegionBtn('America');
                  }}
                >
                  America
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('Asia');
                    changeNameRegionBtn('Azja');
                  }}
                >
                  Azja
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('europe');
                    changeNameRegionBtn('Europe');
                  }}
                >
                  Europe
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData('Oceania');
                    changeNameRegionBtn('Oceania');
                  }}
                >
                  Oceania
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    getCountriesData();

                    changeNameRegionBtn('Filter by Region');
                  }}
                >
                  All Countries
                </button>
              </li>
            </ul>
          </div>
        )}
      </button>
    </section>
  );
};

export default SearchEngine;
