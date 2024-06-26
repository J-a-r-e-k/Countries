import { useState, useEffect } from 'react';

import Countries from '../Components/Countries/Countries';
import Header from '../Components/Header/Header';
import ClickedCountry from '../Components/ClickedCountry/ClickedCountry';

const API_URL = 'https://restcountries.com/v3.1';

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [stanRegionBtn, setStanRegionBtn] = useState(false);
  const [nameRegionBtn, setNameRegionBtn] = useState('Filter by Region');
  const [selectionCountry, setSelectionCountry] = useState('');
  // state do wyszukiwalki

  const changeRegion = (event) => {
    setStanRegionBtn(event);
  };

  const changeNameRegionBtn = (event) => {
    setNameRegionBtn(event);
  };
  //POBIERANIE DANYCH
  const getCountriesData = async (region) => {
    const source = region ? `region/${region}` : 'all';

    try {
      const response = await fetch(
        `${API_URL}/${source}?fields=name,capital,population,region,flags`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // setCountries(data.slice(0, 8));
      setCountries(data);
    } catch (error) {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    }
  };

  const countryOn = (event) => {
    setSelectionCountry(event);
  };

  const Click = () => {
    if (selectionCountry != '') {
      return <ClickedCountry countryOn={countryOn} />;
    } else
      return (
        countries != 0 && (
          <Countries
            changeRegion={changeRegion}
            stanRegionBtn={stanRegionBtn}
            nameRegionBtn={nameRegionBtn}
            getCountriesData={getCountriesData}
            changeNameRegionBtn={changeNameRegionBtn}
            globalData={countries}
            countryOn={countryOn}
          />
        )
      );
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <>
      <Header />
      <section className="countries">
        <Click />
      </section>
    </>
  );
}

export default HomePage;
