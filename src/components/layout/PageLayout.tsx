import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import BottomNav from './BottomNav';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default PageLayout;