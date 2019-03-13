import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Index';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import '@material-ui/core';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" Component={Landing} />
            <Route path="/home" Component={Home} />
            <Route path="/about" Component={About} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
