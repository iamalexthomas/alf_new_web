import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import banner7 from "/assets/img/banner/7.jpg";
import logoMixLight from '/assets/img/logo-light.png';
import { Link } from "react-router-dom";

const LoginContent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/login",
                { email, password },
                {
                    withCredentials: true, // For cookies if you're using them
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            toast.success("Login Successful");
            console.log("Login response:", response.data);
            
            // Handle successful login (redirect, store token, etc.)
            // Example: window.location.href = '/dashboard';
            
        } catch (error: any) {
            console.error("Login error:", error);
            const errorMessage = error.response?.data?.error || "Login failed";
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-area default-padding">
            <div className="container">
                <div className="login-items">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login-thumb">
                                <img src={banner7} alt="Login" />
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logoMixLight} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-forms">
                                <h2>Welcome back</h2>
                                <p>Enter your email and password to continue</p>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    placeholder="Email*" 
                                                    type="email" 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    autoComplete="off" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    placeholder="Password*" 
                                                    type="password" 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    autoComplete="off" 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button type="submit" disabled={isLoading}>
                                                {isLoading ? 'Logging in...' : 'Login'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <div className="login-alternative">
                                    <h4>Or Login With</h4>
                                    <ul>
                                        <li>
                                            <Link to="#"><i className="fab fa-google" /> Google</Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-facebook-f" /> Facebook</Link>
                                        </li>
                                    </ul>
                                    <p>
                                        Don't have an account? <Link to="/register">Register Now</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginContent;