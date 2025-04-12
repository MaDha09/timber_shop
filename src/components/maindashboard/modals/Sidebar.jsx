import React from "react";

const Sidebar = ({ onSelect, selectedTab }) => {
    return (
        <ul className="modal_menu">
            <li
                className={selectedTab === "account" ? "active" : ""}
                onClick={() => onSelect("account")}
            >
                Account Information
            </li>
            <li
                className={selectedTab === "sales" ? "active" : ""}
                onClick={() => onSelect("sales")}
            >
                Sales
            </li>
            <li
                className={selectedTab === "orders" ? "active" : ""}
                onClick={() => onSelect("orders")}
            >
                Orders
            </li>
            <li
                className={selectedTab === "logout" ? "active" : ""}
                onClick={() => onSelect("logout")}
            >
                Logout
            </li>
        </ul>
    );
};

export default Sidebar;
