import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/css/auth.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/AuthContext";
import React, { useState, useContext } from "react";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext); // ✅ Move this outside handleLogin

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5001/api/admin/login", { email, password });
            toast.success("Login successful!", { position: "top-right" });

            const fakeToken = "123456"; // Simulate a JWT token
            localStorage.setItem("token", fakeToken);
            setUser({ token: fakeToken }); // ✅ Update auth state
            navigate("/admin/dashboard", { replace: true }); 
        } catch (error) {
            toast.error(error.response?.data?.message || "Login error!", { position: "top-right" });
        }
    };

    return (
        <div className="wrapper">
            <div className="auth-content">
                <div className="card">
                    <div className="card-body text-center">
                        <h6 className="mb-4 text-muted">Login to your account</h6>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3 text-start">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3 text-start">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="mb-3 text-start">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="check1"/>
                                    <label className="form-check-label" htmlFor="check1">
                                        Remember me on this device
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mb-4">Login</button>
                        </form>
                        <p className="mb-2 text-muted">Forgot password? <a href="forgot-password.html">Reset</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
