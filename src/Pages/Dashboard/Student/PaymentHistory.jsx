import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import useAuth from '../../../components/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()


    const { data: Paid = [], } = useQuery(["paid"], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        // console.log(res.data);
        return res.data
    })


    return (
        <div>
            <Helmet>
                <title>Photograph Space | Payment History</title>
            </Helmet>
            <SectionTitle title={"My Payment History"}></SectionTitle>
            <div className="overflow-x-auto p-12">
                <table className="table">
                    {/* head */}
                    <thead className='text-lg font-semibold'>
                        <tr>
                            <th>
                                No.
                            </th>
                            <th>Name</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Instructor Name</th>
                        </tr>
                    </thead>
                    <tbody className='font-bold'>

                        {
                            Paid.map((pay, index) => <tr key={pay._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <p>{pay.name}</p>
                                </td>
                                <td>
                                    <p>{pay.className}</p>
                                </td>
                                <td>
                                    <p>Price: ${pay.price}</p>
                                </td>
                                <td>
                                    <p>Instructor Name: {pay.instructorName}</p>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;