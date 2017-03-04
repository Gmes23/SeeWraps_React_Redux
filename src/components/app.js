import React, { Component } from 'react';
import HeaderNavbar from './header_navbar';
import Home from './home';
import Footer from './footer';
import '../../public/style/app.css'; 


class App extends Component {
  
 render() {
  return (
  <div>
     <HeaderNavbar />
     <Home />
     <Footer />
  </div>
  );
 }
}

export default App;