import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

const Landing = () => {
    return(
        <div>
            <h1> Welcome to my React app with Authentication </h1>
            <Link to="/login"> <button>Click here to Login</button> </Link>
        </div>
    )
}

export default Landing;