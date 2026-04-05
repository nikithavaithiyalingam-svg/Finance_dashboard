import React from 'react';
import type { RootState } from '../store';
import { useAppSelector } from '../store/hooks';
import SummaryCard from '../components/ui/SummaryCard';
import BalanceTrendChart from '../components/charts/BalanceTrendChart';
import SpendingPieChart from '../components/charts/SpendingPieChart';
import SkeletonCard from '../components/ui/SkeletonCard';
import {
  calculateTotalBalance,
  calculateExpensesInRange,
  calculateIncomeInRange,
  calculateMonthlyIncome,
  calculateMonthlyExpenses,
  calculateSavingsRate,
  calculateTrend,
  getBalanceTrendData,
  getLastMonthRange,
  getSpendingByCategory,
} from '../utils/insightCalculations';

const DashboardPage: React.FC = () => {
  const transactions = useAppSelector((state: RootState) => state.transactions.items);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const totalBalance = calculateTotalBalance(transactions);
  const monthlyIncome = calculateMonthlyIncome(transactions);
  const monthlyExpenses = calculateMonthlyExpenses(transactions);
  const savingsRate = calculateSavingsRate(monthlyIncome, monthlyExpenses);

  // Calculate last month values for trends
  const { start: lastStart, end: lastEnd } = getLastMonthRange();
  const balanceData = getBalanceTrendData(transactions);
  const spendingData = getSpendingByCategory(transactions);

  const lastMonthIncome = calculateIncomeInRange(transactions, lastStart, lastEnd);
  const lastMonthExpenses = calculateExpensesInRange(transactions, lastStart, lastEnd);
  const lastMonthBalance = balanceData.length > 1 ? balanceData[balanceData.length - 2].balance : totalBalance;

  const incomeTrend = calculateTrend(monthlyIncome, lastMonthIncome);
  const expenseTrend = calculateTrend(monthlyExpenses, lastMonthExpenses);
  const balanceTrend = calculateTrend(totalBalance, lastMonthBalance);

  if (loading) {
    return (
      <div className="page-content">
        <h1 className="page-title">Dashboard</h1>
        <div className="grid-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
        <div className="grid-2">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h1 className="page-title">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid-4">
        <SummaryCard
          title="Total Balance"
          value={totalBalance}
          trend={balanceTrend}
          isPositive={totalBalance >= 0}
        />
        <SummaryCard
          title="Monthly Income"
          value={monthlyIncome}
          trend={incomeTrend}
          isPositive={true}
        />
        <SummaryCard
          title="Monthly Expenses"
          value={monthlyExpenses}
          trend={expenseTrend}
          isPositive={false}
        />
        <SummaryCard
          title="Savings Rate"
          value={savingsRate}
          trend={`${savingsRate.toFixed(1)}%`}
          isPositive={savingsRate >= 0}
        />
      </div>

      {/* Charts */}
      <div className="grid-2">
        <BalanceTrendChart data={balanceData} />
        <SpendingPieChart data={spendingData} />
      </div>
    </div>
  );
};

export default DashboardPage;