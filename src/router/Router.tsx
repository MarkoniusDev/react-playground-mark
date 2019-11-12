import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import '../App.css';

const Router: React.FC = () => {
  return(
    <BrowserRouter>
      <div className="App">
        <header>
          <nav className="Nav">
            <ul className="Nav-links">
              <li><Link to='/' className="Nav-link">Home</Link></li>
              <li><Link to='/page2' className="Nav-link">Page 2</Link></li>
              <li><Link to='/page3' className="Nav-link">Page 3</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
            <h1>Page 1</h1>
          </Route>
          <Route path='/page2'>
            <h1>Page 2</h1>
          </Route>
          <Route path='/page3'>
            <h1>Page 3</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router;
