import { useState } from 'react';
import { Sun, Moon } from '../../utils/Icon';
import Style from './Switch.module.scss';

// eslint-disable-next-line react/prop-types
const Switch = ({ text }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };
  return (
    <div className="switch">
      <button className={Style.colorMode} onClick={toggleSwitch}>
        {isOn ? <Moon /> : <Sun />}
        {text}
      </button>
      {/* {isOn ? <Moon /> : <Sun />} */}
    </div>
  );
};
export default Switch;
