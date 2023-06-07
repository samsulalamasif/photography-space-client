import regImg from "../../../assets/registration.jpg"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';

const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

    };



    return (
        <div className="hero h-[120vh] " style={{ backgroundImage: `url(${regImg})` }}>
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
                        <input type="password" {...register("confirm",
                            { minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })}
                            placeholder="Confirm Password" required className="input input-bordered" />
                        {/* {errors.confirm?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.confirm?.type === 'pattern' && <p className="text-red-600 text-sm ">
                            Password must have one Uppercase case <br />
                            and one special character.</p>} */}
                        {
                            errors.password !== errors.confirm &&
                            <p className="text-red-600 text-sm">Your password did't match.</p>
                        }
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-sky-700 border-0">Registration</button>
                    </div>
                    <div className='divide'></div>
                    <p className='text-center font-semibold text-sky-700'><small>
                        Already have an account
                        <Link to="/login" className='font-bold'> Login</Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;