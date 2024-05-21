import { useState } from 'react';
import { Sun, Moon } from './Icon';

// eslint-disable-next-line react/prop-types
const Switch = ({ text, className }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };
  return (
    <div className="switch">
      <button className={className} onClick={toggleSwitch}>
        {isOn ? <Moon /> : <Sun />}
        {text}
      </button>
      {/* {isOn ? <Moon /> : <Sun />} */}
    </div>
  );
};
export default Switch;
