import React from 'react';
import "./ActiveLink.css"
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, }) => isActive ? "Active" : "noActive"}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;