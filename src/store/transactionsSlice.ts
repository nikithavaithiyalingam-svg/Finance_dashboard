import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction, FilterState, SortConfig } from '../types';
import { mockTransactions } from '../data/mockTransactions';

const loadFromLocalStorage = (): Transaction[] => {
  const stored = localStorage.getItem('transactions');
  return stored ? JSON.parse(stored) : mockTransactions;
};

const saveToLocalStorage = (transactions: Transaction[]) => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
};

interface TransactionsState {
  items: Transaction[];
  filters: FilterState;
  sortBy: SortConfig;
}

const initialState: TransactionsState = {
  items: loadFromLocalStorage(),
  filters: {
    search: '',
    categories: [],
    type: 'all',
    dateFrom: '',
    dateTo: '',
  },
  sortBy: {
    key: 'date',
    direction: 'desc',
  },
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.items.push(action.payload);
      saveToLocalStorage(state.items);
    },
    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.items.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        saveToLocalStorage(state.items);
      }
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(t => t.id !== action.payload);
      saveToLocalStorage(state.items);
    },
    setFilter: (state, action: PayloadAction<Partial<FilterState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    setSortBy: (state, action: PayloadAction<SortConfig>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { addTransaction, updateTransaction, deleteTransaction, setFilter, clearFilters, setSortBy } = transactionsSlice.actions;
export default transactionsSlice.reducer;