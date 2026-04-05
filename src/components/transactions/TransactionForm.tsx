import React, { useEffect, useState } from 'react';
import { Transaction } from '../../types';
import { categories } from '../../data/categories';

interface TransactionFormProps {
  transaction?: Transaction | null;
  onSave: (transaction: Transaction) => void;
  onCancel: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ transaction, onSave, onCancel }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [note, setNote] = useState('');

  useEffect(() => {
    if (transaction) {
      setDescription(transaction.description);
      setAmount(Math.abs(transaction.amount).toString());
      setCategory(transaction.category);
      setType(transaction.type);
      setDate(transaction.date.slice(0, 10));
      setNote(transaction.note ?? '');
    } else {
      setDescription('');
      setAmount('');
      setCategory(categories[0]);
      setType('expense');
      setDate(new Date().toISOString().slice(0, 10));
      setNote('');
    }
  }, [transaction]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const value = parseFloat(amount) || 0;
    const normalizedAmount = type === 'expense' ? -Math.abs(value) : Math.abs(value);

    onSave({
      id: transaction?.id ?? (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`),
      description: description.trim() || 'New transaction',
      amount: normalizedAmount,
      category,
      type,
      date: new Date(date).toISOString(),
      note: note.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="form-group">
        <label className="form-label">Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input"
          placeholder="Payment, salary, rent..."
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-input"
          placeholder="0"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="form-select">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Type</label>
        <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')} className="form-select">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="form-textarea"
          rows={3}
          placeholder="Optional note"
        />
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save Transaction
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
