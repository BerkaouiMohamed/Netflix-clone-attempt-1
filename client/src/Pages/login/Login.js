import { SpaOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import { login } from "../../authContext/apiCalls";
import './login.css'
import { AuthContext } from '../../authContext/AuthContext';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  
  
  const handleLogin = (e) => {
  e.preventDefault();
  login({ email, password }, dispatch);
};
  return (
    <div className="login">
      <div className="topp">

        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />

      </div>

      <div className='signin'>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email or phone number"  onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
        <button className="loginButton" onClick={handleLogin}>Sign In</button>
      </div>
      <div className="containerr">
        <span>
          New to Netflix? <Link to='/register'> <b>Sign up now.</b></Link>
        </span>
        <span>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <b>Learn more</b>.
        </span>

      </div>
    </div>
  )
}

export default Login