import axios from 'axios';

export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE = "NEW_MOVIE_PENDING";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";

export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";

export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE = "UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";

export function onNewMovieSubmit({ title, cover }) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVIE",
            payload: axios.post("https://localhost:44341/api/Movie", {title, cover})
                .then(result => result.data)
        })

    }
};

export function fetchMovie(id) {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVIE",
            payload: axios.get("https://localhost:44341/api/Movie/" + id.toString())
                .then(result => result.data)
        })

    }
};

export function onUpdateMovieSubmit({ id, title, cover }) {
    return dispatch => {
        dispatch({
            type: "UPDATE_MOVIE",
            payload: axios.put("https://localhost:44341/api/Movie/" + id.toString(), { title, cover })
                .then(result => result.data)
        })

    }
};