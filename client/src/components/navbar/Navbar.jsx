import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import "./navbar.scss"
import NetflixImage from '../../images/Netflix_Logo_RGB.png'
import userImage from '../../images/user_image.jpg'
import { AuthContext } from '../../context/authContext/AuthContext';
import { useContext } from 'react';
import { logout } from '../../../../dashboard/src/context/authContext/AuthActions';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const {dispatch} = useContext(AuthContext);
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll=()=>{
    setIsScrolled(window.scrollY === 0 ? false : true);
    return()=>(window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(logout);
   localStorage.removeItem("user");
    window.location.reload();
  };


  return (
    <div className= {isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
      <div className='left'>
        <img src={NetflixImage}></img>
       <Link to="/" className='link'><span>HomePage</span></Link>
       <Link to="/series" className='link'><span>Series</span></Link>
       <Link to="/movies" className='link'><span>Movies</span></Link>
       <Link to="/" className='link'><span>New & Popular</span></Link>
       <Link to="/" className='link'><span>My List</span></Link>
        
      </div>
      <div className='right'>
        <SearchIcon className='icon'/>
        <span>KiD</span>
        <NotificationsNoneIcon className='icon'/>
        <img src={userImage} ></img>
        <div className='profile'>
        <ExpandMoreIcon className='icon'/>
        <div className='options'>
        <span>Settings</span>
        <span onClick={handleLogout}>Logout</span>
        </div>
        
        
        </div>
        

      </div>
      </div>
    </div>
  )
}

export default Navbar
