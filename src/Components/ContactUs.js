import React from 'react';
import bg from '../assets/images/appointment.png';
const ContactUs = () => {
    return (
        <div className='my-16'>
            <div className="hero">
                <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>

                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Your message" className="input h-32 input-bordered" />
                            </div>
                            <div className="mt-6 text-center">
                                <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;