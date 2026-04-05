import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="card skeleton">
      <div className="skeleton-line skeleton-line-sm"></div>
      <div className="skeleton-line skeleton-line-lg"></div>
      <div className="skeleton-line skeleton-line-xs"></div>
    </div>
  );
};

export default SkeletonCard;