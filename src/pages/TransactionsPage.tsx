import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import type { RootState } from '../store';
import { categories } from '../data/categories';
import { addTransaction, clearFilters, deleteTransaction, setFilter, setSortBy, updateTransaction } from '../store/transactionsSlice';
import { exportToCSV } from '../utils/csvExport';
import { FilterState, Transaction } from '../types';
import Modal from '../components/ui/Modal';
import EmptyState from '../components/ui/EmptyState';
import TransactionForm from '../components/transactions/TransactionForm';
import TransactionTable from '../components/transactions/TransactionTable';

const TransactionsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, filters, sortBy } = useAppSelector((state: RootState) => state.transactions);
  const role = useAppSelector((state: RootState) => state.role);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const filteredTransactions = useMemo(() => {
    return [...items]
      .filter((transaction) => {
        const query = filters.search.toLowerCase();
        const date = new Date(transaction.date);
        const from = filters.dateFrom ? new Date(filters.dateFrom) : null;
        const to = filters.dateTo ? new Date(filters.dateTo) : null;

        const matchesSearch =
          !query ||
          transaction.description.toLowerCase().includes(query) ||
          transaction.category.toLowerCase().includes(query);

        const matchesType =
          filters.type === 'all' || transaction.type === filters.type;

        const matchesCategory =
          !filters.categories.length || filters.categories.includes(transaction.category);

        const matchesDate =
          (!from || date >= from) && (!to || date <= to);

        return matchesSearch && matchesType && matchesCategory && matchesDate;
      })
      .sort((a, b) => {
        const direction = sortBy.direction === 'asc' ? 1 : -1;
        if (sortBy.key === 'amount') {
          return (a.amount - b.amount) * direction;
        }
        if (sortBy.key === 'category') {
          return a.category.localeCompare(b.category) * direction;
        }
        return (new Date(a.date).getTime() - new Date(b.date).getTime()) * direction;
      });
  }, [items, filters, sortBy]);

  const handleFilterChange = (field: keyof FilterState, value: FilterState[keyof FilterState]) => {
    dispatch(setFilter({ [field]: value } as Partial<FilterState>));
  };

  const handleOpenModal = (transaction: Transaction | null = null) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleSaveTransaction = (transaction: Transaction) => {
    if (selectedTransaction) {
      dispatch(updateTransaction(transaction));
    } else {
      dispatch(addTransaction(transaction));
    }
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleDeleteTransaction = (transactionId: string) => {
    dispatch(deleteTransaction(transactionId));
  };

  return (
    <div className="page-content">
      <div className="page-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <h1 className="page-title">Transactions</h1>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {role === 'admin' && (
            <button className="btn btn-primary" onClick={() => handleOpenModal()}>
              Add Transaction
            </button>
          )}
          <button className="btn btn-secondary" onClick={() => exportToCSV(filteredTransactions)}>
            Export CSV
          </button>
        </div>
      </div>

      <div className="card filter-panel" style={{ marginBottom: '24px' }}>
        <div className="form-group">
          <label className="form-label">Search</label>
          <input
            className="form-input"
            placeholder="Search description or category"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={filters.categories[0] ?? ''}
            onChange={(e) => handleFilterChange('categories', e.target.value ? [e.target.value] : [])}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Date from</label>
          <input
            type="date"
            className="form-input"
            value={filters.dateFrom}
            onChange={(e) => handleFilterChange('dateFrom', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Date to</label>
          <input
            type="date"
            className="form-input"
            value={filters.dateTo}
            onChange={(e) => handleFilterChange('dateTo', e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
          <button className="btn btn-secondary" type="button" onClick={() => dispatch(clearFilters())}>
            Reset Filters
          </button>
          <div style={{ marginLeft: 'auto' }}>
            <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>
              Sort by
            </label>
            <select
              className="form-select"
              value={`${sortBy.key}-${sortBy.direction}`}
              onChange={(e) => {
                const [key, direction] = e.target.value.split('-') as ['date' | 'amount' | 'category', 'asc' | 'desc'];
                dispatch(setSortBy({ key, direction }));
              }}
            >
              <option value="date-desc">Date: Newest first</option>
              <option value="date-asc">Date: Oldest first</option>
              <option value="amount-desc">Amount: High to low</option>
              <option value="amount-asc">Amount: Low to high</option>
              <option value="category-asc">Category: A–Z</option>
              <option value="category-desc">Category: Z–A</option>
            </select>
          </div>
        </div>
      </div>

      {filteredTransactions.length === 0 ? (
        <EmptyState
          icon={<span>📭</span>}
          title="No transactions found"
          description="Try updating your filters or add a new transaction."
        />
      ) : (
        <TransactionTable
          role={role}
          transactions={filteredTransactions}
          onEdit={role === 'admin' ? handleOpenModal : undefined}
          onDelete={role === 'admin' ? handleDeleteTransaction : undefined}
        />
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedTransaction ? 'Edit Transaction' : 'Add Transaction'}>
        <TransactionForm
          transaction={selectedTransaction}
          onSave={handleSaveTransaction}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default TransactionsPage;
