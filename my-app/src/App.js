import React from 'react';
import {
  BrowserRouter,
  Switch, 
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homePage.components';


const HatPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);


function App() {
  return (

    <div className='App'>
        <Switch>
             <Route exact path='/' component={HomePage}></Route>
             <Route exact path='/hats' component={HatPage}></Route>
        </Switch>
    </div>
   

  
  );
}

export default App;
