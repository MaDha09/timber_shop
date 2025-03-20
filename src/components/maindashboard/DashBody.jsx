import React, { useState } from "react";
import Slider from "../../js/Slider";
import DailyDiscover from "./DailyDiscover";
import DailyDiscover2 from "./DailyDiscover2";
import ItemsDisplay from "./ItemsDisplay";

function DashBody() {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const handleBackClick = () => {
        setActiveCategory(null);
    };

    if (activeCategory) {
        return <ItemsDisplay category={activeCategory} onBack={handleBackClick} />;
    }

    return (
        <div className="dashbody">
            <div className="dashbody_row1">
                <div className="row1_body">
                    <Slider />
                </div>
            </div>

            <div className="dashbody_row2">
                {["Kitchen Ware", "Furniture", "Decorative Items", "Toys and Games", "Musical Instrument"].map((category, index) => (
                    <button
                        key={index}
                        className="choices btn col-2"
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
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
    );
}

export default DashBody;
