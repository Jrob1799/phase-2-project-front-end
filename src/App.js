import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import TeamBuilder from './components/TeamBuilder';

function App() {
  return (
    <Router>
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