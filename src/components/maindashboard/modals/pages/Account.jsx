import React, { useState, useEffect } from "react";
import { supabase } from '../../../../supabaseClient';
import { getUserSession } from "../../../tools/session/SessionHandler";

import UpdateForm from "./UpdateForm";

const Account = () => {
  const [accountData, setAccountData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAccount = async () => {
      const session = getUserSession();

      if (!session) {
        console.error("No user session found.");
        setLoading(false);
        return;
      }

      const { username, email } = session;

      const { data, error } = await supabase
        .from("userInfo") // make sure your table is named "users"
        .select("*")
        .eq("username", username)
        .eq("email", email)
        .single(); // expects only one row

      if (error) {
        console.error("Error fetching user data:", error);
      } else {
        setAccountData(data);
      }

      setLoading(false);
    };

    fetchAccount();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="accmod">
      <h2>Account Information</h2>
      <div className="accmod_body">
      {accountData ? (
       <>
          <p><strong>Name:</strong> {accountData.firstname || "No data"} {accountData.lastname}</p>
          <p><strong>Email:</strong> {accountData.email || "No data"}</p>
          <p><strong>Address:</strong> {accountData.address || "No data"}</p>
          <p><strong>Contact no:</strong> {accountData.contact_no || "No data"}</p>
          <p><strong>User Type:</strong> {(accountData.user_type || "No data").toUpperCase()}</p>
          </>
      ) : (
        <p>No account data found.</p>
      )}
      </div>
      <div className="update_acc">
        <button onClick={() => setShowModal(true)}>Update Acc</button>
      </div>

      {showModal && (
        <div className="update_modal_overlay" onClick={() => setShowModal(false)}>
          <div className="update_modal_content" onClick={(e) => e.stopPropagation()}>
            <UpdateForm
              accountData={accountData}
              onClose={() => setShowModal(false)}
              refreshAccount={() => window.location.reload()} // optional refresh
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
