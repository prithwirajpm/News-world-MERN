import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './Context/ContextShare';
import AlertProvider from './Component/AlertProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <ContextShare>
      <AlertProvider>
      <BrowserRouter><App /></BrowserRouter>
      </AlertProvider>
      </ContextShare>
    </React.StrictMode>
  
);
