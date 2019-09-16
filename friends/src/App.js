import React from 'react';
import Friends from './components/Friends';
import Landing from './components/Landing';
import Login from './components/Login';
import Nav from './components/Nav';

import { Route } from 'react-router-dom';
import './App.css';
import  PrivateRoute  from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Friends} />
    </div>
  );
}

export default App;