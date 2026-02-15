import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ toggleForm }) => { 

  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd verify credentials here. 
    // For now, we use your name to personalize the session.
    login({ email, name: 'Aashu' }); 
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <input 
        type="email" 
        placeholder="Enter Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <input 
        type="password" 
        placeholder="Password" 
        required 
        style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button 
        type="submit" 
        style={{ padding: '12px', backgroundColor: '#4F46E5', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;