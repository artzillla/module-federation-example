import React, { useCallback, useEffect, useState } from 'react';
import { AppBar } from './AppBar';
import { IOSSwitch } from './IOSSwitch';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const onToggleTheme = useCallback((currentTheme) => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.body.setAttribute('color-scheme', theme);
  }, [theme]);

  return (
    <AppBar>
      <IOSSwitch onChange={() => onToggleTheme(theme)} />
    </AppBar>
  );
}
