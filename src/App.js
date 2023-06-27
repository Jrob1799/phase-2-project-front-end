import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import TeamBuilder from './components/TeamBuilder';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);

  const addTeam = (username, team) => {
    setTeams([...teams, {username, team}]);
  }

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/team-builder">
          <TeamBuilder addTeam={addTeam} />
        </Route>
        <Route exact path="/">
          <Pokedex />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;