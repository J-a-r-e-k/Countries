import Style from './Header.module.scss';
import Switch from '../Switch/Switch';

const Header = () => {
  return (
    <>
      <header className={Style.header}>
        <h1 className={Style.title}>Where in the world?</h1>
        <Switch className={'colorMode'} text={'Dark Mode'} />
      </header>
    </>
  );
};

export default Header;
