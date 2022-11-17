import React from 'react';
import Banner from './ComponentsOfHomePage/Banner';
import ContactUs from './ComponentsOfHomePage/ContactUs';
import HomeAppointmentBanner from './ComponentsOfHomePage/HomeAppointmentBanner';
import Testimonial from './ComponentsOfHomePage/Review/Testimonial';
import ServiceBanner from './ComponentsOfHomePage/ServiceBanner';
import Services from './ComponentsOfHomePage/ServiceCard/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ServiceBanner></ServiceBanner>
            <HomeAppointmentBanner></HomeAppointmentBanner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;