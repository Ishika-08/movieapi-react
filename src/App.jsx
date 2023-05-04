import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import Routes from "./Routes"
import ShowsState from './context/ShowsState';


function App(){
  return (
    <ShowsState>
        <Router>
          <Routes/>
        </Router>
    </ShowsState>
    
  )
}

export default App;