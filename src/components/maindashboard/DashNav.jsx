import React from "react";
import logo from '../../assets/image/logo2.png';
import search from '../../assets/image/search.svg';
import cart from '../../assets/image/cart4.svg';

function DashNav(){
        return(
            <>
                <div className="nav_body">

                        <div className="nav_col1">
                                <ul>
                                    <li>Profile</li>
                                    <li>My Orders</li>
                                    <li>About Us</li>
                                    <li>Help</li>
                                </ul>
                        </div>

                        <div className="nav_col2">
                                <div className="logo row2col1 col-1">
                                        <img src={logo}/>
                                </div>

                                <div className="shop_name row2col2 col-1">
                                    <p className="timber">Timber</p>
                                    <p className="shop">Shoppe</p>
                                </div>

                                <div className="search_bar row2col3 col-8">
                                        <input type="text" 
                                        name="" 
                                        id="" 
                                        />
                                        <button><img src={search}/></button>
                                </div>

                                <div className="cart row2col4 col-2">
                                        <img src={cart}/>
                                </div>
                        </div>

                </div>


            </>
        )
}

export default DashNav;