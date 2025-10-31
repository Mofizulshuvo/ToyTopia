import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import AuthContext from "../Contex/AuthContext";    

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname} replace />;
    }

    return children;
};

export default PrivateRoutes;
