import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import FeaturedTable from './FeaturedTable';

const FeaturedList = () => {

    const [bookingList, setBookingList] = useState([])

    useEffect(() => {

        fetch('http://localhost:7000/bookingList')
            .then(res => res.json())
            .then(data => {
                setBookingList(data)
                console.log(data);
            })

    }, [])

    return (
        <div className="container-fluid row" >
            <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                
                <div className="d-flex justify-content-center">
                
                    <div className="w-75 text-center mt-5" >
                    <h4 className="mb-5 " ><b>Booking List</b></h4>
                        <table class="table table-borderless">
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