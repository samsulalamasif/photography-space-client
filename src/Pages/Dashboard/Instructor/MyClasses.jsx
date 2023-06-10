import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import useAuth from '../../../components/Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
    const { user } = useAuth()
    // console.log(user.email);
    const [axiosSecure] = useAxiosSecure()


    const { data: classes = [], refetch } = useQuery(["classes"], async () => {
        const res = await axiosSecure.get(`/class/${user?.email}`)
        console.log(res.data);
        return res.data
    })




    return (
        <div>
            <Helmet>
                <title>Photograph Space | My Classes</title>
            </Helmet>
            <SectionTitle title={"My all Classes"}></SectionTitle>
        </div>
    );
};

export default MyClasses;