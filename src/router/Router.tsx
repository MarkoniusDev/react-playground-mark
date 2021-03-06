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
import CustomHookArray from '../pages/CustomHookArray';
import ClassArray from '../pages/ClassArray';
import HookArray from '../pages/HookArray';
import Types from '../pages/Types';
import BetterThanJQuery from '../pages/BetterThanJQuery';
import Fetch from '../pages/Fetch.page';

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
          <Route path='/CustomHookArray'>
            <CustomHookArray />
          </Route>
          <Route path='/ClassArray'>
            <ClassArray />
          </Route>
          <Route path='/HookArray'>
            <HookArray />
          </Route>
          <Route path='/Types'>
            <Types />
          </Route>
          <Route path='/BetterThanJQuery'>
            <BetterThanJQuery />
          </Route>
          <Route path='/Fetch'>
            <Fetch />
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
          <img src='data:image/png;base64,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' className="Header-logo" alt="logo" />
          {/* <img src={logo} className="Header-logo" alt="logo" /> */}
          <li><Link to='/' className="Nav-link">Home</Link></li>
        </div>
        <ul className="Nav-links">
          <li><Link to='/Fetch' className="Nav-link">Fetch</Link></li>
          <li><Link to='/TestPage' className="Nav-link">TestPage</Link></li>
          <li><Link to='/CustomHookArray' className="Nav-link">CustomHookArray</Link></li>
          <li><Link to='/ClassArray' className="Nav-link">ClassArray</Link></li>
          <li><Link to='/HookArray' className="Nav-link">HookArray</Link></li>
          <li><Link to='/Types' className="Nav-link">Types</Link></li>
          <li><Link to='/BetterThanJQuery' className="Nav-link">BetterThanJQuery</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Router;
