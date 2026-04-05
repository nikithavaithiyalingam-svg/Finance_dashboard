import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setRole } from '../../store/roleSlice';
import { toggleTheme } from '../../store/themeSlice';

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const role = useAppSelector(state => state.role);
  const theme = useAppSelector(state => state.theme);

  return (
    <header className="navbar">
      <div className="navbar-title">
        <h1>Finance Dashboard</h1>
      </div>

      <div style={{ flex: 1 }} className="hide-desktop"></div>

      <div className="navbar-controls">
        {/* Role Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="text-sm">Role:</span>
          <select
            value={role}
            onChange={(e) => dispatch(setRole(e.target.value as 'viewer' | 'admin'))}
            className="role-selector"
          >
            <option value="viewer">👁️ Viewer</option>
            <option value="admin">⚙️ Admin</option>
          </select>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="theme-toggle"
        >
          {theme === 'light' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;