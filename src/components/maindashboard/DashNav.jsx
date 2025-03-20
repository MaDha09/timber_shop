import React, { useState } from "react";
import logo from "../../assets/image/logo2.png";
import search from "../../assets/image/search.svg";
import cart from "../../assets/image/cart4.svg";
import ProfileModal from "./modals/ProfileModal";
import OrdersModal from "./modals/OrdersModal";
import AboutModal from "./modals/AboutModal";
import HelpModal from "./modals/HelpModal";

function DashNav() {
        const [modalContent, setModalContent] = useState(null);

        // ✅ Mapping modal names to components
        const modals = {
            "Profile": <ProfileModal />,
            "My Orders": <OrdersModal />,
            "About Us": <AboutModal />,
            "Help": <HelpModal />
        };
    
        const openModal = (title) => {
            setModalContent(modals[title]);
        };
    
        const closeModal = () => {
            setModalContent(null);
        };

    return (
        <>
            <div className={`nav_body ${modalContent ? "blurred" : ""}`}>
            <div className="nav_col1">
                    <ul>
                        <li onClick={() => openModal("Profile")}>Profile</li>
                        <li onClick={() => openModal("My Orders")}>My Orders</li>
                        <li onClick={() => openModal("About Us")}>About Us</li>
                        <li onClick={() => openModal("Help")}>Help</li>
                    </ul>
                </div>

                <div className="nav_col2">
                    <div className="logo row2col1 col-1">
                        <img src={logo} alt="Logo" />
                    </div>

                    <div className="shop_name row2col2 col-1">
                        <p className="timber">Timber</p>
                        <p className="shop">Shoppe</p>
                    </div>

                    <div className="search_bar row2col3 col-8">
                        <input type="text" />
                        <button>
                            <img src={search} alt="Search" />
                        </button>
                    </div>

                    <div className="cart row2col4 col-2">
                        <img src={cart} alt="Cart" />
                    </div>
                </div>
            </div>

            {/* Modal */}
            {modalContent && (
                <div className="modal_overlay" onClick={closeModal}>
                    <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal} className="modal-button">❌</button>
                        {modalContent} {/* Render the selected modal component */}
                    </div>
                </div>
            )}
        </>
    );
}

export default DashNav;
