import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import TeamBuilder from './components/TeamBuilder';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/team-builder">
          <TeamBuilder />
        </Route>
        <Route path="/">
          <Pokedex />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;