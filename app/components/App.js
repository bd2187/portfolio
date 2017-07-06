import React, { Component } from 'react';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    // add history={...} in <Router>
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
