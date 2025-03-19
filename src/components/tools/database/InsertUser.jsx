import { supabase } from "../../../supabaseClient";

const insertUser = async (username, email, password, user_type) => {
  try {
    const { error } = await supabase.from("userInfo").insert([
      { username, email, password, user_type } // ✅ Matches Supabase column names
    ]);

    if (error) throw error;
    console.log("User inserted successfully!");
    alert("Account Created Successfully!");
  } catch (error) {
    console.error("Error inserting user:", error.message);
    alert("Error creating account: " + error.message);
  }
};

export default insertUser;
