import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserGraduate, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data
    })



    // Make Admin
    const makeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Congratulation! ${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })

    }




    // Make Instructor
    const makeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Congratulation! ${user.name} is a Instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }




    return (
        <div className='w-full'>
            <Helmet>
                <title>Photograph Space | Manage Users</title>
            </Helmet>
            <SectionTitle title={"Manage Users"}></SectionTitle>
            <h2 className='text-sky-700 font-semibold text-center font-serif text-5xl'>Total users: {users.length}</h2>
            <div>
                <div className="overflow-x-auto my-20 px-10">
                    <table className="table">
                        {/* head */}
                        <thead className='text-lg text-gray-700'>
                            <tr>
                                <th>
                                    No.
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full ring 
                                            ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user.photo} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-sky-700 text-lg font-serif
                                         font-bold'>{user.name}</p>
                                    </td>
                                    <td>
                                        <p className='font-semibold'>{user.email}</p>
                                    </td>
                                    <th>
                                        {
                                            user.role === "admin" ? "Admin" :
                                                <button onClick={() => makeAdmin(user)}
                                                    className='btn bg-sky-700 text-white 
                                        border-0 btn-md'><FaUserShield></FaUserShield></button>
                                        }

                                    </th>
                                    <th>
                                        {
                                            user.role === "instructor" ? "Instructor" :
                                                <button onClick={() => makeInstructor(user)}
                                                    className='btn bg-lime-600 text-white 
                                        border-0 btn-md'><FaUserGraduate></FaUserGraduate></button>
                                        }
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;