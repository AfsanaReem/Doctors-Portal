import React from 'react';
import AppointmentBanner from '../Components/AppointmentBanner';
import Banner from '../Components/Banner';
import ServiceBanner from '../Components/ServiceBanner';
import Services from '../Components/ServiceCard/Services';
import Testimonial from '../Components/Review/Testimonial';
import ContactUs from '../Components/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services></Services>
            <ServiceBanner></ServiceBanner>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;