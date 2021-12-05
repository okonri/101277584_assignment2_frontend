import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <NavLink to='/' className="navbar-brand">Employee Management App</NavLink>
        </nav>
    )
}

export default Navigation