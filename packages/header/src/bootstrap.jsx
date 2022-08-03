import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';

const container = document.getElementById('main');
const root = createRoot(container);
root.render(<Header />);
