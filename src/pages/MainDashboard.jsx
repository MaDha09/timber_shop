import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserSession } from "../components/tools/session/SessionHandler";
import DashNav from "../components/maindashboard/DashNav";
import DashBody from "../components/maindashboard/DashBody";
import '../css/maindash.css';

function MainDashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const userSession = getUserSession();
        if (!userSession) {
            alert("You need to log in first!");
            navigate("/"); // Redirect to login page
        }
    }, [navigate]);

    return (
        <div className="main_dash">
            <DashNav />
            <DashBody />
        </div>
    );
}

export default MainDashboard;
