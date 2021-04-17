import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddReview = () => {

    const [imageURL, setImageURL] = useState(null);

    const handlePersonaImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'ac3e2a54e12f6f6f8ba26e4e23d0ba9c');
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
        console.log(data);
        const featuresData = {
            name: data.userName,
            from: data.cityName,
            description: data.feedback,
            imageURL: imageURL
        };
        console.log(featuresData);

        const url = `https://still-brushlands-40409.herokuapp.com/addReviews`
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

                        <input  {...register("userName", { required: true })} type="text" name="userName" placeholder="Enter your name" className="form-control" />
                        <br />
                        <input  {...register("cityName", { required: true })} type="text" name="cityName" placeholder="Enter your city name" className="form-control" />
                        <br />
                        <input  {...register("feedback", { required: true })} type="text" name="feedback" placeholder="Give your Feedback" className="form-control" />
                        <br />
                        <input {...register("name", { required: true })} type="file" name="name" onChange={handlePersonaImageUpload} />
                        <br />
                        <br />
                        <input type="submit" className="btn btn-primary" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;