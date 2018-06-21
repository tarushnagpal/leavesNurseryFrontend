import React, { Component } from 'react';
import logo from './img/leaves-nursery-logo.png';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './containers/home'

class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
          <Switch>
            {/* these are good */}

            <Route exact path='/' component={Home} />

            {/* <Route
              path='/about'
              render={(props) => <About {...props} extra={someVariable} />}
            /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
