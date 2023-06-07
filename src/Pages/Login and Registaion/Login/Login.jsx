import React, { useState } from 'react';
import loginImg from "../../../assets/login.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import useAuth from '../../../components/Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const [error, setError] = useState("");
    const { signIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.email
        const password = data.password

        setError("")
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset()
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })

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
                        <input type="password" {...register("password")}
                            placeholder="Password" required className="input input-bordered" />
                        <label className="label">
                            <span className="label-text font-semibold text-red-600">{error}</span>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-sky-700 text-white border-0">Login</button>
                    </div>
                    <p className='text-center font-semibold text-sky-700'><small>
                        New Here?
                        <Link to="/registration" className='font-bold'> Create an account</Link></small></p>
                    <div className='divider'></div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;