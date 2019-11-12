import React from 'react';
import logo from '../logo.svg';

const Home: React.FC = () => {
  return(
    <main className="Page">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to React Playground
        </p>
        <p>
          Feel free to stick around and try some stuff
        </p>
        <a
          className="Nav-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </main>
  )
}

export default Home;