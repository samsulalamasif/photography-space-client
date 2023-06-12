import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import useAuth from '../../../components/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyEnrolledClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()


    const { data: Enrolled = [], } = useQuery(["enrolled"], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        // console.log(Enrolled);
        return res.data
    })


    return (
        <div>
            <Helmet>
                <title>Photograph Space | My Enrolled Class</title>
            </Helmet>
            <SectionTitle title={"My Enrolled Class"}></SectionTitle>
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
                                <th>Price</th>
                                <th>Instructor Name</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Enrolled.map((enrollCls, index) => <tr key={enrollCls._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-32 rounded">
                                                <img src={enrollCls.image
                                                } />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-sky-700 text-lg font-serif
                                         font-bold'>{enrollCls.className}</p>
                                    </td>
                                    <td>
                                        <p className='font-bold'>Price: ${enrollCls.price}</p>
                                    </td>
                                    <td>
                                        <p className='text-lg font-serif font-bold'>
                                            {enrollCls.instructorName}</p>

                                    </td>
                                    <td>
                                        <p className='bg-green-200 text-green-600 text-lg font-bold
                                        rounded-2xl w-16 h-8 text-center my-auto'>Paid</p>
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

export default MyEnrolledClass;