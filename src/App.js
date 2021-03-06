import './App.css';
import {Switch,Route,NavLink,Redirect} from 'react-router-dom';
import PokemonList from './container/PokemonList';
import Pokemon from './container/Pokemon';

function App() {
  return (
    <div>
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
    width: 100%;color: white;
        <Route path={"/"} exact component={PokemonList}/>
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon}/>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
