import React, { Component } from 'react';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Footer from './Footer';
import NotFound from './NotFound';

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
        <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/work" component={Work}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFound} />
          </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
