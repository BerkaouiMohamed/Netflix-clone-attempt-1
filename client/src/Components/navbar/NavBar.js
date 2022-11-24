import React, { useContext, useState } from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from "../../authContext/AuthActions";
 

import { AuthContext } from '../../authContext/AuthContext';
import { LogoutTwoTone } from '@mui/icons-material';
function NavBar() {
  const { dispatch } = useContext(AuthContext);

const navigate = useNavigate();
  const [test, setTest] = useState(false);

  const handleClick = () => {
setTest(!test)
  }
  const logoute=()=>{dispatch(logout())
  navigate('/login')
  }
    return (
    <div className='navb'>
    <div className='navigate'>
        <img className='img'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""></img>   
              <Link to="/">
             <span>HOME</span></Link>
             <Link to="/series">
        <span >SERIES</span></Link>
        <Link to="/movies">
        <span>MOVIES</span></Link>
        
        <span>POPULAR</span>
        <span>MYLIST</span>
    </div>
    <div className='search'>
  
    <SearchIcon className='icon' />
    <CircleNotificationsIcon className='icon'/>
  <AccountBoxIcon className='icon'/>
  <div className='arrw'>

  <ArrowDownwardIcon className='iconarrw' onClick={() => handleClick()}/>
  <div className='logout' style={{ display: test ? "flex":"none"}}>
   
    <span className='drop'>SETTINIGS</span>
    <span className='drop' onClick={() => logoute()}>LOGOUT</span>
  </div>
  
  </div>
    </div>
    
    </div>
  )
}

export default NavBar