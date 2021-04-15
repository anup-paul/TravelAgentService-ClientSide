import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCartForm from '../SimpleCartForm/SimpleCartForm';

const PaymentProcess = ({bookingData}) => {

    const stripePromise = loadStripe('pk_test_51Ie0lgCkxwlcOa2ZmCBqqExjK2TPigJYrugp8zFFBC59UffHMVUez3CEVoVcj3vaSQVkTyvIlEAYSEkkZMbT3ADy00yYtiatB6');


    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCartForm bookingData={bookingData} ></SimpleCartForm> 
            </Elements>
        </div>
    );
};

export default PaymentProcess;