import {
    NEW_MOVIE_FULFILLED,
    NEW_MOVIE_REJECTED,
    NEW_MOVIE,

    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED,
    FETCH_MOVIE,

    UPDATE_MOVIE_FULFILLED,
    UPDATE_MOVIE_REJECTED,
    UPDATE_MOVIE
} from '../actions/newMovie';

const initialState = {
    fetching: false,
    done: false,
    movie: {
        fetching: false
    },
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {  
        case NEW_MOVIE:
            return {
                ...state,
                fetching: true,
                done: false
            };

        case NEW_MOVIE_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false,
                done: true
            };

        case NEW_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false,
                done: false
            };

        ///////////////////////////////////////

        case FETCH_MOVIE:
            return {
                ...state,
                movie: {
                    fetching: true
                }
            };

        case FETCH_MOVIE_FULFILLED:
            return {
                ...state,
                movie: {
                    ...action.payload,
                    fetching: false
                }
            };

        case FETCH_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                movie: {
                    fetching: true
                }
            };

        //////////////////////////////////////

        case UPDATE_MOVIE:
            return {
                ...state,
                fetching: true
            };

        case UPDATE_MOVIE_FULFILLED:
            return {
                ...state,
                fetching: false,
                done: true
            };

        case UPDATE_MOVIE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };

        default:
            return state;
    }
};