import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ModalAddNewMovie from './../../containers/AddNewMoviesModal/index.jsx';
import MovieList from './MovieList';
import {filteredMovieListSelector} from './../../reducers/movieReducer';

const Movies = () => {
  const movies=useSelector(filteredMovieListSelector);

  const [isHiddenModal, setIsHiddenModal] = useState(true);

  const handleOpanModal = () => {
    setIsHiddenModal(!isHiddenModal)
  }

  return (
    <React.Fragment>
    <div className="btn-add">
        <button onClick={handleOpanModal} >
          Add new movie
        </button>
        {
                !isHiddenModal ? (
                    <ModalAddNewMovie
                    handleOpanModal={handleOpanModal}
                    />) : ""
            }
      </div>
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>      
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Movies;
