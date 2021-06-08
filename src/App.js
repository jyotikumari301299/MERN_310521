import React from 'react';
import { Route,Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';

const App = ()=> {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>

      <Route exact path="/about">
      <About />
      </Route>

      <Route exact path="/contact">
      <Contact />
      </Route>

      <Route exact path="/login">
      <Login />
      </Route>

      <Route exact path="/signup">
      <Signup />
      </Route>

      <Route>
      <Errorpage  />
      </Route>
      </Switch>
    </>
  )
}

export default App;
