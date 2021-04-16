import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';

const SimpleCartForm = ({bookingData}) => {

    const stripe = useStripe();
    const elements = useElements();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const [userName, setUserName] = useState(null);
    const [userEmail, setUserEmail] = useState(null);



    const handleName = (event) => {
        setUserName(event.target.value)
    }

    const handleEmail = (event) => {
     
        setUserEmail(event.target.value);
        
    }


    const handlePaymentSubmit = (paymentId)=>{

        const bookingInfo = {
            name:userName,
            email:userEmail,
            paymentId,
            title:bookingData.title
        }
        console.log(bookingInfo);

        fetch('http://localhost:7000/bookingData',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(bookingInfo)
        })
        .then(res => console.log(res))
    }


    const handleSubmit = async (event) => {
       
        event.preventDefault();

        if (!stripe || !elements) {
        
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            handlePaymentSubmit(paymentMethod.id);
            setPaymentError(null);
        }
    };




    return (
        <div >
            <form onSubmit={handleSubmit} >
            <input type="name" name="name" onBlur={handleName} placeholder="enter your name" className="form-control mb-2"/>
                <input type="email" name="email" onBlur={handleEmail} placeholder="enter your email" className="form-control mb-2"/>
                <CardElement />
                <br/>
                <button className="btn btn-primary" type="submit" disabled={!stripe}>
                    Pay
                </button>
                <br/>
                {
                    paymentError && <h6 className="text-danger mt-2" >{paymentError}</h6>
                }
                {
                    paymentSuccess && <h6 className="text-success mt-2">Complete your booking process. Thankyou!</h6>
                }
            </form>

        </div>
    );
};

export default SimpleCartForm;