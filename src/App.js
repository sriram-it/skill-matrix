import React from 'react';
import Login from './components/Login/Login'
import './App.css';
import SignUp from './components/SignUp/SignUp';
import { Route, Switch } from 'react-router-dom';
import {DashboardMain} from './components/Dashboard/DashboardMain';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} exact/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={DashboardMain}/>
      </Switch>
      {/* <Login/> */}
    </div>
  );
}

export default App;
