import React from 'react';
import { Transaction, Role } from '../../types';
import { formatCurrency } from '../../utils/formatCurrency';

interface TransactionTableProps {
  transactions: Transaction[];
  role: Role;
  onEdit?: (transaction: Transaction) => void;
  onDelete?: (transactionId: string) => void;
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions, role, onEdit, onDelete }) => {
  if (!transactions.length) {
    return (
      <div className="card">
        <p>No transactions match the current filters.</p>
      </div>
    );
  }

  return (
    <div className="table card">
      <div className="table-header">
        <div className="table-cell">Date</div>
        <div className="table-cell">Description</div>
        <div className="table-cell">Category</div>
        <div className="table-cell">Type</div>
        <div className="table-cell">Amount</div>
        {role === 'admin' && <div className="table-cell">Actions</div>}
      </div>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="table-row">
          <div className="table-cell">{new Date(transaction.date).toLocaleDateString()}</div>
          <div className="table-cell">{transaction.description}</div>
          <div className="table-cell">{transaction.category}</div>
          <div className="table-cell">{transaction.type}</div>
          <div className="table-cell">{formatCurrency(transaction.amount)}</div>
          {role === 'admin' && (
            <div className="table-cell" style={{ display: 'flex', gap: '8px' }}>
              <button className="btn btn-secondary" onClick={() => onEdit?.(transaction)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => onDelete?.(transaction.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TransactionTable;
