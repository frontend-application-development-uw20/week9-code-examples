import React from 'react';

const MoviesContext = React.createContext({
    movies: [],
    setMovies: () => {}
});

export {MoviesContext};

export default class MoviesProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            setMovies: this.setMovies
        }
    }

    setMovies = (movies) => this.setState({movies});

    render() {
        return (
            <MoviesContext.Provider value={this.state}>
                {this.props.children}
            </MoviesContext.Provider>
        );
    }
}