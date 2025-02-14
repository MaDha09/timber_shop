import React from "react";
import '../css/logIn.css';
import logo from '../assets/image/logo2.png';
import NavbarIn from "../components/login/NavbarIn";
import FormLog from "../components/login/FormLog";

function Login(){

    return(
            <>

                <div className="login_body">
                    <NavbarIn showLogBtn={true}/>

                    <div className="login_colbody">
                        <div className="login_col1">

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
                        <div className="login_col2">
                            <FormLog />
                        </div>
                    </div>

                </div>

            </>
    )

}

export default Login;