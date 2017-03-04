import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from './components/app';
import Rexample from './components/try';
import './index.css';

class Index extends React.Component {
    render() {
      return (

        <Router history={browserHistory}>
          <Route path={"/home"} component={Rexample} >
          </Route>
        </Router>
      )
    }
}



ReactDOM.render(
    <Index />,
  document.getElementById('main')
);
