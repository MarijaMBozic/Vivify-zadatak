import React from 'react'
import "./index.css"

function ModalAddNewMovieUI(props) {
    const {
        handleOpanModal,
        newMovie,
        handleChangeNewMovie,
        handleSubmitNewMovie,
        isValid
    } = props;

    const {
        title,
        subtitle,
        description,
        year,
        imageUrl
    } = newMovie;
    return (
        < div >
            <form onSubmit={handleSubmitNewMovie}>
                <div className="modal-container">
                    <div>
                    <div className="modalAdd-item">
                        <div className="dataMovieAdd-item">
                            <div className="item-moviedata-add">
                                <input
                                    type="text"
                                    value={title || ''}
                                    name="title"
                                    placeholder="Title..."
                                    onChange={handleChangeNewMovie("title")}
                                />
                            </div>
                            <div className="item-moviedata-add">
                                <input
                                    type="text"
                                    value={subtitle || ''}
                                    name="subtitle"
                                    placeholder="Subtitle..."
                                    onChange={handleChangeNewMovie("subtitle")}
                                />
                            </div>
                            <div className="item-moviedata-add">
                                <input
                                    type="text"
                                    value={description || ''}
                                    name="description"
                                    placeholder="Description..."
                                    onChange={handleChangeNewMovie("description")}
                                />
                            </div>
                            <div className="item-moviedata-add">
                                <input
                                    type="text"
                                    value={year || ''}
                                    name="year"
                                    placeholder="Year..."
                                    onChange={handleChangeNewMovie("year")}
                                />
                            </div>
                            <div className="item-moviedata-add">
                                <input
                                    type="file"
                                    value={imageUrl || ''}
                                    onChange={handleChangeNewMovie('imageUrl')} />
                            </div>
                            </div>
                            <div className='btn-closeModalData-add'>
                                <button type="button" className="close-item-add" onClick={handleOpanModal}  >
                                    <p>Quit</p>
                                </button>
                                <button className="close-item-add" type="submit" disabled={!isValid}  >
                                    <p>Add</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default ModalAddNewMovieUI