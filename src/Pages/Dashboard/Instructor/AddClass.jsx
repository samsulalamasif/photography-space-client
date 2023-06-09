import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AddClass = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>Photograph Space | Add Class</title>
            </Helmet>
            <SectionTitle title={"Add a Class"}></SectionTitle>
        </div>
    );
};

export default AddClass;