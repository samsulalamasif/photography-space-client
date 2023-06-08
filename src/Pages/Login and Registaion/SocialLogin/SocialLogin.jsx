import React from 'react';
import useAuth from '../../../components/Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const savedUser = {
                    name: loggedInUser.displayName, email: loggedInUser.email,
                    photo: loggedInUser.photoURL
                }
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Sing in with Google Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true })
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }






    return (

        <div className="w-full text-center">
            <p onClick={handleGoogle}>
                <img className='w-64 h-16 rounded-2xl cursor-pointer'
                    src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png" alt="" />
            </p>
        </div>

    );
};

export default SocialLogin;