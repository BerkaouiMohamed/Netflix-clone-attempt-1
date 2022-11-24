import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from "react-dom/client";
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { ListContextProvider } from './context/listContext/ListContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
       <BrowserRouter>
 <App />
    </BrowserRouter>
    </ListContextProvider>
    </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
