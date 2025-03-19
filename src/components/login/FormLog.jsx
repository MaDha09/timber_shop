import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginUser from "../tools/database/LoginUser";

function FormLog() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await LoginUser(username, password, navigate);
  };

  return (
    <div className="form_log">
      <form className="form_container" onSubmit={handleLogin}>
        <div className="input">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="button mb-5" type="submit">Login</button>

        <p>Don't have an account yet? <a href="">Click Here!</a></p>
      </form>
    </div>
  );
}

export default FormLog;
