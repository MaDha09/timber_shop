import React, { useState } from "react";
import "../../css/signup.css";
import insertUser from "../tools/database/InsertUser";

function Signform() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    user_type: "seller", 
  });

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    await insertUser(formData.username, formData.email, formData.password, formData.user_type);
    alert("Account Created Successfully!");
    setFormData({ username: "", email: "", password: "", user_type: "seller" }); 
  };

  return (
    <div className="form_log">
      <form className="form_container" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username..."
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password..."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input">
          <select name="user_type" id="user" className="select" value={formData.user_type} onChange={handleChange}>
            <option value="seller">Seller</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>

        <button className="button mb-5" type="submit">Create Account</button>

        <p>Already have an account? <a href="#">Click Here!</a></p>
      </form>
    </div>
  );
}

export default Signform;
