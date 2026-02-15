import React from 'react';

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #eee' }}>
      <div>
        <strong>{transaction.title}</strong>
        <div style={{ fontSize: '12px', color: '#888' }}>{transaction.category} • {transaction.date}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ fontWeight: 'bold' }}>${transaction.amount.toFixed(2)}</span>
        <button onClick={() => onDelete(transaction.id)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>🗑️</button>
      </div>
    </div>
  );
};

export default TransactionItem;