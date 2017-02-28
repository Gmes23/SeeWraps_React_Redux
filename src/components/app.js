import React, { Component } from 'react';
import HeaderNavbar from './header_navbar';
import Home from './home';
import '../../public/style/app.css'; 

class App extends Component {
 render() {
  return (
  <div>
    <HeaderNavbar />
    <Home />
  </div>
  );
 }
}

export default App;