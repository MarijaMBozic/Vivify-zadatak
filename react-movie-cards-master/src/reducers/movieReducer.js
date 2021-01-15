import {createSelector} from 'reselect';
import {ADD_MOVIE, DELETE_MOVIE} from './../constants/movie';

const movies=require('./../services/movies.json');

const initialState={
    movieList:movies
}

export default function movieReducer(state=initialState, action){
    console.log("new movi in reducer", action.type)
    switch(action.type){
        case ADD_MOVIE:
            return{
                ...state,
                movieList:[
                    ...state.movieList,
                    action.payload
                ]
            }
        case DELETE_MOVIE:
            return {
                movieList:[
                ...state.movieList.filter((movie) => movie.id !== action.payload)
                ]
            }
        default:
            return state;
    }
}

export const movieSelector=(state)=>state.movie.movieList;

export const filteredMovieListSelector=createSelector(
    movieSelector,
    (movieList)=>movieList
)