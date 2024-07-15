export const API_URL = 'https://restcountries.com/v3.1';

export const getCountriesByData = async (source) => {
  try {
    const response = await fetch(
      `${API_URL}/${source}?fields=name,capital,population,region,flags`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych:', error);
  }
};

export const getCountryByName = async (countryName) => {
  try {
    const response =
      await fetch(`${API_URL}/name/${countryName}?fields=name,nativeName,population,region,subregion,capital,cca2,currencies,languages,borders,flags
    `);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych:', error);
  }
};

export const getCountryByBorder = async (borderCode) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borderCode}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data[0].name.common;
  } catch (error) {
    console.error('Wystąpił błąd podczas pobierania danych:', error);
  }
};

export const continents = [
  { id: 'africa', label: 'Africa' },
  { id: 'americas', label: 'America' },
  { id: 'Asia', label: 'Azja' },
  { id: 'europe', label: 'Europe' },
  { id: 'Oceania', label: 'Oceania' },
  { id: null, label: 'Filter by Region' },
];
