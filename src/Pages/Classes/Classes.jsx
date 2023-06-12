import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAuth from '../../components/Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAdmin from '../../components/Hooks/useAdmin';
import useInstructor from '../../components/Hooks/useInstructor';

const Classes = () => {
    const { user } = useAuth()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const [axiosSecure] = useAxiosSecure()
    const location = useLocation()
    const navigate = useNavigate()

    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get("/allClass")
        return res.data
    })


    const handleSelectClass = cls => {
        // console.log(cls);
        const { className, image, price, userName, email } = cls
        const selectClass = {
            className, image, price, instructorName: userName,
            instructorEmail: email, email: user?.email
        }


        if (user && user.email) {
            // console.log(cls);

            axiosSecure.post("/carts", selectClass)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class select successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }


    return (
        <div>
            <Helmet>
                <title>Photograph Space | Classes</title>
            </Helmet>
            <SectionTitle title={"All Classes"}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  mb-20'>
                {
                    classes.map(cls =>
                        <div className="card w-96 bg-base-100 mx-auto shadow-xl" key={cls._id}>
                            <figure><img className='h-72' src={cls.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-lg font-serif text-center font-bold text-sky-700">{cls.className}</h2>
                                <div className='my-3'>
                                    <p className='text-lg font-bold'>Instructor Name: {cls.userName}</p>
                                    <p className='font-semibold'>Price: ${cls.price}</p>
                                    <p className='font-semibold'>Available Seats: {cls.availableSeat}</p>
                                </div>
                                <div className="card-actions justify-center">
                                    <button disabled={isAdmin || isInstructor}
                                        onClick={() => handleSelectClass(cls)}
                                        className="btn bg-sky-700 text-white border-0 mt-3">
                                        Select Class</button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>


        </div>
    );
};

export default Classes;