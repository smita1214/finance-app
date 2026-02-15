import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import TransactionForm from '../components/dashboard/TransactionForm.jsx';

const Dashboard = ({ transactions, onAdd }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Calculate total for the summary card
  const totalExpense = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Header Section */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h2 style={{ margin: 0 }}>💰 Finance Dashboard</h2>
          <button onClick={handleLogout} style={{ color: '#ef4444', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Logout
          </button>
        </div>
        <button 
          onClick={() => navigate('/explorer')} 
          style={{ padding: '10px 20px', backgroundColor: '#4F46E5', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          View All in Explorer →
        </button>
      </header>

      {/* Main Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        
        {/* Left Side: The Form to add content */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <TransactionForm onAdd={onAdd} />
        </div>

        {/* Right Side: Summary and Recent List */}
        <div>
          <div style={{ padding: '25px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h4 style={{ color: '#6b7280', margin: 0, textTransform: 'uppercase', fontSize: '12px' }}>Total Expenses</h4>
            <h1 style={{ color: '#111827', margin: '10px 0' }}>${totalExpense.toFixed(2)}</h1>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>Recent Transactions</h3>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            {transactions.length === 0 ? (
              <p style={{ color: '#9ca3af', padding: '10px' }}>No transactions added yet.</p>
            ) : (
              transactions.slice(0, 5).map(t => (
                <div key={t.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                  <span style={{ fontWeight: '500' }}>{t.title}</span>
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>-${t.amount.toFixed(2)}</span>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;