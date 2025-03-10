import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/auth.css";
import "../../assets/vendor/bootstrap/css/bootstrap.min.css";
const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    return (
        <div class="wrapper">
            <div class="auth-content">
                <div class="card">
                    <div class="card-body text-center">
                            <h6 class="mb-4 text-muted">Login to your account</h6>
                            <form action="" method="">
                                <div class="mb-3 text-start">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" placeholder="Enter your email" required/>
                                </div>
                                <div class="mb-3 text-start">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder="Enter your password" required/>
                                </div>
                                <div class="mb-3 text-start">
                                    <div class="form-check">
                                    <input class="form-check-input" name="remember" type="checkbox" value="" id="check1"/>
                                    <label class="form-check-label" for="check1">
                                        Remember me on this device
                                    </label>
                                    </div>
                                </div>
                                <button class="btn btn-primary mb-4">Login</button>
                            </form>
                        <p class="mb-2 text-muted">Forgot password? <a href="forgot-password.html">Reset</a></p>
                        <p class="mb-0 text-muted">Don't have account yet? <a href="signup.html">Signup</a></p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AdminLogin;
