import React, { memo } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCountUp } from '../../hooks/useCountUp';

interface SummaryCardProps {
  title: string;
  value: number;
  trend?: string;
  isPositive?: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = memo(({ title, value, trend, isPositive }) => {
  const animatedValue = useCountUp(value);

  return (
    <div className="summary-card">
      <h3 className="card-label">{title}</h3>
      <p className="card-value">
        {formatCurrency(animatedValue)}
      </p>
      {trend && (
        <p className={`card-trend ${isPositive ? 'trend-positive' : 'trend-negative'}`}>
          {trend} from last month
        </p>
      )}
    </div>
  );
});

SummaryCard.displayName = 'SummaryCard';

export default SummaryCard;