import React, {useState} from "react";

const AddMovie = props => {
    const initialMovieData = {
        title: "",
        director: "",
        metascore: "",
        stars: []
    }
    const [newMovie, setNewMovie] = useState(initialMovieData);

    const onChange = e => {
        let value = e.target.value;
        if(e.target.name === "stars")
            value = e.target.value.split(",");
        setNewMovie({
            ...newMovie,
            [e.target.name]: value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(newMovie)
    }

    return (
        <div className="add-movie">
            <form onSubmit={onSubmit}>
                <h1>Add Movie</h1>
                <label htmlFor="title">
                    Title: <input onChange={onChange} type="text" name="title"/>
                </label>
                <label htmlFor="director">
                    Director: <input onChange={onChange} type="text" name="director"/>
                </label>
                <label htmlFor="metascore">
                    Metascore: <input onChange={onChange} type="text" maxLength="3" name="metascore"/>
                </label>
                <label htmlFor="metascore">
                    Stars: <input onChange={onChange} type="text" name="stars"/>
                </label>
                <div>
                    <small>*separate actors by a comma</small>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie;