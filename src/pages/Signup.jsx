import React from "react";
import '../css/signup.css';
import logo from '../assets/image/logo2.png';
import NavbarIn from "../components/login/NavbarIn";
import Signform from "../components/signup/Signform";

function Signup(){

        return(
            <>
            <div className="signup">
                <NavbarIn showLogBtn={false}/>
                <div className="signup_body">
                    <div className="sign_col1">

                        <div className="img_con">
                            <img src={logo} />
                        </div>

                        <div className="txt_logo2">
                                <p className="timber">Timber</p>
                                <p className="shop">Shoppe</p>
                        </div>

                        <div className="theme mt-4">
                                <p><i>Make a Profit Out of Your Hobby</i></p>
                        </div>
                    </div>

                <div className="sign_col2">

                    <Signform />

                </div>
                
                </div>

            </div>
            </>
        )

}

export default Signup;