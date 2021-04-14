import React from 'react';
import './ServicsHeader.css';
import serviceHeaderImg from '../../../../Images/serviceHeaderImg.jpg'

const ServiceHeader = () => {
    return (
        <section>
            <div className="d-flex justify-content-center my-5">
                <div className="w-75 row">
                    <div className="col-md-6 serviceHeaderImgDesign">
                        <img className="img-fluid" src={serviceHeaderImg} alt=""/>
                    </div>
                    <div className="col-md-6">
                        <h2><b>The best <br/>Adventure and <br/> Travel Agent</b></h2>
                        <p className="text-secondary mt-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, maiores?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceHeader;