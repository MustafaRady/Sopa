// Login.js

import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/User/UserActions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {userInfo} = useSelector(state=>state.User)
  const navigate = useNavigate();
  const dispatch= useDispatch();

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button clicked');
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add authentication logic here
    dispatch(login({username,password},{navigate}))
  };

  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
