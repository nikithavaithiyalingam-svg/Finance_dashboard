export interface Transaction {
  id: string;
  date: string; // ISO string
  description: string;
  amount: number;
  category: string;
  type: 'income' | 'expense';
  note?: string;
}

export interface FilterState {
  search: string;
  categories: string[];
  type: 'all' | 'income' | 'expense';
  dateFrom: string;
  dateTo: string;
}

export interface SortConfig {
  key: 'date' | 'amount' | 'category';
  direction: 'asc' | 'desc';
}

export type Role = 'viewer' | 'admin';