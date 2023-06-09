import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../components/Hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const imageToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN


const AddClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()


    const imageHosting = `https://api.imgbb.com/1/upload?key=${imageToken}`

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const formData = new FormData()
        formData.append("image", data.image[0])

        fetch(imageHosting, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url
                    // console.log(imgURL);
                    const { availableSeat, className, feedback, price,
                        status, userEmail, userName } = data

                    const newClass = {
                        availableSeat, className, feedback,
                        image: imgURL, price: parseFloat(price), status, userEmail, userName
                    }
                    // console.log(newClass);

                    axiosSecure.post("/class", newClass)
                        .then(res => {
                            // console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'A new class has been successfully added',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset()
                            }
                        })
                }
            })
    };



    return (
        <div className='w-full'>
            <Helmet>
                <title>Photograph Space | Add Class</title>
            </Helmet>
            <SectionTitle title={"Add a Class"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}
                className='mx-20 mb-10 p-10 bg-sky-200 rounded-lg space-y-5'>
                <div className='flex justify-between items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Class Name</span>
                        </label>
                        <select defaultValue="Pick One" {...register("className")}
                            className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Landscape Photography</option>
                            <option>Black and White Photography</option>
                            <option>Travel Photography</option>
                            <option>Wedding and Event Photography</option>
                            <option>Lighting for Photography</option>
                            <option>Portrait Photography</option>
                            <option>Product Photography</option>
                            <option>Fashion Photography</option>
                            <option>Street Photography</option>
                            <option>Macro Photography</option>
                            <option>Night Photography</option>
                            <option>Film Photography</option>
                            <option>Studio Lighting</option>
                            <option>Advanced Photo Editing</option>
                            <option>Capturing Light</option>
                            <option>Mastering Manual Mode</option>
                            <option>Composition and Framing</option>
                            <option>Basic Photography Techniques</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Class Image</span>
                        </label>
                        <input type="file" {...register("image")}
                            placeholder="Class Image" required className=" w-full max-w-xs" />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Instructor name</span>
                        </label>
                        <input type="text" {...register("userName")}
                            defaultValue={user?.displayName} readOnly
                            placeholder="Instructor name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="text-lg font-semibold">Instructor email</span>
                        </label>
                        <input type="text" {...register("userEmail")}
                            defaultValue={user?.email} readOnly
                            placeholder="Instructor email" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>
                <div className='flex gap-3 justify-between items-center'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-lg font-semibold">Available seats</span>
                        </label>
                        <input type="text" {...register("availableSeat")}
                            placeholder="Available seats" required className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-lg font-semibold">Price</span>
                        </label>
                        <input type="text" {...register("price")}
                            placeholder="Price" required className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="text-lg font-semibold">Status</span>
                        </label>
                        <input type="text" {...register("status")}
                            defaultValue={"pending"} readOnly
                            placeholder="Status" required className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control ">
                    <div className="form-control ">
                        <input type="text" {...register("feedback")}
                            className="input input-bordered w-full max-w-xs hidden" />
                    </div>
                    <input className="btn text-white font-bold bg-sky-700 border-0  mx-auto hover:bg-sky-900 mt-10" type="submit" value="Add A Class" />
                </div>

            </form>
        </div>
    );
};

export default AddClass;