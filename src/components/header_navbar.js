import React, { Component } from 'react';
import '../../public/style/header_navbar.css'; 
import { Logo } from './logo';

class HeaderNavbar extends Component {
 render() {
  return (
      <div className="header_container">
        <Logo />
        <div className="seewrap_phonenumber">
          <div className="phone_icon_container">
          <i className="material-icons phone_icon">phone_iphone</i>
          </div>
          <div className="phone_container">
          <p> 914-423-4015
            <br />
              914-426-3671
          </p>
          </div>
        </div>
        <div className="btn_holder_home">
         <button className="lg_button_seewrap_round">
          GET A QUOTE
          </button>
        </div>
        <div className="navlinks_container">
          <ul className="navlinks nostyle">
            <li className="small_width"> 
              <a>
              Home
              </a>
            </li>
            <li className="md_width">
              <a> 
                Vehicle Wraps
              </a>
            </li>
            <li className="md_width_2">
              <a>
                 Signs & Logos
              </a>
            </li>
            <li className="small_width_2"> 
              <a>Gallery</a>
            </li>
            <li className="small_width"> 
              <a>Contact</a>
            </li>            
          </ul>
        </div>
      </div>
  );
 }
}

export default HeaderNavbar;