import React from 'react';
import ActiveLink from './ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const routeItem = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="instructors">Instructors</ActiveLink></li>
        <li><ActiveLink to="classes">Classes</ActiveLink></li>
        <li><ActiveLink to="dashboard">Dashboard</ActiveLink></li>
    </>




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
                <Link to="/" >
                    <span className='text-white tracking-widest text-2xl
                     font-serif font-semibold'>Photography Space</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-10 px-1">
                    {routeItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;