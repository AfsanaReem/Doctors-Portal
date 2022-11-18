import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, selected, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const booking = {
            date,
            treatment: treatment.name, slot, patientName: name, email, number
        };
        console.log(booking);
        setTreatment(null);
    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-col-1 gap-3'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type='submit' className='btn btn-accent'></input>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;