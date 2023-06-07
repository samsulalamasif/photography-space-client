import errorImg from "../../assets/error.jpg"
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {

    const { error, status } = useRouteError();
    return (
        <div className='h-max'>
            <div className="hero h-[100vh]" style={{ backgroundImage: `url(${errorImg})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className='text-white text-2xl mb-5 font-bold'>
                            Page Not Found...... <br />
                            {error?.message}</h1>
                        <Link to="/"> <button className='btn bg-cyan-400 border-0'>Back to homepage</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;