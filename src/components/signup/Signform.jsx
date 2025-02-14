import React from "react";
import '../../css/signup.css';

function Signform(){

    return(
        <>
            <div className="form_log">

                    <form className="form_container">

                                <div className="input">
                                    <input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name..."
                                    required
                                    />
                                </div>

                                <div className="input">
                                    <input type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username..."
                                    required
                                    />
                                </div>

                                <div className="input">
                                    <input type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email..."
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

                                <button className="button mb-5">Create Account</button>

                                <p>Already have an acc ? <a href="">Click Here!</a> </p>
                           

                    </form>

            </div>
        </>
    )
}

export default Signform;