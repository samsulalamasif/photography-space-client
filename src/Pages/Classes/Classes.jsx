import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get("/allClass")

        return res.data
    })



    return (
        <div>
            <Helmet>
                <title>Photograph Space | Classes</title>
            </Helmet>
            <SectionTitle title={"All Classes"}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 space-y-3 mb-20'>
                {
                    classes.map(cls =>
                        <div className="card w-96 bg-base-100 mx-auto shadow-xl" key={cls._id}>
                            <figure><img className='h-72' src={cls.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl text-center font-bold text-sky-700">{cls.className}</h2>
                                <div>
                                    <p>Instructor Name: {cls.userName}</p>
                                    <p>Price: {cls.price}</p>
                                    <p>Available Seats: {cls.availableSeat}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    )}
            </div>


        </div>
    );
};

export default Classes;