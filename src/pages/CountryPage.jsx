import { useParams } from 'react-router-dom';
import ClickedCountry from '../Components/ClickedCountry/ClickedCountry';

const CountryPage = () => {
  const params = useParams();
  //pobiera aktualny adres url i zmienia go na określony//
  const countryName = params.country;

  return <ClickedCountry countryName={countryName} />;
};

export default CountryPage;
