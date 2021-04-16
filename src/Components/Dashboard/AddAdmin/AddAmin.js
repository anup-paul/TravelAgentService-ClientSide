import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddAmin = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        // const adminData={
        //     name:data.name,
        //     email:data.email
        // }
        // console.log(adminData);
        fetch('http://localhost:7000/admin',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => console.log(res));
    };

    return (
        <div className="container-fluid row" >
            <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            <h4 className="text-center" >Add Admin</h4>
                <div className="d-flex justify-content-center mt-5">
                
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  {...register("name", { required: true })} type="text" name="name" placeholder="Enter Admin name" className="form-control" />
                        <br />
                        <input  {...register("email", { required: true })} type="email" name="email" placeholder="Enter Admin Email" className="form-control" />
                        <br />
                        <input type="submit" className="btn btn-primary" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAmin;