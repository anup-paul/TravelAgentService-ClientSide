import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faPlusCircle, faUserFriends, faChessKing, faMinusSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './SideBar.css'
import { UserContext } from '../../../App';




const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, SetIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:7000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => SetIsAdmin(data))
    }, [])

    return (
        <div className="mt-5">
            <div className="ms-4">
                <ul className="list-unstyled sidebarDesign">

                    <li >
                        <Link to="/home" className="text-white " style={{ textDecoration: "none" }} >
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </li>
                    {
                        !isAdmin &&
                        <div>
                            <li>
                                <Link to="/addReview" className="text-white" style={{ textDecoration: "none" }}  >
                                    <FontAwesomeIcon icon={faPlusSquare} />  Add review
                                </Link>
                            </li>


                            <li>
                                <Link to="/userFeaturedList" className="text-white" style={{ textDecoration: "none" }}  >

                                    <FontAwesomeIcon icon={faUserFriends} /> Booking List
                                </Link>
                            </li>
                        </div>
                    }

                    {
                        isAdmin &&
                        <div>
                            <li >
                                <Link to="/addFeatures" className="text-white " style={{ textDecoration: "none" }} >
                                    <FontAwesomeIcon icon={faPlusCircle} />  Add Features
                                </Link>
                            </li>


                            <li>
                                <Link to="/featuredList" className="text-white" style={{ textDecoration: "none" }}  >
                                    <FontAwesomeIcon icon={faUserFriends} />  Booking List
                                </Link>
                            </li>

                            <li>
                                <Link to="/addAdmin" className="text-white" style={{ textDecoration: "none" }} >
                                    <FontAwesomeIcon icon={faChessKing} />  Add Admin
                                </Link>
                            </li>

                            <li>
                                <Link to="/manageService" className="text-white" style={{ textDecoration: "none" }}  >
                                    <FontAwesomeIcon icon={faMinusSquare} />  Manage Service
                                </Link>
                            </li>
                        </div>
                    }
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