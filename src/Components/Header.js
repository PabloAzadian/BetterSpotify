import React from 'react';
import './Header.css';
import logo from "../BetterSpotiLogo.png"

function Header() {
  return (
    <header className="header">
        <img src={logo} alt="logo" className="header__logo"/>
        <h1>BetterSpotify</h1>
    </header>
  )
}

export default Header;