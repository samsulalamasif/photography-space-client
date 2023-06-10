import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../components/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: Instructors = [], refetch } = useQuery(["Instructors"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data
    })


    return (
        <div>
            <Helmet>
                <title>Photograph Space | Instructors</title>
            </Helmet>
            <SectionTitle title={"All Instructors"}></SectionTitle>
            <h1>{Instructors.length}</h1>
            <div>

            </div>
        </div>
    );
};

export default Instructors;