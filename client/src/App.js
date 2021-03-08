import { Route, Switch, Redirect } from "react-router-dom"
import './App.css';


import { useState } from 'react'
import Restaurants from './components/Restaurant.js'
import NotFound from './components/404.js'
import Home from './components/Home.js'
import Map from './components/Map.js'


function App(props) {
  const [zoom, setZoom] = useState({
    zoomIn: false,
    zoom: 15,
    center: [44.4761601, -73.212906]

  })

  return (
    <div id="main-container">
      <h1 id='title'><a href='/'><span>Yelp-ington!</span></a></h1>
      <h6>A one stop search for all your restaurant info directory</h6>
      <div id="server-routes">
        <div id="Map-control"><Map newZoom={zoom.zoomIn ? zoom.zoom : 15} newCenter={zoom.zoomIn ? zoom.center : [44.4761601, -73.212906]} />

        </div>
        <Switch>
          <Route exact path='/'><Home setZoom={setZoom} /></Route>

          <Route path="/restaurant/:id" children={
            (props) => {
              return props.match.isExact ? (<Restaurants match={props.match} setZoom={setZoom} zoomIn={zoom.zoomIn} />)
                : (<Redirect to='/' />
                )
            }} />

          <Route exact path='*' component={(props) => <NotFound match={props.match} />}
          />

        </Switch>



      </div>
    </div>
  );
}

export default App;

