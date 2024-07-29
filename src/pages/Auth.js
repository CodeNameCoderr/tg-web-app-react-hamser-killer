import React from "react";
import { useLocation } from 'react-router-dom';
import loadingScreen from "../img/loading-screen.png";
import "./Auth.css";
import { Navigate } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";


const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    
    return (
        <div className="main_block">
        <img src={loadingScreen} alt="playIcon" className="auth_load_screen" />
        </div>
    );

};
//<Navigate to={REGISTRATION_ROUTE} replace={true} />

export default Auth;