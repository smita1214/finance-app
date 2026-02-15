import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm.jsx';
import RegisterForm from '../components/auth/RegisterForm.jsx';

const Login = () => {
  // Logic to toggle between Login and Register forms
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f3f4f6',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ 
        width: '100%', 
        maxWidth: '400px', 
        padding: '40px', 
        backgroundColor: '#fff', 
        borderRadius: '10px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#111827', margin: '0' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </h1>
          <p style={{ color: '#6B7280' }}>
            {isLogin ? 'Welcome back to Finance Tracker' : 'Start managing your finances today'}
          </p>
        </div>
        
        {/* Conditional Rendering of Forms */}
        {isLogin ? (
          <LoginForm toggleForm={() => setIsLogin(false)} />
        ) : (
          <RegisterForm toggleForm={() => setIsLogin(true)} />
        )}

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
          {isLogin ? (
            <p>
              Don't have an account? {' '}
              <span 
                onClick={() => setIsLogin(false)} 
                style={{ color: '#4F46E5', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Register
              </span>
            </p>
          ) : (
            <p>
              Already have an account? {' '}
              <span 
                onClick={() => setIsLogin(true)} 
                style={{ color: '#4F46E5', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;