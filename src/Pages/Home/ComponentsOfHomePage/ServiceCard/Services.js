import React from 'react';
import icon1 from '../../../../assets/images/cavity.png';
import icon2 from '../../../../assets/images/fluoride.png';
import icon3 from '../../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: "Cavity Filling",
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: icon1
        },
        {
            id: 2,
            name: "Fluoride Treatment",
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: icon2
        },
        {
            id: 3,
            name: "Teeth Whitening",
            details: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            icon: icon3
        },
    ]
    return (
        <div className='mt-12'>
            <div className='text-center'>
                <h3 className='text-secondary font-bold text-2xl'>Our Services</h3>
                <h3 className='text-3xl mb-6'>Services we provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {servicesData.map(service => <Service
                    key={service.id}
                    service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;