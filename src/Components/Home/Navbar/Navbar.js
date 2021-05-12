import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid container">
                    <Link to ="home" className="navbar-brand" ><b>HlW NOMADS</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" d-flex collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to ="/home" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                           
                            <li className="nav-item">
                                <Link to ="/dashboard" className="nav-link active" aria-current="page" >Dashboard</Link>
                            </li>

                            <li className="nav-item">
                                <Link to ="/contact" className="nav-link active" aria-current="page" >Contract</Link>
                            </li>

                            <li className="nav-item">
                                <Link to ="/login" className="nav-link active" aria-current="page" >Login</Link>
                            </li>
                            
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;