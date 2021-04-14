import React from 'react';
import Featured from '../Featured/Featured';
import ServiceHeader from '../ServiceHeader/ServiceHeader';

const Services = () => {
    return (
        <div>
            <h3 className="text-center" ><b>Services</b></h3>
            <ServiceHeader></ServiceHeader>
            <Featured></Featured>
        </div>
    );
};

export default Services;