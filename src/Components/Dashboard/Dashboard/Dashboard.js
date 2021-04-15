import React from 'react';
import AddFeatures from '../AddFeatures/AddFeatures';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <main>
            <div className="container-fluid row" >
                <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                    <Sidebar></Sidebar>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;