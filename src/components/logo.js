import React, { Component } from 'react';
import '../../public/style/logo.css'; 

class Logo extends Component {
  render() {
    return (
            <div className="seewrap_logo">
               <h1 className="see_logo logoconfig nomargin"> SEE </h1>
               <h1 className="wrap_logo logoconfig nomargin">
                 WRAP.
               </h1>
           </div>
        );
  }
}

export default Logo;