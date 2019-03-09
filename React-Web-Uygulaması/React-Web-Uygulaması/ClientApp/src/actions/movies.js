import axios from 'axios';

export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export const DELETE_MOVIE_FULFILLED = "DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE = "DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_REJECTED = "DELETE_MOVIE_REJECTED";

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIES",
            payload: axios.get("https://localhost:44341/api/Movie")
                .then(result => result.data)
        })
            
    }
}

export function deleteMovie(id) {
    return dispatch => {
        dispatch({
            type: "DELETE_MOVIE",
            payload: axios.delete("https://localhost:44341/api/Movie/" + id.toString())
                .then(result => Object.assign({}, result, id))
        })

    }
}