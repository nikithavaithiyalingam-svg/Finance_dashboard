import { Transaction } from '../types';

export const exportToCSV = (transactions: Transaction[], filename: string = 'finance_export.csv') => {
  const headers = ['Date', 'Description', 'Category', 'Type', 'Amount', 'Note'];
  const csvContent = [
    headers.join(','),
    ...transactions.map(t => [
      new Date(t.date).toLocaleDateString(),
      `"${t.description}"`,
      t.category,
      t.type,
      t.amount,
      `"${t.note || ''}"`
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};