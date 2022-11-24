import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css'
//import { AuthContextProvider } from "./authContext/AuthContext";
import {BrowserRouter} from "react-router-dom"
import { AuthContextProvider } from './authContext/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
     
   <AuthContextProvider>
   <BrowserRouter>
      <App />
      </BrowserRouter>
      </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

