import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../components/Hooks/useAxiosSecure';

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: Instructors = [], refetch } = useQuery(["Instructors"], async () => {
        const res = await axiosSecure.get("/allInstructor")
        return res.data
    })


    return (
        <div>
            <SectionTitle title={"Our Popular Instructors"}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-10 mb-10'>
                {
                    Instructors.slice(0, 6).map(instructor =>
                        <div key={instructor._id} className="card w-96 h-72 bg-sky-200 mx-auto shadow-xl">
                            <div className="avatar px-10 mx-auto pt-10">
                                <div className="w-32 rounded-full ring ring-primary 
                                    ring-offset-base-100 ring-offset-2">
                                    <img src={instructor.photo} />
                                </div>
                            </div>
                            <h2 className="w-full text-3xl text-center font-serif font-bold my-5">{instructor.name}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularInstructors;