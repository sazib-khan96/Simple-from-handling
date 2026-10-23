import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <NavLink to='/'>Dash Board</NavLink>
            <NavLink to='/upload'>Upload</NavLink>
            <NavLink to='/posts'>Posts</NavLink>  
        </div>
    );
};

export default Header;