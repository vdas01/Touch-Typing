import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { StoreContextProvider } from './context/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <NextUIProvider>
  <StoreContextProvider>
     <App />
  </StoreContextProvider>
  </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);


