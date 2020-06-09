import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:imdbID" component={MovieDetails} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
