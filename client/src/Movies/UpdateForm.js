import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const UpdateForm = props => {
    const [updateData, setUpdateData] = useState({
        title: '',
        director: '',
        metascore: null,
    });
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${id}`).then(({data})=>{
            setUpdateData({
                title: data.title,
                director: data.director,
                metascore: data.metascore
            })
        }).catch(err=>{
            console.log(err);
        });
    }, []);


    return (
        <div className="update-movie">
            <h1>Update Movie</h1>
            <form>
                <label htmlFor="title">
                    Title: <input type="text" name="title" value={updateData.title}/>
                </label>
                <label htmlFor="title">
                    Director: <input type="text" name="director" value={updateData.director}/>
                </label>
                <label htmlFor="title">
                    Metascore: <input type="text" name="metascore" value={updateData.metascore}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateForm;