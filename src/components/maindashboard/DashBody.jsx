import React from "react";
import wood1 from '../../assets/image/wood1.jpg';
import Slider from "../../js/Slider";

import DailyDiscover from "./DailyDiscover";
import DailyDiscover2 from "./DailyDiscover2";

function DashBody(){
        return(
            <>
                <div className="dashbody">

                    <div className="dashbody_row1">
                            <div className="row1_body">
                                    <Slider />
                            </div>
                    </div>

                    <div className="dashbody_row2">
                        <a href="#" className="choices btn col-2">Kitchen <br /> Ware</a>
                        <a href="#" className="choices c2 btn col-2">Furniture</a>
                        <a href="#" className="choices btn col-2">Decorative <br /> Items</a>
                        <a href="#" className="choices btn col-2">Toys and <br /> Games</a>
                        <a href="#" className="choices btn col-2">Musical <br /> Instrument</a>
                    </div>

                    <div className="dashbody_row3">

                        <div className="row3_col1 col-3">
                                <h3>DAILY <br />DISCOVER</h3>
                        </div>

                        <div className="row3_col2 col-4">
                                
                                <DailyDiscover />

                        </div>
                        <div className="row3_col3 col-4">
                                <DailyDiscover2 />
                        </div>

                    </div>

                </div>
            </>
        )
}

export default DashBody;