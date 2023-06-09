import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import ActiveLink from '../Pages/Shared/NavBar/ActiveLink/ActiveLink';
import { FaHome, FaTasks, } from "react-icons/fa";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { BsDatabaseFillAdd } from "react-icons/bs";

const Dashboard = () => {
    const isAdmin = true
    const isInstructor = true


    return (
        <div>
            <Helmet>
                <title>Photograph Space | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open lg:w-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 h-full  bg-sky-700">

                        {/* Admin  */}

                        {
                            isAdmin ?
                                <>
                                    <li><ActiveLink to="/dashboard/allusers"><HiUserGroup>
                                    </HiUserGroup>Manage Users</ActiveLink></li>

                                    <li><ActiveLink to="/dashboard/allclasses">
                                        <FaTasks></FaTasks>Manage Classes</ActiveLink></li>
                                </> :
                                <>
                                    <li><ActiveLink to="/dashboard/myclass">
                                        <BiSelectMultiple></BiSelectMultiple>
                                        My Selected Classes</ActiveLink></li>

                                    <li><ActiveLink to="/dashboard/payment">
                                        <MdPayment></MdPayment>Payment</ActiveLink></li>

                                    <li><ActiveLink to="/dashboard/enrolledclass">
                                        <IoCheckmarkDoneCircleOutline></IoCheckmarkDoneCircleOutline>
                                        My Enrolled Classes</ActiveLink></li>
                                </>

                        }



                        {/* Instructor */}


                        {/*  {
                            isInstructor ?
                                <>
                                    <li><ActiveLink to="/dashboard/addclass">
                                        <BsDatabaseFillAdd></BsDatabaseFillAdd>
                                        Add a Class</ActiveLink></li>

                                    <li><ActiveLink to="/dashboard/myclasses">
                                        <MdPlaylistAddCheckCircle></MdPlaylistAddCheckCircle>
                                        My Classes</ActiveLink></li>
                                </> :

                                <>
                                    <li><ActiveLink to="/dashboard/myclass">
                                        <BiSelectMultiple></BiSelectMultiple>
                                        My Selected Classes</ActiveLink></li>

                                    <li><ActiveLink to="/dashboard/payment">
                                        <MdPayment></MdPayment>Payment</ActiveLink></li>

                                    <li><ActiveLink to="/dashboard/enrolledclass">
                                        <IoCheckmarkDoneCircleOutline></IoCheckmarkDoneCircleOutline>
                                        My Enrolled Classes</ActiveLink></li>
                                </>
                        } */}


                        <div className='w-72 my-10 border-b-2 border-white mx-auto'></div>

                        <li><ActiveLink to="/"><FaHome ></FaHome>Home</ActiveLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;