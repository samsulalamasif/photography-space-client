import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClasses = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get("/allClass")
        return res.data
    })



    return (
        <div>
            <SectionTitle title={"Our Popular Classes"}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 my-10 mb-10'>
                {
                    classes.slice(0, 6).map(cls => console.log(cls))
                }

            </div>
        </div>
    );
};

export default PopularClasses;