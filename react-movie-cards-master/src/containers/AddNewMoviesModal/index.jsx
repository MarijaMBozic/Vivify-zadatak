import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useDispatch } from 'react-redux';
import ModalAddNewMovieUI from './../../components/ModalAddNewMovieUI/index.jsx';
import {addNewMovie} from './../../actions/movies';
import useValidationField from './../../hooks/movieHook'

function ModalAddNewMovie(props) {
    const { handleOpanModal } = props;  
    const [newMovie, setNewMovie] = useState('');
    const isValid=useValidationField(newMovie); 

    const dispatch=useDispatch();

    const handleChangeNewMovie = (fieldNewMovie) => (e) => {
        setNewMovie({
            ...newMovie,
            [fieldNewMovie]: e.target.value
        })
    }

    const handleSubmitNewMovie =(e) => {
        e.preventDefault();
        dispatch(addNewMovie(newMovie));
        handleOpanModal();
    }

    return ReactDOM.createPortal(
        <div>
            <ModalAddNewMovieUI
                handleOpanModal={handleOpanModal}
                newMovie={newMovie}
                handleChangeNewMovie={handleChangeNewMovie}
                handleSubmitNewMovie={handleSubmitNewMovie}
                isValid={isValid}
            />
        </div>,
        document.getElementById('modal')
    )
}

export default ModalAddNewMovie