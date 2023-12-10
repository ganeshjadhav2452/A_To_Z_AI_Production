import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateRoutes = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('authToken');

        if (!isLoggedIn || isLoggedIn === 'null') {
            navigate('/login');
        }
    }, [navigate]);

    return <Outlet />;
};

export default PrivateRoutes;
