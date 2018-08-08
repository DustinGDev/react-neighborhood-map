import React from 'react';
import MenuIcon from './Hamburger.svg';

const setSideBarActive = () => {
  document.querySelector('nav').classList.toggle('active');
}

const Header = (props) => {
  return (
    <header>
      <img src={MenuIcon} alt="Hamburger Menu Icon by Google" onClick={setSideBarActive}/>
    </header>
  )
}

export default Header;
