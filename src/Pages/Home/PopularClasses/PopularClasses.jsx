import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAuth from '../../../components/Hooks/useAuth';

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { loading } = useAuth();


    const { data: classes = [], } = useQuery({
        queryKey: ['classes'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/allClass")
            return res.data
        }
    })



    return (
        <div>
            <SectionTitle title={"Our Popular Classes"}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 space-y-3 mb-20'>
                {
                    classes.slice(0, 6).map(cls =>
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
                                    <Link to='/classes'
                                        className="btn bg-sky-700 text-white border-0 mt-3">
                                        Select Class</Link>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default PopularClasses;