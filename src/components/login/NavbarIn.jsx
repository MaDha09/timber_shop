import React from "react";
import logo from '../../assets/image/logo.png';
import LogBtn from "./LogBtn";
import SignBtn from "../signup/SignBtn";

function NavbarIn({ showLogBtn }){

    return(
        <>

            <div className="navbar_body">

                <div className="logo">
                            <img src={logo}/>
                </div>

                <div className="logo_div">
                    <div className="txt_logo ms-5">
                        <p className="timber">Timber</p>
                        <p className="shop">Shoppe</p>
                </div>
                
            </div>
                {showLogBtn ? <LogBtn /> : <SignBtn />}
            </div>

        </>
    )

}

export default NavbarIn;