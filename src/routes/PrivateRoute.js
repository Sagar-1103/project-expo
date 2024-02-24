import React from 'react'
import  useAuth  from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    // const user = "Sagar";
    if (!user) {
        return <Navigate to="/signup" replace={true} />
    }
    return children;
}

export default PrivateRoute;