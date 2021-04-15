import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUserFriends, faCog, faCalendarWeek, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SideBar.css'
import AddFeatures from '../AddFeatures/AddFeatures';



const Sidebar = () => {

    // const handleAddFeatures = ()=>{
    //     <AddFeatures></AddFeatures>
    // }

    return (
        <div className="mt-5">
            <div className="ms-4">
                <ul className="list-unstyled sidebarDesign">

                    <li >
                        <Link  to="/addFeatures" className="text-white " style={{ textDecoration: "none" }} >
                            <FontAwesomeIcon icon={faUserPlus} /> Add Features
                            </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white" style={{ textDecoration: "none" }}  >
                            <FontAwesomeIcon icon={faCalendarWeek} />Add review
                    </Link>
                    </li>
                    <li>
                        <Link to="/featuredList" className="text-white" style={{ textDecoration: "none" }}  >

                            <FontAwesomeIcon icon={faUserFriends} /> All Featured 
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white" style={{ textDecoration: "none" }} >
                            <FontAwesomeIcon icon={faCog} /> Add Admin
                    </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" style={{ textDecoration: "none" }}  >
                            <FontAwesomeIcon icon={faCalendarWeek} />Manage Service
                    </Link>
                    </li>
                </ul>

                <div className="logoutlink">
                    <Link to="/appointment" className="text-white" style={{ textDecoration: "none" }}  >
                        <FontAwesomeIcon icon={faSignOutAlt} />LogOut
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;