import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import '../App.css';
import logo from '../logo.svg';

import Home from '../pages/Home';
import TestPage from '../pages/TestPage';

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/TestPage'>
            <TestPage />
          </Route>
          <Route path='/page3'>
            <h1>Page 3</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const Header = () => {
  return(
    <header>
      <nav className="Nav">
        <div className="Nav-logo">
          <img src={logo} className="Header-logo" alt="logo" />
          <li><Link to='/' className="Nav-link">Home</Link></li>
        </div>
        <ul className="Nav-links">
          <li><Link to='/TestPage' className="Nav-link">TestPage</Link></li>
          <li><Link to='/page3' className="Nav-link">Page 3</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Router;
