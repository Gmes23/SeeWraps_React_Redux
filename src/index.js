import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from './components/app';
import './index.css';

class Index extends React.Component {
    render() {
      return (
        <Router history={browserHistory}>
          <Route path={"/"} component={App} >
          </Route>
        </Router>
      )
    }
}



ReactDOM.render(
    <Index />,
  document.getElementById('main')
);
