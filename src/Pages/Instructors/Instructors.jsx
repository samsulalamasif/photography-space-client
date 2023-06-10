import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: Instructors = [], refetch } = useQuery(["Instructors"], async () => {
        const res = await axiosSecure.get("/allInstructor")
        return res.data
    })


    return (
        <div>
            <Helmet>
                <title>Photograph Space | Instructors</title>
            </Helmet>
            <SectionTitle title={"All Instructors"}></SectionTitle>
            <h1 className='text-sky-700 font-semibold text-center font-serif text-5xl my-5'>Total Instructors: {Instructors.length}</h1>
            <div>
                <div className="overflow-x-auto my-10">
                    <table className="table">
                        {/* head */}
                        <thead className='text-lg'>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Instructors.map((instructor, index) =>
                                    <tr key={instructor._id}>
                                        <th className='text-lg '>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar online">
                                                <div className="w-28 rounded-full">
                                                    <img src={instructor.photo} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='text-xl text-sky-700 font-bold'>{instructor.name}</p>
                                        </td>
                                        <td>
                                            <p className='text-lg font-bold'>{instructor.email}</p>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Instructors;