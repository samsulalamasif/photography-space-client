import React from 'react';
import useAuth from '../components/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../components/Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress progress-info w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute