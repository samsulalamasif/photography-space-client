import React from 'react';
import useAuth from '../components/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if (loading) {
        return <progress className="progress progress-info w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;