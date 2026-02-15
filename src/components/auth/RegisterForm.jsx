import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Step 1 Simulation: "Registering" by saving to local storage
    const newUser = { email, password, name: email.split('@')[0] };
    localStorage.setItem(`user_${email}`, JSON.stringify(newUser));
    
    // Step 2: Auto-login after registration
    login(newUser);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required style={{padding:'10px'}}/>
      <input type="password" placeholder="Create Password" onChange={(e)=>setPassword(e.target.value)} required style={{padding:'10px'}}/>
      <button type="submit" style={{padding:'10px', backgroundColor:'#10b981', color:'white', border:'none', borderRadius:'5px'}}>Register</button>
      <p style={{fontSize:'12px', textAlign:'center'}}>Already have an account? <span onClick={toggleForm} style={{color:'blue', cursor:'pointer'}}>Login</span></p>
    </form>
  );
};

export default RegisterForm;