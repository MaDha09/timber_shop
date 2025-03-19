import { supabase } from "../../../supabaseClient";
import { setUserSession, getUserSession } from "../session/SessionHandler";

const LoginUser = async (username, email, navigate) => {
  try {
    const { data, error } = await supabase
      .from("userInfo")
      .select("username, email")
      .eq("username", username);

    if (error) throw error;

    if (data.length > 0) {
      console.log("Login Successful!");
      alert("Login Successful!");

      // Set session after successful login
      setUserSession(data[0].username, data[0].email);

      // Retrieve and log session
      const sessionData = getUserSession();
      console.log("Session Data:", sessionData);  // Logs session in console

      navigate("/maindashboard"); // Redirect to dashboard
    } else {
      alert("Invalid username. Please try again.");
    }
  } catch (err) {
    console.error("Login error:", err.message);
    alert("Login failed: " + err.message);
  }
};

export default LoginUser;
