import React, { useState } from 'react';
import '../style/signup.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="signup-container">
            <div className="signup-box">
                <h2>Create Your Account</h2>
                <form className="signup-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@example.com" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="password-wrap">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Create a password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="toggle-password"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <div className="checkbox-group">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">I agree to the <a href="#">Terms & Conditions</a></label>
                    </div>

                    <button type="submit" className="signup-btn">Sign Up</button>

                    <div className="divider">OR</div>

                    <button type="button" className="google-btn">
                        <img src="/logos/google.png" alt="Google" />
                        Sign up with Google
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Signup;
