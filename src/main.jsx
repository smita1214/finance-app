import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 1. Import the Provider you just created
import { AuthProvider } from './context/AuthContext.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the App component here */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)