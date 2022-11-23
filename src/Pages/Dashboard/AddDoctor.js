import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedComponents/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();
    const { data: specialty, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/specialty')
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    //save doctors info to tha database
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mt-6'>
            <div className='hero'>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className='text-center text-2xl'>Add A Doctor</h4>
                        {/* react hook form onsubmit handler */}
                        <form onSubmit={handleSubmit(handleAddDoctor)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input className="input input-bordered" type='text'
                                    {...register("name", { required: "Name is required" })} />
                                {errors.name && <p className="text-red-500" role="alert">{errors.name?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className="input input-bordered" type='email'
                                    {...register("email", { required: "Email is required" })} />
                                {errors.email && <p className="text-red-500" role="alert">{errors.email?.message}</p>}
                                <label className="label">
                                    <span className="label-text">Specialty</span>
                                </label>

                                <select {...register("specialty", { required: true })} className="select select-bordered w-full">
                                    {specialty?.map((s) => <option key={s._id} value={s.name}>{s.name}</option>)}
                                </select>
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input className="input input-bordered" type='file'
                                    {...register("img", { required: "Photo is required" })} />
                            </div>

                            <input className="btn btn-accent w-full mt-5" value="Add" type="submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;