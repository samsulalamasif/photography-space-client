import React from 'react';
import loginImg from "../../../assets/login.jpg"
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

    };

    return (
        <div className="hero h-[100vh]" style={{ backgroundImage: `url(${loginImg})` }}>

            <div className="card bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <h1 className="text-3xl text-center font-bold font-serif">Login now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")}
                            placeholder="Email" required className="input input-bordered" />
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
                    <div className="form-control mt-6">
                        <button className="btn bg-sky-700 border-0">Login</button>
                    </div>
                    <p className='text-center font-semibold text-sky-700'><small>
                        New Here?
                        <Link to="/registration" className='font-bold'> Create an account</Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default Login;