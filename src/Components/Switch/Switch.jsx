import { useState, useEffect } from 'react';
import useMediaQuery from '../../utils/useMediaQuery';
import { Sun, Moon } from '../../utils/Icon';
import Style from './Switch.module.scss';

const Switch = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isOn, setIsOn] = useState(prefersDarkMode);

  useEffect(() => {
    setIsOn(prefersDarkMode);
    updateColors(prefersDarkMode);
  }, [prefersDarkMode]);

  const updateColors = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleSwitch = () => {
    setIsOn((prevState) => {
      const newState = !prevState;
      updateColors(newState);
      return newState;
    });
  };

  return (
    <div className="switch">
      <button className={`${Style.colorMode}`} onClick={toggleSwitch}>
        {isOn ? <Sun /> : <Moon />}
        {isOn ? 'Bright Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};
export default Switch;
