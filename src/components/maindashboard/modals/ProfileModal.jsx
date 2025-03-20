import React, { useState } from "react";
import logo from "../../../assets/image/logo_white.png";
import ming from "../../../assets/image/ming.jpg";
import Sidebar from "./Sidebar";
import Account from "./pages/Account";
import Logout from "./pages/Logout";
import Orders from "./pages/Orders";
import Sales from "./pages/Sales";

const ProfileModal = () => {


    const [selectedTab, setSelectedTab] = useState("account"); // Default tab

    return (
        <>
            <div className="modal_nav">
                <div className="modal_logo">
                    <img src={logo} className="ms-3" />
                </div>
            </div>
            <div className="modal_body">
                <div className="modal_col1">
                    <div className="profile_con">
                        <div className="profile_img">
                            <img src={ming} />
                        </div>
                    </div>
                    <Sidebar onSelect={setSelectedTab} selectedTab={selectedTab} />
                </div>
                <div className="modal_col2">
                {selectedTab === "account" && <Account />}
                {selectedTab === "orders" && <Orders />}
                {selectedTab === "sales" && <Sales />}
                {selectedTab === "logout" && <Logout />}
                </div>
            </div>
        </>
    );
};

export default ProfileModal;
