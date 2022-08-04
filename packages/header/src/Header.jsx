import React from 'react';
import { AppBar } from './AppBar';
import { IOSSwitch } from './IOSSwitch';

export default function Header({ onToggleTheme, ...props }) {
  return (
    <AppBar {...props}>
      <IOSSwitch onChange={onToggleTheme} />
    </AppBar>
  );
}
