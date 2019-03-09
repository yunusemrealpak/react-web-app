import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MoviesList from '../MoviesList';

import { fetchMovies, deleteMovie } from '../../actions/movies';

class MoviesPage extends React.Component {
    static propTypes = {
        movies: PropTypes.object.isRequired,
        deleteMovie: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (

            <div>
                <h2>MoviesPage</h2>
                <MoviesList deleteMovie={this.props.deleteMovie} movies={this.props.movies} />
            </div>

        )
    }
}

//const mapStateToProps = ({ movies }) => {
//    return {
//        movies
//    }
//};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
};

const mapDispatchToProps = {
    fetchMovies,
    deleteMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);