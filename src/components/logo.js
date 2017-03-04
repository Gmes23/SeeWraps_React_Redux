import React, { Component } from 'react';
import { Link } from 'react-router'

import '../../public/style/logo.css'; 

class Logo extends Component {
  render() {
    return (
            <div className="seewrap_logo">
              <Link to="/">
               <h1 className="see_logo logoconfig nomargin"> SEE </h1>
               <h1 className="wrap_logo logoconfig nomargin">
                 WRAP.
               </h1>
               </Link>
           </div>
        );
  }
}

export default Logo;