import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddAmin = () => {
    return (
        <div className="container-fluid row" >
            <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <h1> Add Admin</h1>
            </div>
        </div>
    );
};

export default AddAmin;