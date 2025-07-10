import React, { useState } from 'react';
import '../style/login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="login-container">
            <div className="login-box">
                <h2>Login to Your Account</h2>
                <form className="login-form">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@example.com" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="password-wrap">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
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

                    <div className="form-footer">
                        <a href="#" className="forgot-link">Forgot Password?</a>
                    </div>

                    <button type="submit" className="login-btns">Login</button>

                    <div className="divider">OR</div>

                    <button type="button" className="google-btn">
                        <img src="/logos/google.png" alt="Google" />
                        Sign in with Google
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;
