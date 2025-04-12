import { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('/auth/login', creds);
      localStorage.setItem('token', res.data.token);
      alert("Login successful");
      navigate('/');
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input placeholder="Username" onChange={e => setCreds({...creds, username: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setCreds({...creds, password: e.target.value})} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
