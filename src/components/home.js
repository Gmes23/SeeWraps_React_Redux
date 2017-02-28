import React, { Component } from 'react';
import '../../public/style/home.css'; 

class Home extends Component {
 render() {
  return (
      <div className="home_container">
          <div className="home_billboard">
            <div className="text_home_container">
                <h1 className="logo_home"> SEEWRAPS</h1>
                <p className="description_home">
                    High quality vehicle wrap, signs, and logos. 
                    A graphic design shop base in Westchester, NY
                    serving all the Tri-State Area.
                </p>
                <button className="md_button_seewrap">
                    Contact
                </button>
            </div>
            <div className="image_container_home">
            </div>
            <div className="home_billboard_selection">
                <ul className="nostyle home_billboard_slider">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>                    
            </div>
         </div>
      </div>
  );
 }
}

export default Home;