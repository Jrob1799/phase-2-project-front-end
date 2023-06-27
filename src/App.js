import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import TeamBuilder from './components/TeamBuilder';
import NavBar from './components/NavBar';
import './App.css';
import axios from 'axios';

function App() {

  const addTeam = async (username, team) => {
    try {
      // Replace this URL with your server's endpoint for adding a team
      const url = 'http://localhost:4000/teams';

      const response = await axios.post(url, { username, team });

      if (response.status === 201) {
        console.log('Team successfully added');
      } else {
        console.error('Error adding team:', response);
      }
    } catch (error) {
      console.error('Error adding team:', error);
    }
  };

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