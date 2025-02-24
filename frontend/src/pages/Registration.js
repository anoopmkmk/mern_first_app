import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const [formData, setFormData] = useState({
    
    name: "",
    email: "",
  });

  //const [formData, setFormData] = useState({ name: "", email: "" });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/register", formData);
      console.log("Response:", response.data);
      toast.success("Registration Successful!", { position: "top-right" });

    // ✅ Redirect to Home Page after 2 seconds
      setTimeout(() => {
      navigate("/");
    }, 2000);
      setFormData({ name: "", email: "" }); // Clear form
    } catch (error) {
      toast.error("Registration Failes!", { position: "top-right" });

    // ✅ Redirect to Home Page after 2 seconds
    
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/">Go to Users Page</Link>
      </p>
    </div>
  );
}

export default Registration;
