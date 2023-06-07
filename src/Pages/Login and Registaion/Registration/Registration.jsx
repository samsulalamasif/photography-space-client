import regImg from "../../../assets/registration.jpg"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAuth from "../../../components/Hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";


const Registration = () => {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("");
    const { createUser, updateUserProfile, logOut } = useAuth()

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password

        if (data.password !== data.confirm) {
            return setError("Your password did't match.")
        }

        setError(" ")
        setSuccess(" ")
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(result => {
                        console.log(result);
                    })
                    .catch((error) => console.log(error))
                reset()
                setSuccess("Your account successfully created.Thank you.")
                logOut()
            })
            .catch(error => {
                setError(error.message);
            })
    };



    return (
        <div className="hero h-[130vh] " style={{ backgroundImage: `url(${regImg})` }}>
            <Helmet>
                <title>Photograph Space | Registration</title>
            </Helmet>
            <div className="card bg-base-100 my-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-3xl font-bold text-center font-serif">Registration now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")}
                            name="name" placeholder="Name" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")}
                            placeholder="Email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="photo" {...register("photo")}
                            placeholder="Photo url" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",
                            { minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })}
                            placeholder="Password" required className="input input-bordered" />
                        {errors.password?.type === 'minLength' &&
                            <p className="text-red-600 text-sm">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm ">
                            Password must have one Uppercase case <br />
                            and one special character.</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" {...register("confirm")}
                            placeholder="Confirm Password"
                            required className="input input-bordered" />
                        {
                            errors.password !== errors.confirm &&
                            <p className="text-red-600 text-sm">Your password did't match.</p>
                        }

                    </div>

                    <span className="label-text font-semibold text-red-600">{error}</span>
                    <span className="label-text font-semibold text-sky-700">{success}</span>
                    <div className="form-control mt-6">
                        <button className="btn bg-sky-700 text-white border-0">Registration</button>
                    </div>
                    <p className='text-center font-semibold text-sky-700'><small>
                        Already have an account
                        <Link to="/login" className='font-bold'> Login</Link></small></p>
                    <div className='divider'></div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Registration;