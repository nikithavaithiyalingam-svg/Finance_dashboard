import React, { useMemo } from 'react';
import { useAppSelector } from '../store/hooks';
import type { RootState } from '../store';
import {
  calculateTotalBalance,
  calculateMonthlyExpenses,
  calculateMonthlyIncome,
  getMonthComparisonData,
  getTopMerchants,
  getTopSpendingCategory,
} from '../utils/insightCalculations';
import { formatCurrency } from '../utils/formatCurrency';
import EmptyState from '../components/ui/EmptyState';

const InsightsPage: React.FC = () => {
  const transactions = useAppSelector((state: RootState) => state.transactions.items);
  const role = useAppSelector((state: RootState) => state.role);

  const totalBalance = calculateTotalBalance(transactions);
  const monthlyIncome = calculateMonthlyIncome(transactions);
  const monthlyExpenses = calculateMonthlyExpenses(transactions);
  const topCategory = getTopSpendingCategory(transactions);
  const monthComparison = getMonthComparisonData(transactions);
  const topMerchants = getTopMerchants(transactions);

  const averageExpense = useMemo(() => {
    const expenseTransactions = transactions.filter((transaction) => transaction.type === 'expense');
    if (!expenseTransactions.length) return 0;
    return Math.abs(expenseTransactions.reduce((sum, transaction) => sum + transaction.amount, 0) / expenseTransactions.length);
  }, [transactions]);

  if (!transactions.length) {
    return (
      <div className="page-content">
        <h1 className="page-title">Insights</h1>
        <EmptyState
          icon={<span>📊</span>}
          title="No insight data available"
          description="Connect some transactions first to see spending insights."
        />
      </div>
    );
  }

  return (
    <div className="page-content">
      <h1 className="page-title">Insights</h1>

      <div className="grid-4">
        <div className="card">
          <div className="card-label">Total Balance</div>
          <div className="card-value">{formatCurrency(totalBalance)}</div>
          <div className="text-sm">Net cash available across all transactions.</div>
        </div>

        <div className="card">
          <div className="card-label">Income This Month</div>
          <div className="card-value">{formatCurrency(monthlyIncome)}</div>
          <div className="text-sm">Income recorded for the current month.</div>
        </div>

        <div className="card">
          <div className="card-label">Expenses This Month</div>
          <div className="card-value">{formatCurrency(monthlyExpenses)}</div>
          <div className="text-sm">Total spending tracked this month.</div>
        </div>

        <div className="card">
          <div className="card-label">Average Expense</div>
          <div className="card-value">{formatCurrency(averageExpense)}</div>
          <div className="text-sm">Average amount per expense transaction.</div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-label">Top Spending Category</div>
          <div className="card-value">{topCategory.category || 'None'}</div>
          <div className="text-sm mb-4">
            {topCategory.amount > 0
              ? `${topCategory.category} makes up ${topCategory.percentage.toFixed(0)}% of spending.`
              : 'No expense data yet.'}
          </div>
          <div className="insight-list">
            <div className="insight-item">
              <span>Category</span>
              <strong>{topCategory.category || '—'}</strong>
            </div>
            <div className="insight-item">
              <span>Amount</span>
              <strong>{formatCurrency(topCategory.amount)}</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-label">Top Merchants</div>
          <div className="text-sm mb-4">Most costly expense descriptions.</div>
          <div className="insight-list">
            {topMerchants.map((merchant) => (
              <div key={merchant.description} className="insight-item">
                <span>{merchant.description}</span>
                <strong>{formatCurrency(merchant.amount)}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-label">Month-over-month</div>
        <div className="text-sm mb-4">Income and expenses for the last three months.</div>
        <div className="insight-list">
          {monthComparison.map((item) => (
            <div key={item.month} className="insight-item">
              <span>{item.month}</span>
              <strong>{formatCurrency(item.income)} / {formatCurrency(item.expense)}</strong>
            </div>
          ))}
        </div>
      </div>

      {role === 'admin' && (
        <div className="card">
          <div className="card-label">Admin note</div>
          <p className="text-sm">
            Admins can manage transactions in the Transactions section. Use this view to spot spending trends and review where funds are moving.
          </p>
        </div>
      )}
    </div>
  );
};

export default InsightsPage;
