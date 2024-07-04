import { useState } from 'react';
import { Sun, Moon } from '../../utils/Icon';
import Style from './Switch.module.scss';

const Switch = ({ text }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
    // Zmieia kolor  zmiennej w  globalnych stylach :root//
    document.documentElement.style.setProperty(
      '--background-color',
      !isOn ? '#242424' : '#ffffff'
    );
    document.documentElement.style.setProperty(
      '--text-color',
      !isOn ? '#ffffff' : '#242424'
    );
  };

  return (
    <div className="switch">
      <button className={`${Style.colorMode}`} onClick={toggleSwitch}>
        {isOn ? <Moon /> : <Sun />}
        {text}
      </button>
    </div>
  );
};
export default Switch;
