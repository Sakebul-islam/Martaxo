import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    document.documentElement.setAttribute(
      'class',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  return (
    <div className='flex overflow-hidden justify-center items-center'>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={25}
      />
    </div>
  );
};

export default ThemeSwitcher;
