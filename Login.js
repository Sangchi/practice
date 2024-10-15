import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import TextField from '@mui/material/TextField';
import { signupLoginApiCall } from "../Services/apiService";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,  
      password,
    };

    try {

      const response = await signupLoginApiCall(userData, "login/");
    
      setSuccess('Login successful!');
      setError('');
      navigate('/Dashboard');

    } catch (error) {
      setError('Login failed: ' + (error.response?.data?.error || 'Unknown error'));
      setSuccess('');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Fundo</h1>
        <h2>Sign in</h2>
        <p>Use your Fundo Account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a className="forgot-password" href="#">
            Forgot password?
          </a>

          <div className="actions">
            <p
              className="create-account"
              onClick={() => navigate("/signup")}
            >
              Create account
            </p>
            <button type="submit">Login</button>
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
