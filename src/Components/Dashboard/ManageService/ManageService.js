import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DeleteService from './DeleteService';

const ManageService = () => {

    const [features, setFeatures] = useState([])

    useEffect(() => {
        fetch('https://still-brushlands-40409.herokuapp.com/features')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                
                <div className="row">
                    {
                        features.map(feature => <DeleteService feature={feature} ></DeleteService>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default ManageService;