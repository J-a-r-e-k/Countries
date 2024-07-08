// const API_URL = 'https://restcountries.com/v3.1';

// const GetCountriesData = async (region, getCountries) => {
//   const source = region ? `region/${region}` : 'all';

//   try {
//     const response = await fetch(
//       `${API_URL}/${source}?fields=name,capital,population,region,flags`
//     );

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     // setCountries(data.slice(0, 8));
//     getCountries(data);
//   } catch (error) {
//     console.error('Wystąpił błąd podczas pobierania danych:', error);
//   }
// };

// export default GetCountriesData;
