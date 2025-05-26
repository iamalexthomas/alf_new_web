import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logoMixLight from '/assets/img/logo-light.png';
import banner7 from '/assets/img/banner/7.jpg';
import { toast } from 'react-toastify';

const RegisterContent = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords don't match");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:3000/api/auth/register",
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            toast.success("Registration successful!");
            console.log("Registration response:", response.data);
            
            // Redirect to login or dashboard
            // window.location.href = '/login';
            
        } catch (error: any) {
            console.error("Registration error:", error);
            const errorMessage = error.response?.data?.error || "Registration failed";
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
                                <img src={banner7} alt="Register" />
                                <div className="logo">
                                    <Link to="/">
                                        <img src={logoMixLight} alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login-forms">
                                <h2>Create an account</h2>
                                <p>Enter your details to create a new account</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input 
                                                    className="form-control" 
                                                    placeholder="Name*" 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    autoComplete='off' 
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
                                                    placeholder="Email*" 
                                                    type="email" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    autoComplete='off' 
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
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    autoComplete='off' 
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
                                                    placeholder="Confirm Password*" 
                                                    type="password" 
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    autoComplete='off' 
                                                    required 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button type="submit" disabled={isLoading}>
                                                {isLoading ? 'Registering...' : 'Register'}
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div className="login-alternative">
                                    <h4>Or Register With</h4>
                                    <ul>
                                        <li>
                                            <Link to="#"><i className="fab fa-google" /> Google</Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i className="fab fa-facebook-f" /> Facebook</Link>
                                        </li>
                                    </ul>
                                    <p>
                                        Already have an account? <Link to="/login">Login Now</Link>
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

export default RegisterContent;