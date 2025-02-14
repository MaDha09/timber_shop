import React from "react";
import DashNav from "../components/maindashboard/DashNav";
import DashBody from "../components/maindashboard/DashBody";
import '../css/maindash.css';

function MainDashboard(){
        return(
            <>

                <div className="main_dash">

                        <DashNav />
                        <DashBody />
                </div>

            </>
        )
}

export default MainDashboard;