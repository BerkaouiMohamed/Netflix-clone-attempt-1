import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/MovietList/MovieList";
import Product from "./pages/movie/Movie";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";

import { useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import NewMovie from "./pages/newMovie/NewMovie";
function App() {

  const{user}=useContext(AuthContext)
  return (<div>
     

    <Topbar style={{display:"none"+'!important'}} />
    <div className="container">
      <Sidebar style={{display:user?'block':"none"}}  /><Routes> 
  <Route exact path="/login"
          element={!user? <Login />: <Navigate to="/" />}
        />


<Route   path="/"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
        
        <Route path="/users"
          element={user ?<UserList /> : <Navigate to="/login" />}
        />
        <Route path="/user/:userId"
          element={user?<User />: <Navigate to="/login" />}
        />
        <Route path="/newUser"
          element={user ?<NewUser />: <Navigate to="/login" />}
        />
        <Route path="/movies"
          element={user ?<ProductList />: <Navigate to="/login" />}
        />
        <Route path="/movie/:movieId"
          element={user?<Product />: <Navigate to="/login" />}
        />
        <Route path="/newmovie"
          element={user?<NewMovie />: <Navigate to="/login" />}
        />


<Route path="/lists"  element={user?<ListList />: <Navigate to="/login" />}
        />
                
              <Route path="/list/:listId"  element={user?<List />: <Navigate to="/login" />}
        />
        <Route path="/newlist"  element={user?<NewList/>: <Navigate to="/login" />}
        />
              
      </Routes>

    </div>
  </div>
  );
}

export default App;
