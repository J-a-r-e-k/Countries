import Style from './SearchEngine.module.scss';
import { ArrowRegionSVG } from '../../utils/Icon';
import { useEffect } from 'react';
import { continents } from '../../api';

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

  const buttonRegion = () =>
    continents.map((element) => {
      console.log(element);
      return (
        <li>
          <button
            onClick={() => {
              getCountriesData(element.id);
              changeNameRegionBtn(element.label);
            }}
          >
            {element.label}
          </button>
        </li>
      );
    });

  return (
    <section className={Style.searchEngine}>
      <input
        className={Style.inputSearch}
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
            <ul>{buttonRegion()}</ul>
          </div>
        )}
      </button>
    </section>
  );
};

export default SearchEngine;
