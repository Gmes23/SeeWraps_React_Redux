import React, { Component } from 'react';
import '../../public/style/home.css'; 

class Home extends Component {
 render() {
  return (
      <div className="home_container">
            <div className="text_home_container">
                <h1> See Wraps </h1>
                <p> using Lorem Ipsum is that it has
                     a more-or-less normal distribution o
                     f letters, as opposed to using 'Con
                     tent here, content here', making it l
                     like readable English. Many desktop p
                     shing packages and web page editors n
                     se Lorem Ipsum as their default model
                     t, and a search for 'lorem ipsum' wil
                     l in their infancy. Various v
                     ersions have evolved over the years, sometimes by acciden
                     t, sometimes on purpose (injected humour and the like).
                </p>
            </div>
            <div className="image-container">
            </div>
      </div>
  );
 }
}

export default Home;