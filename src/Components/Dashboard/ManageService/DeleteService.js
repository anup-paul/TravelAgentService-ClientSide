import React from 'react';
import './DelecteService.css';

const DeleteService = ({ feature }) => {

    const handleDelete = (id) =>{

        fetch(`http://localhost:7000/delete/${id}`,
        {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }

    return (
        <div className="col-md-4 my-5 ">
            
                <div className="card text-center p-3 " >
                    <div className="deleteCardDesign">
                        <h4>{feature.title}</h4>
                        <img src={feature.imageURL} alt="" />
                        <br />
                        <button onClick={()=>handleDelete(feature._id)} className="btn btn-danger mt-3" >Delete Feature</button>
                    </div>
                </div>
         
        </div>
    );
};

export default DeleteService;