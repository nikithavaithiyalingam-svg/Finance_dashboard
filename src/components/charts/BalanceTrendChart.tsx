import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useDarkMode } from '../../hooks/useDarkMode';

interface BalanceTrendChartProps {
  data: Array<{ month: string; balance: number }>;
}

const BalanceTrendChart: React.FC<BalanceTrendChartProps> = ({ data }) => {
  const isDark = useDarkMode();

  return (
    <div className="chart-container">
      <h3 className="chart-title">Balance Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
          <XAxis
            dataKey="month"
            stroke={isDark ? '#9ca3af' : '#6b7280'}
            fontSize={12}
          />
          <YAxis
            stroke={isDark ? '#9ca3af' : '#6b7280'}
            fontSize={12}
            tickFormatter={(value) => `₹${value.toLocaleString()}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#1f2937' : '#ffffff',
              border: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
              borderRadius: '8px',
            }}
            formatter={(value) => [`₹${Number(value).toLocaleString()}`, 'Balance']}
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.1}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceTrendChart;