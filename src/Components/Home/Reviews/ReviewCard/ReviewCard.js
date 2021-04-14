import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({ reviewCardInfo }) => {
    return (
        <div className="col-md-4">
            <div className="card text-center p-4 border border-2 shadow p-3 mb-5 bg-body rounded" >
                <div className="reviewImgDesign d-flex justify-content-evenly align-items-center" >
                    <img className="img-fluid" src={reviewCardInfo.image} alt="" />
                    <div>
                        <h6><b>{reviewCardInfo.name}</b></h6>
                        <h6><b>{reviewCardInfo.from}</b></h6>
                    </div>
                </div>
                <p className="text-secondary my-4" >{reviewCardInfo.description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;