import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../SharedComponents/Loading';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-3xl mb-5">My Appointments</h3>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((booking, i) =>
                                    <tr className="hover" key={i}>
                                        <th>{i + 1}</th>
                                        <td>{booking.patientName}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;