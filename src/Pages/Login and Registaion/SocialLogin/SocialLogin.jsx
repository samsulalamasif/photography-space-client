import React from 'react';
import useAuth from '../../../components/Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (

        <div className="w-full text-center">
            <p onClick={handleGoogleSignIn}>
                <img className='w-64 h-16 rounded-2xl'
                    src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" />
            </p>
        </div>

    );
};

export default SocialLogin;