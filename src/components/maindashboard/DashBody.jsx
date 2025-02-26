import React, { useState } from "react";
import wood1 from '../../assets/image/wood1.jpg';
import Slider from "../../js/Slider";
import DailyDiscover from "./DailyDiscover";
import DailyDiscover2 from "./DailyDiscover2";

function ItemsDisplay({ category, onBack }) {

        const items = Array.from({ length: 20 }, (_, i) => `Card ${i + 1}`);

    return (
        <div className="items-display">
               
            <div className="back">
                <button onClick={onBack} className="btn btn-secondary">Back</button>
            </div>
            
            <h2>{category}</h2>

            <div className="item-body" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '10px',
                padding: '20px',
                maxHeight: '400px'
            }}>
                {items.map((item, index) => (
                    <div key={index} className="cardbox" style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '20px',
                        background: '#f9f9f9',
                        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        minHeight: '200px'      
                    }}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

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
