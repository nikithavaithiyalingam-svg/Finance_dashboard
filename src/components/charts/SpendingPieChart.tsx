import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDarkMode } from '../../hooks/useDarkMode';
import { categoryColors } from '../../data/categories';

interface SpendingPieChartProps {
  data: Array<{ category: string; amount: number; percentage: number }>;
}

const SpendingPieChart: React.FC<SpendingPieChartProps> = ({ data }) => {
  const isDark = useDarkMode();

  return (
    <div className="chart-container">
      <h3 className="chart-title">Spending Breakdown</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            dataKey="amount"
            label={({ percent }) => `${((percent ?? 0) * 100).toFixed(1)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={categoryColors[entry.category] || '#8884d8'} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
            }}
            formatter={(value, name) => [`₹${Number(value).toLocaleString()}`, String(name)]}
          />
          <Legend
            wrapperStyle={{ color: isDark ? '#9ca3af' : '#6b7280' }}
            formatter={(value) => <span style={{ color: isDark ? '#9ca3af' : '#6b7280' }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingPieChart;