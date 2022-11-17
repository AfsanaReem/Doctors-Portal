import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
const AvailableAppointment = ({ selected }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('appointments.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div>
            <p className='text-secondary text-center'>Available Appointments on {format(selected, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointments.map(appointment => <AppointmentOption
                        key={appointment._id}
                        appointment={appointment}></AppointmentOption>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;