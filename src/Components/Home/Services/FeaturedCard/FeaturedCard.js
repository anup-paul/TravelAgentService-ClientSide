import React from 'react';
import { useHistory } from 'react-router';

const FeaturedCard = ({featuredCardInfo}) => {

    let history = useHistory();

    const handleBooking = (id)=>{
      history.push(`/booking/${id}`)
    }

    return (
        <div className="col-md-4">
           <div className="card text-center p-4 border border-2 shadow p-3 mb-5 bg-body rounded">
                <img className="mb-3 img-fluid" src={featuredCardInfo.imageURL} alt=""/>
                <h3 className="mb-3"><b>{featuredCardInfo.title}</b></h3>
                <p className="text-secondary"> {featuredCardInfo.description} </p>
                <div className="btn btn-primary mt-3" onClick={()=>handleBooking(featuredCardInfo._id)} > Book Now</div>
            </div> 
        </div>
    );
};

export default FeaturedCard;