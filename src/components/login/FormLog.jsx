import React from "react";
import '../../css/logIn.css';

function FormLog(){

    return(
        <>
            <div className="form_log">

                    <form className="form_container">

                                <div className="input">
                                    <input type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username..."
                                    required
                                    />
                                </div>

                                <div className="input">
                                    <input type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Password..."
                                    required
                                    />
                                </div>

                                <div className="input">
                                    <select name="user" id="user" className="select">
                                        <option value="seller">Seller</option>
                                        <option value="manufacturer">Manufacturer</option>
                                        <option value="buyer">Buyer</option>
                                    </select>
                                </div>

                                <button className="button mb-5">Login</button>

                                <p>Don't have an account yet ? <a href="">Click Here!</a> </p>
                           

                    </form>

            </div>
        </>
    )
}

export default FormLog;