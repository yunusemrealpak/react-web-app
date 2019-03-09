import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import { HashLoader } from 'react-spinners';

const MoviesList = ({ movies, deleteMovie, fetchMovies }) => {

    return (
        <div>
            <HashLoader
                sizeUnit={"px"}
                size={50}
                color={'#123abc'}
                loading={movies.fetching}
            />

            {movies.error.response
                ? <h3>Error retrieving data!</h3>
                :
                <Grid stackable columns={3}>
                    {
                        movies.movies.map(movie => <MovieCard key={movie.id} deleteMovie={deleteMovie} movie={movie} />)
                    }
                </Grid>
            } 
        </div>
    )
};

MoviesList.propTypes = {
    movies: PropTypes.shape({
        movies: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;