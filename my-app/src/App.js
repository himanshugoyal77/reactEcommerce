import React from 'react';
import {
  BrowserRouter,
  Switch, 
  Route,
} from "react-router-dom";
import './App.css';
import HomePage from './pages/homepage/homePage.components';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';


const HatPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);


function App() {
  return (

    <div className='App'>
      <Header></Header>
        <Switch>
             <Route exact path='/' component={HomePage}></Route>
             <Route exact path='/shop' component={ShopePage}></Route>
           
        </Switch>
    </div>
   

  
  );
}

export default App;
