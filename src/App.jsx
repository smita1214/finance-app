import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Authentication & Security Imports
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

// Page Imports
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Explorer from "./pages/Explorer.jsx";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx) => {
    setTransactions([newTx, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes: Users must log in to see these */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard transactions={transactions} onAdd={addTransaction} />
            </ProtectedRoute>
          } />
          
          <Route path="/explorer" element={
            <ProtectedRoute>
              <Explorer transactions={transactions} onDelete={deleteTransaction} />
            </ProtectedRoute>
          } />

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;