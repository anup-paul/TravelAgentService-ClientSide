import React, { useEffect, useState } from 'react';
import everestImg from '../../../../Images/everest.jpg';
import climbingImg from '../../../../Images/climbing.jpg';
import hikingImg from '../../../../Images/HKmountain.jpg';
import FeaturedCard from '../FeaturedCard/FeaturedCard';

const featuredInfo=[
    {
        title:"Expedition Everest",
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem',
        image:everestImg
    },
    {
        title:"Climbing Switzerland Rock",
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem',
        image:climbingImg
    },
    {
        title:"Hiking Mountain Rock",
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, exercitationem',
        image:hikingImg
    }
]

const Featured = () => {

    const [features, setFeatures] = useState([]);

    useEffect(()=>
    {
        fetch('http://localhost:7000/features')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, [])

    return (
        <section>
            <h3 className="text-center my-5" ><b>Featured</b></h3>
            <div className="d-flex justify-content-center my-5">
                <div className="w-75 row">
                    {
                       features.map(featuredCardInfo=><FeaturedCard featuredCardInfo={featuredCardInfo} ></FeaturedCard>) 
                    }
                </div>
            </div>
        </section>
    );
};

export default Featured;