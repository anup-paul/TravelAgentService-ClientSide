import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../App';

const FeaturedTable = ({ booking, index }) => {


  

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{booking.name}</td>
            <td>{booking.email}</td>
            <td>{booking.title}</td>
        </tr>
    );
};

export default FeaturedTable;