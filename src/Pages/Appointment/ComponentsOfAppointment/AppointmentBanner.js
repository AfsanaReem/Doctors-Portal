import React from 'react';
import chair from '../../../assets/images/chair.png';
import background from '../../../assets/images/bg.png';

const AppointmentBanner = () => {
    return (
        <header>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='chair' src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure sunt aperiam culpa est? Labore amet itaque debitis dolorum esse?</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;