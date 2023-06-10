import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: AllClasses = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get("/class")
        refetch()
        return res.data
    })


    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const status = form.status.value
        const feedback = form.feedback.value
        const classId = form.classId.value

        const updateClass = { status: status, feedback: feedback }
        console.log(updateClass);

        axiosSecure.put(`/class/${classId}`, updateClass)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Manage Class approved/denied successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div>
            <Helmet>
                <title>Photograph Space | Manage Classes</title>
            </Helmet>
            <SectionTitle title={"Manage Classes"}></SectionTitle>
            <h2 className='text-sky-700 font-semibold text-center font-serif text-5xl'>
                Total Classes: {AllClasses.length}</h2>
            <div>
                <div className="overflow-x-auto my-20 px-10">
                    <table className="table">
                        {/* head */}
                        <thead className='text-base text-gray-700'>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>Class Photo</th>
                                <th>Class Details</th>
                                <th>Instructor Details</th>
                                <th>Approved/Denied & Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllClasses.map((cls, index) => <tr key={cls._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-32 rounded-xl">
                                                <img src={cls.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='font-semibold space-y-1'>
                                            <p className=' text-sm font-serif
                                         font-bold'>Class Name: <span className='text-sky-700'> {cls.className}</span></p>

                                            <p>Status:
                                                {cls.status === "pending" &&
                                                    <span className=' text-gray-600'> {cls.status}</span>}

                                                {cls.status === "approved" &&
                                                    <span className=' text-green-600'> {cls.status}</span>}

                                                {cls.status === "denied" &&
                                                    <span className=' text-red-600'> {cls.status}</span>}

                                            </p>
                                            <p>Price: ${cls.price}</p>
                                            <p>Available Seat {cls.availableSeat} </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='font-bold text-xs space-y-2'>
                                            <p className='font-serif'>Name: {cls.userName}</p>
                                            <p>{cls.email}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <form onSubmit={handleSubmit}>
                                            <div className='space-y-2'>
                                                <div className="form-control ">
                                                    <select name="status" defaultValue="pending"
                                                        className="select select-bordered">
                                                        <option disabled>pending</option>
                                                        <option>approved</option>
                                                        <option>denied</option>
                                                    </select>
                                                </div><div className="form-control ">
                                                    <input type="text" name="classId"
                                                        className='hidden'
                                                        defaultValue={cls._id}></input>
                                                </div>

                                                <div className="form-control ">
                                                    <input type="text" name="feedback"
                                                        placeholder='feedback'
                                                        className="input input-bordered" />
                                                </div>
                                                <div className="form-control ">
                                                    <input className="btn btn-sm text-white bg-sky-700 
                                                border-0  mx-auto"
                                                        type="submit" value="Confirm Class" />
                                                </div>
                                            </div>
                                        </form>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;



