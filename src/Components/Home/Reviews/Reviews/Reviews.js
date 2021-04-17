import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';



const Reviews = () => {

    const [reviewInfo, setReviewInfo] = useState([])

    useEffect(()=>{
        fetch('https://still-brushlands-40409.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data => setReviewInfo(data))
    }, [])

    return (
        <section>
            <h2 className="text-center mt-5" ><b>Reviews</b></h2>
            <div className="d-flex justify-content-center my-5" >
                <div className="w-75 row my-5">
                    {
                        reviewInfo.map(reviewCardInfo=><ReviewCard reviewCardInfo={reviewCardInfo} ></ReviewCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;