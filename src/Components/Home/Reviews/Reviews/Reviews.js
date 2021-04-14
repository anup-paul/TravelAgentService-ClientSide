import React from 'react';
import reviewImg1 from '../../../../Images/reviewImg1.jpg';
import reviewImg2 from '../../../../Images/reviewImg2.jpg';
import reviewImg3 from '../../../../Images/reviewImg3.jpg'
import ReviewCard from '../ReviewCard/ReviewCard';

const reviewInfo=[
    {
        name:"Loren",
        image:reviewImg1,
        from:"London",
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem '
    },
    {
        name:"Ben Parker",
        image:reviewImg2,
        from:"New York",
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem '
    },
    {
        name:"Martin",
        image:reviewImg3,
        from:"Frankfurt",
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem '
    }
]

const Reviews = () => {
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