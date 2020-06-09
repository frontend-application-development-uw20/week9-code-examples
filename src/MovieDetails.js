import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default class MovieDetails extends React.Component {
    state = { details: {} };

    componentDidMount() {
        const { imdbID } = this.props.match.params;
        fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&i=${imdbID}`)
            .then(res => res.json())
            .then(data => this.setState({ details: data }));
    }

    render() {
        const { details } = this.state;
        return (
            <div>
                <h1>{details.Title}</h1>
                <img
                    src={details.Poster}
                    alt={`${details.Title} poster`}
                />
            </div>
        )
    }
}
