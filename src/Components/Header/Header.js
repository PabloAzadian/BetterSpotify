import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from "../../BetterSpotiLogo.png"
import Spotify from '../../util/Spotify';

function Header({isLoggedIn, handleLogout}) {
  const [userInfo, setUserInfo] = useState("")
  const [dropDownActive, setDropDownActive] = useState(false)
  
  useEffect(() => {
    isLoggedIn? Spotify.getProfile().then(setUserInfo) : setUserInfo("")
  },[isLoggedIn])
  
  return (
    <header className="header">
        <div className='logo-container'>
          <img src={logo} alt="logo" className="header__logo"/>
          <h1>BetterSpotify</h1>
        </div>
        {userInfo !== "" && (
        <div className='userbox-container'>
          <button onClick={() => setDropDownActive((prev) => !prev)} className='userbox'>
            <h2>{userInfo.name}</h2>
            <img src={userInfo.image}/>
            
          </button>
          {dropDownActive && (
          <ul className='user-dropdown'>
            <h4>Account  {">"}</h4>
            <h4>Profile  {">"}</h4>
            <h4>Configuration {">"}</h4>
            <h3 onClick={handleLogout}>Log Out</h3>
          </ul>)}
        </div>
          
        )}
    </header>
  )
}

export default Header;