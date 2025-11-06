import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from "../Contex/AuthContext";    
import Loader from './Loader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader/>;
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname} replace />;
    }

    return children;
};

export default PrivateRoutes;
