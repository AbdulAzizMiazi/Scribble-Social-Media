import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllPosts from './components/AllPosts/AllPosts';
import PostProfile from './components/PostProfile/PostProfile';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import NavBar from './components/Header/NavBar';

function App() {
  return (
    <div>
      <NavBar /> 
      <Router>
        <Switch>
          <Route exact path="/">
            <Header   />
            <AllPosts />
          </Route>
          <Route exact path="/post/:id" component={ PostProfile } />
          <Route path='*' component={ NotFound } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
