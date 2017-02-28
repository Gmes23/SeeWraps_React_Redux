import React, { Component } from 'react';
import '../../public/style/footer.css'; 

class Footer extends Component {
 render() {
  return (
      <div className="footer_container">
          <div className="footer_icon">
              <i className="material-icons">local_grocery_store</i>
                <span className="icon_text"> loremimpusm </span>
              <i className="material-icons">keyboard_arrow_right</i>
          </div>
          <div className="footer_icon">
              <i className="material-icons">map</i>
                 <span className="icon_text">  loremimpusm </span>
              <i className="material-icons">keyboard_arrow_right</i>
          </div>
          <div className="footer_icon">
             <i className="material-icons">access_alarms</i>
                <span className="icon_text">  loremimpusm </span>
             <i className="material-icons">keyboard_arrow_right</i>
          </div>
      </div>
  );
 }
}

export default Footer;