import React from 'react'
import "./App.css"
import Home from './Pages/home/Home';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import Watch from './Pages/watch/Watch';
import Listes from './Components/list/Listes'
import { Route, Routes, Navigate } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";


 



const App = () => {
const { user } = useContext(AuthContext);
  return (<div className='App' >
    <Routes>
      
      <Route   path="/"
        element={user ? <Home /> : <Navigate to="/register" />}
      />
      <Route  path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
      {user && (
        <>
          <Route  path="/movies"
           element= {<Home type="movie" />}
          />
          <Route  path="/series"
            element={<Home type="series" />}
         
            />
          <Route  path="/watch"
             element= {<Watch />}
          />
          
          <Route  path="/listes"
             element= {<Listes />}
          />
          
        </>
      )}
    </Routes>
  
    </div>
  );
};
export default App