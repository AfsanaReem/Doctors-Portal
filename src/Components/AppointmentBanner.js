import React from 'react';
import img from '../assets/images/doctor.png';
import background from '../assets/images/appointment.png';
const AppointmentBanner = () => {
    return (
        <div className='md:mx-20 mt-32' style={{ backgroundImage: `url(${background})` }}>
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={img} className="md:max-w-sm rounded-lg shadow-2xl -mt-24 hidden md:block" />
                    <div>
                        <p className='test-primary'>Appointment</p>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;