import React, { useState } from "react";
import { supabase } from "../../../../supabaseClient";
import { getUserSession } from "../../../tools/session/SessionHandler";

const UpdateForm = ({ accountData, onClose, refreshAccount }) => {
    const [firstName, setFirstName] = useState(accountData.firstname || "");
    const [lastName, setLastName] = useState(accountData.lastname || "");
    const [address, setAddress] = useState(accountData.address || "");
    const [email, setEmail] = useState(accountData.email || "");
    const [phone, setPhone] = useState(accountData.contact_no || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const session = getUserSession();

        if (!session || !session.email || !session.username) {
            alert("User session not found.");
            return;
        }

        const { email: sessionEmail, username } = session;

        const { error } = await supabase
            .from("userInfo") // adjust if your table name is different
            .update({
                firstname: firstName,
                lastname: lastName,
                address: address,
                email: email,
                contact_no: phone,
            })
            .eq("username", username)
            .eq("email", sessionEmail);

        if (error) {
            console.error("Update error:", error.message);
            alert("Failed to update.");
        } else {
            alert("Updated successfully!");
            refreshAccount(); // refresh data in parent
            onClose(); // close modal
        }
    };

    return (
        <>
            <div>
                <button onClick={onClose}>❌</button>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div className="update_body"> 
                    <div className="update_form">
                        <label>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="update_form">
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="update_form">
                        <label>Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div className="update_form">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="update_form">
                        <label>Phone #</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">Update</button>

                </div>
                </form>
            </div>
        </>
    );
};

export default UpdateForm;



