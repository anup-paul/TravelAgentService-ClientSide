import React from 'react';

const FeaturedCard = ({featuredCardInfo}) => {
    return (
        <div className="col-md-4">
           <div className="card text-center p-4 border border-2 shadow p-3 mb-5 bg-body rounded">
                <img className="mb-3 img-fluid" src={featuredCardInfo.image} alt=""/>
                <h3 className="mb-3"><b>{featuredCardInfo.title}</b></h3>
                <p className="text-secondary"> {featuredCardInfo.description} </p>
                <div className="btn btn-primary mt-3"> Book Now</div>
            </div> 
        </div>
    );
};

export default FeaturedCard;