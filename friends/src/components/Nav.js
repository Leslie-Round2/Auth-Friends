import React from 'react';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    return(
        <>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/login"> Login </NavLink>
            <NavLink to="/protected"> Friends </NavLink>
        </> 
    )
}

export default Nav;