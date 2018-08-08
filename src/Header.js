import React from 'react';
import MenuIcon from './Hamburger.svg';

const setSideBarActive = () => {
  document.querySelector('nav').classList.toggle('active');
}

// From https://stackoverflow.com/questions/39442419/reactjs-is-there-a-way-to-trigger-a-method-by-pressing-the-enter-key-inside
const enterPressed = (event) => {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
        setSideBarActive();
    }
}

const Header = (props) => {
  return (
    <header>
      <img src={MenuIcon} alt="Hamburger Menu Icon by Google" onClick={setSideBarActive} onKeyPress={enterPressed} tabIndex="1" role="navigation"/>
    </header>
  )
}

export default Header;
