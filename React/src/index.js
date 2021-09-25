import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';

// Se colocan los componentes que se quieren renderizar 
ReactDOM.render(
  // StrictMode es una herramienta para resaltar problemas potenciales en una aplicación.
  <React.StrictMode>  
    {/* <Login/> */} 
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);