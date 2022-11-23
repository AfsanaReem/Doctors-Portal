import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../SharedComponents/Loading';
const AvailableAppointment = ({ selected }) => {
    const date = format(selected, 'PP ')
    // const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const { data: appointments = [], refetch, isLoading } = useQuery({
        queryKey: ['appointments', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointments?date=${date}`)
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointments')
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [])
    return (
        <div>
            <p className='text-secondary text-center mb-4'>Available Appointments on {format(selected, 'PP')}.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointments.map(appointment => <AppointmentOption
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {treatment &&
                <BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    selected={selected}
                    refetch={refetch}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;