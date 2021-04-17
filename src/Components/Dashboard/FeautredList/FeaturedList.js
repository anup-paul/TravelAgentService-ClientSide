import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import FeaturedTable from './FeaturedTable';

const FeaturedList = () => {

    const [bookingList, setBookingList] = useState([])



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://still-brushlands-40409.herokuapp.com/findAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])


    const handleStatues = (email,event) =>{
        
        console.log(email);
        // console.log(event.target.value)
        // const userUpdate = {
        //     status:event.target.value
        // }
        // console.log(userUpdate)
    }




    return (
        <div className="container-fluid row" >
            <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">

                <div className="d-flex justify-content-center">

                    <div className="w-75 text-center mt-5" >
                        <h4 className="mb-5 " ><b>Booking List</b></h4>
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email Address</th>
                                    <th scope="col">Featured Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    bookingList.map((booking, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{booking.name}</td>
                                            <td>{booking.email}</td>
                                            <td>{booking.title}</td>
                                        </tr>
                                      )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedList;