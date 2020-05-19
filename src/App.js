import React from 'react';
import './App.css';
import './css/createAccount.css';
import LoginPage from './components/LoginPage';
import CreateAccount from './components/createAccount';
import {  Switch, Route } from 'react-router-dom'

function  App() {
  return (
    <div>
      
    
        <Switch>
        {/*    */}
          <Route path={"/"} exact component={LoginPage} />
          <Route path={"/createaccount"} exact component={CreateAccount} /> 
        </Switch>
      


    </div>
  );
}

export default App;


