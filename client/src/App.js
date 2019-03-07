import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Header branding="Roomor" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
