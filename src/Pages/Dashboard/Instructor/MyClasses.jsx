import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import useAuth from '../../../components/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
    const { user } = useAuth()
    const [axiosSecure,] = useAxiosSecure()
    const [classes, setClasses] = useState([])


    axiosSecure.get(`/myClasses/${user?.email}`)
        .then(res =>
            setClasses(res.data))




    return (
        <div>
            <Helmet>
                <title>Photograph Space | My Classes</title>
            </Helmet>
            <SectionTitle title={"My all Classes"}></SectionTitle>
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
                                <th>Class Name</th>
                                <th>Status</th>
                                <th>Feedback</th>
                                <th>Enrolled Students</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((cls, index) => <tr key={cls._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full ring 
                                            ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={cls.image
                                                } />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-sky-700 text-sm font-serif
                                         font-bold'>{cls.className}</p>
                                    </td>
                                    <th className='font-bold'>
                                        {cls.status === "pending" &&
                                            <p className=' text-gray-600'>{cls.status}</p>}

                                        {cls.status === "approved" &&
                                            <p className=' text-green-600'>{cls.status}</p>}

                                        {cls.status === "denied" &&
                                            <p className=' text-red-600'>{cls.status}</p>}
                                    </th>
                                    <th>
                                        <p className='font-semibold'>{cls.feedback}</p>
                                    </th>
                                    <th>
                                        <p className='font-semibold'></p>
                                    </th>
                                    <th>
                                        <button className='btn bg-sky-700 
                                        border-0 text-white'>Update</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;