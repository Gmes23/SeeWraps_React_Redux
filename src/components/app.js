import React, { Component } from 'react';
// import HeaderNavbar from './header_navbar';
// import Home from './home';
// import Footer from './footer';
import Try from './try';
import '../../public/style/app.css'; 


class App extends Component {
  
 render() {
  return (
  <div>
    { this.props.children }
  </div>
  );
 }
}

export default App;