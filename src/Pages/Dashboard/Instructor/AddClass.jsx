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
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;