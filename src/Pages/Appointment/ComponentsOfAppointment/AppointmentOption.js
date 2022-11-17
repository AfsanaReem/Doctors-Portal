import React from 'react';

const AppointmentOption = ({ appointment }) => {
    const { name, slots } = appointment;
    return (
        <div>
            <div className="card shadow-xl h-full">
                <div className="card-body text-center">
                    <h2 className="text-2xl text-primary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'No Slots Available'}</p>
                    <>{slots.length === 0 ? <></> : <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} available.</p>}</>
                    <div className="card-actions justify-center">
                        <>{slots.length === 0 ? <></> : <button className="btn btn-primary text-white">Book Appointment</button>}</>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;