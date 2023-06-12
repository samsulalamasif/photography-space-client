import React, { useState } from 'react';
import useCart from '../../../components/Hooks/useCarts';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import CheckoutForm from './Payment/CheckOutForm';

const MySelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const [cart, refetch] = useCart()

    const [pay, setPay] = useState("")

    const handleClassDelete = (cartData) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Want to delete the select class?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${cartData._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your select class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }





    return (
        <div>
            <Helmet>
                <title>Photograph Space | My Selected Class</title>
            </Helmet>
            <SectionTitle title={"My Selected Classes"}></SectionTitle>
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
                                <th>Instructor Name & Email</th>
                                <th>Delete</th>
                                <th className='text-sky-700'>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((cartData, index) => <tr key={cartData._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-32 rounded">
                                                <img src={cartData.image
                                                } />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-sky-700 text-lg font-serif
                                         font-bold'>{cartData.className}</p>
                                    </td>
                                    <td>
                                        <p className='font-bold'>Price: ${cartData.price}</p>
                                    </td>
                                    <td>
                                        <p className='text-lg font-serif font-bold'>
                                            {cartData.instructorName}</p>
                                        <p className='text-sm font-bold'>
                                            {cartData.instructorEmail}</p>
                                    </td>

                                    <th>
                                        <button onClick={() => handleClassDelete(cartData)}
                                            className='btn bg-red-600 text-white text-xl'>
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                    <th>
                                        <Link to="/dashboard/payment" state={cartData}

                                            className='btn bg-sky-700 text-white border-0 '>
                                            Payment
                                        </Link>

                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default MySelectedClass;