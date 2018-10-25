import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Head from './components/head';
import Footer from './components/footer';
// import Contents from './components/pages/contents';
import Home from './components/pages/home';
import Nav from './components/pages/Nav';
import Error from './components/pages/404';

import Introduction from './components/pages/Introduction';
import Practicing from './components/pages/practicingSongwriting';
import PitchNames from './components/pages/pitchNames';
import LettersGame from './components/pages/lettersGame';
import SharpsFlats from './components/pages/sharpsFlats';
import HalfWholeSteps from './components/pages/halfWholeSteps';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <header className="App-header">
          <Head />
        </header>
        <div className="container">
          <Nav />
          <Switch>

            <Route path="/" component={Home}  exact/>
            <Route path="/Home" component={Home} />
            <Route path="/Introduction" component={Introduction} />
            <Route path="/practicingSongwritng" component={Practicing} />
            <Route path="/PitchNames" component={PitchNames} />
            <Route path="/LettersGame" component={LettersGame} />
            <Route path="/SharpsFlats" component={SharpsFlats} />
            <Route path="/HalfWholeSteps" component={HalfWholeSteps} />

            <Route component={Error} />

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
    );
  }
}


// <NavLink to="/practicingSongwritng">Practicing Songwritng</NavLink><br/>


// <Route path="/" componet={Home} />
// <Contents />
