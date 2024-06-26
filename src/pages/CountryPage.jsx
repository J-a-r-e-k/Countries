import { useParams } from 'react-router-dom';
import ClickedCountry from '../Components/ClickedCountry/ClickedCountry';

const CountryPage = () => {
  const params = useParams();

  const countryName = params.country;

  console.log(countryName);

  return <ClickedCountry />;
};

export default CountryPage;
