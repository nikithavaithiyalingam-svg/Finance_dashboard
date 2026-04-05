import { Transaction } from '../types';
import { startOfMonth, endOfMonth, subMonths, format } from 'date-fns';

export const calculateTotalBalance = (transactions: Transaction[]): number => {
  return transactions.reduce((sum, t) => sum + t.amount, 0);
};

export const calculateMonthlyIncome = (transactions: Transaction[]): number => {
  const { start, end } = getCurrentMonthRange();
  return calculateIncomeInRange(transactions, start, end);
};

export const calculateMonthlyExpenses = (transactions: Transaction[]): number => {
  const { start, end } = getCurrentMonthRange();
  return calculateExpensesInRange(transactions, start, end);
};

export const calculateIncomeInRange = (transactions: Transaction[], start: Date, end: Date): number => {
  return transactions
    .filter(t => t.type === 'income' && new Date(t.date) >= start && new Date(t.date) <= end)
    .reduce((sum, t) => sum + t.amount, 0);
};

export const calculateExpensesInRange = (transactions: Transaction[], start: Date, end: Date): number => {
  return Math.abs(transactions
    .filter(t => t.type === 'expense' && new Date(t.date) >= start && new Date(t.date) <= end)
    .reduce((sum, t) => sum + t.amount, 0));
};

export const calculateSavingsRate = (income: number, expenses: number): number => {
  if (income === 0) return 0;
  return ((income - expenses) / income) * 100;
};

export const getCurrentMonthRange = () => {
  const now = new Date();
  return {
    start: startOfMonth(now),
    end: endOfMonth(now),
  };
};

export const getLastMonthRange = () => {
  const lastMonth = subMonths(new Date(), 1);
  return {
    start: startOfMonth(lastMonth),
    end: endOfMonth(lastMonth),
  };
};

export const calculateTrend = (current: number, previous: number): string => {
  if (previous === 0) return '+0%';
  const percent = ((current - previous) / Math.abs(previous)) * 100;
  const sign = percent >= 0 ? '+' : '';
  return `${sign}${percent.toFixed(0)}%`;
};

export const getTopSpendingCategory = (transactions: Transaction[]): { category: string; amount: number; percentage: number } => {
  const { start, end } = getCurrentMonthRange();
  const expenses = transactions.filter(t => t.type === 'expense' && new Date(t.date) >= start && new Date(t.date) <= end);
  const total = expenses.reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const byCategory = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    return acc;
  }, {} as Record<string, number>);
  const top = Object.entries(byCategory).sort(([,a], [,b]) => b - a)[0];
  return top ? {
    category: top[0],
    amount: top[1],
    percentage: total > 0 ? (top[1] / total) * 100 : 0
  } : { category: '', amount: 0, percentage: 0 };
};

export const getTopMerchants = (transactions: Transaction[]): Array<{ description: string; amount: number }> => {
  const expenses = transactions.filter(t => t.type === 'expense');
  const byMerchant = expenses.reduce((acc, t) => {
    acc[t.description] = (acc[t.description] || 0) + Math.abs(t.amount);
    return acc;
  }, {} as Record<string, number>);
  return Object.entries(byMerchant)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5)
    .map(([description, amount]) => ({ description, amount }));
};

export const getMonthComparisonData = (transactions: Transaction[]) => {
  const months = [];
  for (let i = 2; i >= 0; i--) {
    const month = subMonths(new Date(), i);
    const { start, end } = { start: startOfMonth(month), end: endOfMonth(month) };
    const income = transactions
      .filter(t => t.type === 'income' && new Date(t.date) >= start && new Date(t.date) <= end)
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = Math.abs(transactions
      .filter(t => t.type === 'expense' && new Date(t.date) >= start && new Date(t.date) <= end)
      .reduce((sum, t) => sum + t.amount, 0));
    months.push({
      month: format(month, 'MMM yyyy'),
      income,
      expense,
    });
  }
  return months;
};

export const getBalanceTrendData = (transactions: Transaction[]) => {
  const months = [];
  let cumulative = 0;
  for (let i = 5; i >= 0; i--) {
    const month = subMonths(new Date(), i);
    const { start, end } = { start: startOfMonth(month), end: endOfMonth(month) };
    const monthTransactions = transactions.filter(t => new Date(t.date) >= start && new Date(t.date) <= end);
    cumulative += monthTransactions.reduce((sum, t) => sum + t.amount, 0);
    months.push({
      month: format(month, 'MMM yyyy'),
      balance: cumulative,
    });
  }
  return months;
};

export const getSpendingByCategory = (transactions: Transaction[]) => {
  const expenses = transactions.filter(t => t.type === 'expense');
  const byCategory = expenses.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
    return acc;
  }, {} as Record<string, number>);
  const total = Object.values(byCategory).reduce((sum, v) => sum + v, 0);
  return Object.entries(byCategory).map(([category, amount]) => ({
    category,
    amount,
    percentage: total > 0 ? (amount / total) * 100 : 0,
  }));
};