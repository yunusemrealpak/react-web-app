import {
    FETCH_MOVIES_FULFILLED,
    FETCH_MOVIES_REJECTED,
    FETCH_MOVIES,

    DELETE_MOVIE_FULFILLED,
    DELETE_MOVIE_REJECTED,
    DELETE_MOVIE,
} from '../actions/movies';

const initialState = {
    fetching: false,
    movies: [],
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                fetching: true
            };

        case FETCH_MOVIES_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false
            };

        case FETCH_MOVIES_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

        ////////////////////////////////////////

        case DELETE_MOVIE:
            return {
                ...state,
            };

        case DELETE_MOVIE_FULFILLED:
            return {
                ...state,
                movies: state.movies.filter(item => item.id !== action.payload.data.id)
            };

        case DELETE_MOVIE_REJECTED:
            return {
                ...state,
            };

        default:
            return state;
    }
};