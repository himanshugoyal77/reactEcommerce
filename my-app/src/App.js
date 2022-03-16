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

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
   constructor(){
     super();

     this.state = {
       currentUser: null
     }
   }

   unsubscribefromAuth = null

   componentDidMount(){
     this.unsubscribefromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }
          );
          console.log(this.state);
       });
     } 
      else {     
      this.setState({
        currentUser: userAuth
      })
 }
  
    }
    )}

   componentWillUnmount(){
     this.unsubscribefromAuth();
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
