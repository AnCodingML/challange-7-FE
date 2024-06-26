import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'; 
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import CarProvider from './context/carsContext.tsx'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <CarProvider>
      <App />
      </CarProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
