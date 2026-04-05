import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/transactions', label: 'Transactions', icon: '💳' },
    { path: '/insights', label: 'Insights', icon: '📈' },
  ];

  return (
    <nav className="bottom-nav">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`nav-item-mobile ${location.pathname === item.path ? 'active' : ''}`}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;