import React, { Component } from 'react';
import '../../public/style/header_navbar.css'; 
import Logo from './logo';

class HeaderNavbar extends Component {
 render() {
  return (
      <div className="header_container">
        <Logo />
        <div className="navlinks_container">
          <ul className="navlinks nostyle">
            <li> Home </li>
            <li> Vehicle Wraps</li>
            <li> Signs & Logos</li>
            <li> Gallery</li>
            <li> Contact </li>            
          </ul>
        </div>
      </div>
  );
 }
}

export default HeaderNavbar;