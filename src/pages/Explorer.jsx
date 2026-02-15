import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionItem from '../components/explorer/TransactionItem.jsx';

const Explorer = ({ transactions, onDelete }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Step 9: Search & Filter Logic from your reference doc
  const filteredTransactions = transactions.filter(t => {
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>🔍 Transaction Explorer</h2>
        <button 
          onClick={() => navigate('/dashboard')} 
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          ← Back to Dashboard
        </button>
      </header>

      {/* Search and Filter Inputs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Search transactions..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 2, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        >
          <option value="All">All Categories</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Transport">Transport</option>
          <option value="Salary">Salary</option>
        </select>
      </div>

      {/* The Scalable List */}
      <div style={{ border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff' }}>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map(t => (
            <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
          ))
        ) : (
          <p style={{ padding: '20px', textAlign: 'center', color: '#666' }}>No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default Explorer;