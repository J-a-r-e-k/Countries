export const API_URL = 'https://restcountries.com/v3.1';

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
