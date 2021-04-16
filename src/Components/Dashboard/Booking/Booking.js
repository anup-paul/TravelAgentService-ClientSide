import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import Sidebar from '../Sidebar/Sidebar';

const Booking = () => {

    const { id } = useParams();
    const [bookingData, setBookingData] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:7000/bookingFeatures/${id}`)
            .then(res => res.json())
            .then(data => { setBookingData(data[0]) })
    }, [id])

    return (
        <div className="container-fluid row" >
            <div className="col-md-2" style={{ backgroundColor: "rgb(12, 11, 27)", height: "100vh" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <div className="text-center" >
                    <h6>Hello {loggedInUser.name}! This is your booking process</h6>
                    <h4><b>{bookingData.title}</b></h4>
                </div>
                <div className="p-5 w-50">
                    <PaymentProcess bookingData={bookingData} ></PaymentProcess>
                </div>
            </div>
        </div>
    );
};

export default Booking;