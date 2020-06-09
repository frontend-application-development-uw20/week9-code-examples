import React from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from './MoviesProvider';

export default class Movies extends React.Component {
    static contextType = MoviesContext;

    componentDidMount() {
        if (this.context.movies.length) {
            return;
        }

        fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=star wars`)
            .then(res => res.json())
            .then(data => this.context.setMovies(data.Search));
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <ul>
                    {this.context.movies.map(movie => (
                        <li key={movie.imdbID}>
                            <Link to={`/movies/${movie.imdbID}`}>
                                {movie.Title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}