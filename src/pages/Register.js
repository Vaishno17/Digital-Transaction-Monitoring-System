import { useState } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post('/auth/register', user);
      alert("Registered successfully!");
      navigate('/login');
    } catch (err) {
      alert("Error registering user.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input placeholder="Username" onChange={e => setUser({...user, username: e.target.value})} />
      <input placeholder="Email" onChange={e => setUser({...user, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setUser({...user, password: e.target.value})} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
