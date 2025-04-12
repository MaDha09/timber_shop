import React, { useState } from "react";

const AddItem = ({ onClose }) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal_item" onClick={(e) => e.stopPropagation()}>
                <h3>Item Added</h3>
                <p>This item has been added to your cart.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default AddItem;