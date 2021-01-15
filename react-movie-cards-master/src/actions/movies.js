import {ADD_MOVIE, DELETE_MOVIE} from "./../constants/movie";

import { v4 as uuidv4 } from 'uuid';

export function addNewMovie(newMovie){
    newMovie.id=uuidv4();
    newMovie.rating=0;
    console.log(newMovie);
    return{
        type:ADD_MOVIE,
        payload:newMovie
    }
}

export const deleteMovie = (movie) => {
    return{
       type: DELETE_MOVIE,
       payload: movie
    }
}