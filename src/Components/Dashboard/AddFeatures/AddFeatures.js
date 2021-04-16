import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddFeatures = () => {

    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'e9e64b2ee44cecd0c92a81e15388c1fd');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {

                console.log(response.data.data.display_url); //after console this image url press submit button
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const featuresData = {
            title: data.title,
            description: data.description,
            imageURL: imageURL
        };
        console.log(featuresData);

        const url = `http://localhost:7000/addFeatures`
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(featuresData)
        })
            .then(res => console.log(res));

    };

    return (
        <div className="container-fluid row" >
            <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">

                <div className="d-flex justify-content-center mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("title", { required: true })} type="text" name="title" placeholder="Enter Features Title" className="form-control" />
                        <br />
                        <input  {...register("description", { required: true })} type="text" name="description" placeholder="Enter Features Description" className="form-control" />
                        <br />
                        <input {...register("name", { required: true })} type="file" name="name" onChange={handleImageUpload} />
                        <br />
                        <br/>
                        <input type="submit" className="btn btn-primary" />

                    </form>
                </div>

            </div>
        </div>

    );
};

export default AddFeatures;