import React, { useState } from 'react';

const TransactionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: 'Food',
    date: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Step 4: Follow the required object structure
    const newTransaction = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };
    onAdd(newTransaction);
    setFormData({ title: '', amount: '', category: 'Food', date: new Date().toISOString().split('T')[0] });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Add Transaction</h3>
      <input type="text" placeholder="Title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
      <input type="number" placeholder="Amount" value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} required />
      <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
        <option value="Food">Food</option>
        <option value="Rent">Rent</option>
        <option value="Transport">Transport</option>
        <option value="Bills">Bills</option>
      </select>
      <input type="date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} />
      <button type="submit" style={{ backgroundColor: '#4F46E5', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Save Transaction</button>
    </form>
  );
};

export default TransactionForm;