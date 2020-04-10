import * as React from 'react';
import { createRoot, render } from 'react-dom';
import App from './App';

const isLegacy = false;

if (isLegacy) {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector('#app'),
  );
} else {
  createRoot(document.querySelector('#app')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
