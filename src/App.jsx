import { useState, useEffect } from 'react';
import './App.scss';
import Countries from './Components/Countries/Countries';
import Switch from './utils/Switch';

function App() {
  const [globalData, setGlobalData] = useState(0);
  const [stanRegionBtn, setStanRegionBtn] = useState(false);
  const ArrowRegionSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
      </svg>
    );
  };

  //POBIERANIE DANYCH
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        // 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags'
        // 'https://restcountries.com/v3.1/region/europe?fields=name,capital,population,region,flags'
        // 'https://restcountries.com/v3.1/region/americas?fields=name,capital,population,region,flags'
        'https://restcountries.com/v3.1/region/africa?fields=name,capital,population,region,flags'
        // 'https://restcountries.com/v3.1/region/Oceania'
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setGlobalData(data.slice(0, 8)); // Zapisanie pierwszych 10 krajów w stanie
        })
        .catch((error) => {
          console.error('Wystąpił błąd podczas pobierania danych:', error);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="title">Where in the world?</h1>
        <Switch className={'colorMode'} text={'Dark Mode'} />
      </header>
      <section className="search">
        <svg
          className="magnifier"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="grey"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="25" y1="25" x2="16.65" y2="16.65"></line>
        </svg>

        <input
          className="imputSearch"
          type="text"
          placeholder="Search for a country"
        ></input>
        <button
          className="btnListRegion"
          onClick={() => {
            setStanRegionBtn(!stanRegionBtn);
          }}
        >
          Filter by Region <ArrowRegionSVG />
          {stanRegionBtn && (
            <div className="regionList">
              <ul>
                <li>
                  <button>Africa</button>
                </li>
                <li>America</li>
                <li>Azja</li>
                <li>Europe</li>
                <li>Oceania</li>
              </ul>
            </div>
          )}
        </button>
      </section>
      <section className="countries">
        {globalData != 0 && <Countries globalData={globalData} />}
      </section>
    </>
  );
}

export default App;
