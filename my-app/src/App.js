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
import SignInAndSignOut from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import { auth } from './firebase/firebase.utils';


class App extends React.Component {
   constructor(){
     super();

     this.state = {
       currentUser: null
     }
   }

   unsubscribedfromAuth = null;

   componentDidMount(){
     auth.onAuthStateChanged(user => {   
      this.setState({ currentUser: user});
      console.log(user);
     })
   }

   componentWillUnmount(){
     this.unsubscribedfromAuth();
   }
   
  render (){
    return(
    <div className='App'>
      <Header currentUser={this.state.currentUser}></Header>
        <Switch>
             <Route exact path='/signIn' component={SignInAndSignOut}></Route>
             <Route exact path='/' component={HomePage}></Route>
             <Route exact path='/shop' component={ShopePage}></Route>
           
        </Switch>
    </div>
    )
  }

  }
export default App;
