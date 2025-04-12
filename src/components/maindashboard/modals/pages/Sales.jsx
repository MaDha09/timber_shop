import React, { useState, useEffect } from "react";
import { supabase } from '../../../../supabaseClient';
import { getUserSession } from "../../../tools/session/SessionHandler";
import wood from '../../../../assets/image/wood2.jpg';
import AddItem from "./AddItem";

const Sales = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="item_card">
                <div className="card">
                    <img src={wood} alt="item" />
                    <div className="card-body">
                        <h6 className="card-title">Item Name</h6>
                        <p className="card-text">Description</p>
                        <button className="add_item" onClick={() => setShowModal(true)}>
                            Add Item
                        </button>
                    </div>
                </div>
            </div>

            {showModal && <AddItem onClose={() => setShowModal(false)} />}
        </>
    );
};

export default Sales;