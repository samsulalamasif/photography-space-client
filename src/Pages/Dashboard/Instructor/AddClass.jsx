import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../components/Hooks/useAuth';

const AddClass = () => {
    const { user } = useAuth()


    return (
        <div className='w-full'>
            <Helmet>
                <title>Photograph Space | Add Class</title>
            </Helmet>
            <SectionTitle title={"Add a Class"}></SectionTitle>
            <form className='mx-20 mb-10 p-10 bg-sky-200 rounded-lg space-y-5'>
                <div className='flex justify-between items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Class Name</span>
                        </label>
                        <input type="text"
                            placeholder="Class Name" required className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Class Image</span>
                        </label>
                        <input type="file"
                            placeholder="Class Image" required className=" w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Instructor name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} disabled
                            placeholder="Instructor name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Instructor email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} disabled
                            placeholder="Instructor email" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>
                <div className='flex gap-3 justify-between items-center'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-lg font-semibold">Available seats</span>
                        </label>
                        <input type="text"
                            placeholder="Available seats" required className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-lg font-semibold">Price</span>
                        </label>
                        <input type="text"
                            placeholder="Price" required className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-lg font-semibold">Status</span>
                        </label>
                        <input type="text"
                            defaultValue={"pending"} disabled
                            placeholder="Price" required className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>

            </form>
        </div>
    );
};

export default AddClass;