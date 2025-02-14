import React from "react";
import wood1 from '../../assets/image/wood1.jpg';

function DashBody(){
        return(
            <>
                <div className="dashbody">

                    <div className="dashbody_row1">
                            <div className="row1_body">
                                    <div className="row1_col1 col-4">
                                            <img src={wood1}/>
                                    </div>
                                    <div className="row1_col2 col-4">

                                    </div>
                                    <div className="row1_col3 col-4">

                                    </div>
                            </div>
                    </div>

                    <div className="dashbody_row2">
                        
                    </div>

                    <div className="dashbody_row3">

                    </div>

                </div>
            </>
        )
}

export default DashBody;