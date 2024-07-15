import Style from './Header.module.scss';
import Switch from '../Switch/Switch';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={Style.header}>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          <h1 className={Style.title}>Where in the world?</h1>
        </button>

        <Switch className={'colorMode'} />
      </header>
    </>
  );
};

export default Header;
