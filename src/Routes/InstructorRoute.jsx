import React from 'react';
import useAuth from '../components/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../components/Hooks/useInstructor';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <progress className="progress progress-info w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};
export default InstructorRoute