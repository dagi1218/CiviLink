import React, { useState } from 'react';
import '../../styles/common/Login.css';
import GoogleSvg from '../../assets/uil--google.svg';

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        user: '',
        loginPassword: '',
        signupPassword: '',
        confirmPassword: '',
        idPhoto: null
    });
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleInputChange = (e) => {
        const { id, value, files } = e.target;
        
        if (id === 'idphoto' && files.length > 0) {
            setFormData(prev => ({ ...prev, idPhoto: files[0] }));
            setFileName(files[0].name);
        } else {
            setFormData(prev => ({ ...prev, [id]: value }));
        }
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            setFormData(prev => ({ ...prev, idPhoto: file }));
            setFileName(file.name);
        }
    };

    const handleFileClick = () => {
        document.getElementById('idphoto').click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', {
            user: formData.user,
            password: formData.loginPassword
        });
        // Add your login logic here
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        console.log('Signup attempt:', formData);
        // Add your signup logic here
    };

    const handleGoogleAuth = () => {
        console.log('Google authentication clicked');
        // Add Google authentication logic here
    };

    return (
        <div className="login-container">
        <section className="login-signup">
            <div className="switch-btn">
                <button 
                    id="log-btn" 
                    className={isLogin ? 'active' : ''}
                    onClick={() => setIsLogin(true)}
                >
                    Login
                </button>
                <button 
                    id="sign-btn" 
                    className={!isLogin ? 'active' : ''}
                    onClick={() => setIsLogin(false)}
                >
                    Sign Up
                </button>
            </div>

            <div className="form-container">
                {/* Login Form */}
                <form 
                    className={`login-form ${!isLogin ? 'hidden' : ''}`}
                    onSubmit={handleLoginSubmit}
                >
                    <div className="welcome-text">
                        <h1>Welcome Back!</h1>
                        <span>Sign in to continue</span>
                    </div>

                    <div className="data">
                        <label htmlFor="user">Username or Email</label>
                        <input 
                            type="text" 
                            id="user" 
                            placeholder="Enter your username or email"
                            value={formData.user}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="data">
                        <label htmlFor="login-password">Password</label>
                        <div className="password-container">
                            <input 
                                type={showLoginPassword ? "text" : "password"} 
                                id="login-password" 
                                placeholder="Enter your password"
                                value={formData.loginPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <button 
                                type="button" 
                                className="password-toggle" 
                                onClick={() => setShowLoginPassword(!showLoginPassword)}
                            >
                                <i className={`far fa-eye${showLoginPassword ? '-slash' : ''}`}></i>
                            </button>
                        </div>
                    </div>

                    <a href="#" id="forgot">Forgot Password?</a>

                    <div className="form-foot">
                        <button className="form-btn" type="submit">Login</button>
                        <span>OR CONTINUE WITH</span>
                        <button 
                            className="google-btn" 
                            type="button"
                            onClick={handleGoogleAuth}
                        >
                            <img 
                                src={GoogleSvg}
                                style={{ backgroundColor: '#333' }} 
                                alt="google-logo"
                            />
                            Log in with Google
                        </button>
                    </div>
                </form>

                {/* Sign Up Form */}
                <form 
                    className={`signup-form ${isLogin ? 'hidden' : ''}`}
                    onSubmit={handleSignupSubmit}
                >
                    <div className="welcome-text">
                        <h1>Create Your Account</h1>
                        <span>Sign up to access all CiviLink Services</span>
                    </div>

                    <div className="data">
                        <label htmlFor="name">Full Name</label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="data">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    
                    <div className="data">
                        <label htmlFor="signup-password">Password</label>
                        <div className="password-container">
                            <input 
                                type={showSignupPassword ? "text" : "password"} 
                                id="signup-password" 
                                placeholder="Enter your password"
                                value={formData.signupPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <button 
                                type="button" 
                                className="password-toggle" 
                                onClick={() => setShowSignupPassword(!showSignupPassword)}
                            >
                                <i className={`far fa-eye${showSignupPassword ? '-slash' : ''}`}></i>
                            </button>
                        </div>
                    </div>

                    <div className="data">
                        <label htmlFor="confirm">Confirm Password</label>
                        <div className="password-container">
                            <input 
                                type={showConfirmPassword ? "text" : "password"} 
                                id="confirm" 
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <button 
                                type="button" 
                                className="password-toggle" 
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <i className={`far fa-eye${showConfirmPassword ? '-slash' : ''}`}></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className="data">
                        <label htmlFor="idphoto">Upload ID photo (Optional)</label>
                        <div 
                            className="filedrop" 
                            id="file-drop-area"
                            onClick={handleFileClick}
                            onDrop={handleFileDrop}
                            onDragOver={handleDragOver}
                        >
                            <div className="file-upload-icon">
                                <i className="fas fa-cloud-upload-alt"></i>
                            </div>
                            <p>Drag & Drop your ID photo here, or click to browse</p>
                            <small>Max file size: 5MB</small>
                            {fileName && (
                                <div className="file-name" id="file-name-display">
                                    {fileName}
                                </div>
                            )}
                            <input 
                                type="file" 
                                id="idphoto" 
                                accept="image/*" 
                                style={{ display: 'none' }}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="form-foot">
                        <button className="form-btn" type="submit">Create Account</button>
                        <span>OR CONTINUE WITH</span>
                        <button 
                            className="google-btn" 
                            type="button"
                            onClick={handleGoogleAuth}
                        >
                            <img 
                                src={GoogleSvg}
                                style={{ backgroundColor: '#333' }} 
                                alt="google-logo"
                            />
                            Sign up with Google
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </div>
    );
}

export default Login;