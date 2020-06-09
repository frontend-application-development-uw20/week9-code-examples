import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import NotFound from './NotFound';
import MoviesProvider from './MoviesProvider';
import reducer, { increment, decrement } from './counter';
import Counter from './components/Counter';

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <Provider store={store}>
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
          <Counter />
        </Provider>
      </MoviesProvider>
    </div>
  );
}

export default App;
