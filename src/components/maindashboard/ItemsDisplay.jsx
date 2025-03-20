import React, { useState } from "react";


function ItemsDisplay({ category, onBack }) {

    const items = Array.from({ length: 20 }, (_, i) => `Card ${i + 1}`);

return (
    <div className="items-display" style={{
        paddingBottom: '50px' // Ensures space below the last row
    }}>
           
        <div className="back">
            <button onClick={onBack} className="btn btn-secondary">Back</button>
        </div>
        
        <h2 className="ms-3">{category}</h2>

        <div className="item-body" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '10px',
            padding: '20px',
            maxHeight: '400px',
            paddingBottom: '50px'
    
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

        <div style={{ height: '50px', gridColumn: 'span 5' }}></div>
        </div>

       
    </div>
);
}

export default ItemsDisplay;