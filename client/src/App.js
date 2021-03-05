import { Route, Switch, Link } from "react-router-dom"
import './App.css';

import NotFound from './components/404'
import Home from './components/Home'
import Map from './components/Map'
function App() {
  return (
    <div id="main-container">
        <h1 id='title'>Yelpington</h1>
      <div id ="route-controls">
        <Map />
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='*' component={(props)=><NotFound match ={props.match} />}
        />
        </Switch>
      </div>
    
    </div>
  );
}

export default App;
