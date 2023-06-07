import React from 'react';
import ActiveLink from './ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import logo from "../../../assets/icon.png"

const NavBar = () => {
    const routeItem = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="instructors">Instructors</ActiveLink></li>
        <li><ActiveLink to="classes">Classes</ActiveLink></li>
        <li><ActiveLink to="dashboard">Dashboard</ActiveLink></li>
    </>


    // const { user, logOut } = useContext(AuthContext)

    const user = "ASIF"

    const handleLogOut = () => {
        /* logOut()
            .then()
            .catch(error => console.log(error)) */
        console.log("asif");
    }



    return (
        <div className="navbar bg-sky-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {routeItem}
                    </ul>
                </div>
                <Link to="/" className='flex items-center gap-2'>
                    <img className='w-8 h-8 hidden lg:block' src={logo} alt="" />
                    <span className='text-white tracking-widest text-2xl hidden lg:block
                     font-serif font-semibold'>Photography Space</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-10 px-1">
                    {routeItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div className="tooltip tooltip-left" data-tip={user.displayName}>
                    <img className='w-12 h-12 p-2 rounded-full' src={user.photoURL} />
                </div>}


                {user ?
                    <button onClick={handleLogOut} className='btn btn-outline text-white'>Logout</button> :
                    <Link to="/login">
                        <button className='btn btn-outline text-white'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;