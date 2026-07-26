import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OverviewTab from './components/OverviewTab';
import SalesTab from './components/SalesTab';
import InventoryTab from './components/InventoryTab';
import GoalProgressTab from './components/GoalProgressTab';
import AddBookModal from './components/AddBookModal';

import { 
  kpiMetrics, 
  salesTimeline, 
  genreDistribution, 
  initialInventory, 
  recentTransactions, 
  businessGoals 
} from './data/mockData';
import { Sparkles, Activity, ShieldCheck, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [inventory, setInventory] = useState(initialInventory);
  const [goals, setGoals] = useState(businessGoals);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('bookcase_theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bookcase_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Derived state calculations
  const lowStockCount = inventory.filter(b => b.stock <= 15 && b.stock > 0).length;
  const outOfStockCount = inventory.filter(b => b.stock === 0).length;
  const totalBooks = inventory.length;

  const handleAddBook = (newBook) => {
    setInventory(prev => [newBook, ...prev]);
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lowStockCount={lowStockCount}
        totalBooks={totalBooks}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Executive Sanctuary Ticker */}
        <div className="executive-ticker-bar">
          <div className="header-inner" style={{ fontSize: '0.74rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <span className="ticker-item" style={{ color: 'var(--text-gold)' }}>
                <Sparkles size={13} color="var(--text-gold)" /> 
                <span>BOOKCASE Executive Suite</span>
              </span>
              <span className="ticker-item" style={{ color: 'var(--text-muted)' }}>
                <Activity size={13} color="#34D399" /> 
                <span>Live Sync: <strong>{totalBooks} Titles Active</strong></span>
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span className="ticker-item" style={{ color: 'var(--text-muted)' }}>
                <ShieldCheck size={13} color="#34D399" /> Operational Status: <strong>100%</strong>
              </span>
              {lowStockCount > 0 && (
                <span className="ticker-item" style={{ color: '#FBBF24' }}>
                  ⚠️ {lowStockCount} Low Stock Alerts
                </span>
              )}
              <span className="ticker-item" style={{ color: 'var(--text-gold)' }}>
                <Award size={13} color="var(--text-gold)" /> Top Seller: <strong>Mandodari (420 copies)</strong>
              </span>
            </div>
          </div>
        </div>

        <Header 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          notificationsCount={outOfStockCount + lowStockCount}
          outOfStockCount={outOfStockCount}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <div className="content-body">
          {activeTab === 'overview' && (
            <OverviewTab 
              kpiMetrics={kpiMetrics}
              inventory={inventory}
              salesTimeline={salesTimeline}
              recentTransactions={recentTransactions}
              goals={goals}
              setActiveTab={setActiveTab}
              onOpenAddModal={() => setIsAddModalOpen(true)}
            />
          )}

          {activeTab === 'sales' && (
            <SalesTab 
              salesTimeline={salesTimeline}
              genreDistribution={genreDistribution}
              inventory={inventory}
              recentTransactions={recentTransactions}
              searchTerm={searchTerm}
            />
          )}

          {activeTab === 'inventory' && (
            <InventoryTab 
              inventory={inventory}
              setInventory={setInventory}
              searchTerm={searchTerm}
              onOpenAddModal={() => setIsAddModalOpen(true)}
            />
          )}

          {activeTab === 'goals' && (
            <GoalProgressTab 
              goals={goals}
              setGoals={setGoals}
            />
          )}
        </div>

        {/* Bottom Full-Width 3D Status Bar matching reference template */}
        <footer className="bottom-status-bar">
          <Sparkles size={15} color="#F7D070" />
          <span>Connect 70+ Store Data Sources & Sync Real-Time Sanctuary Sales Data • BOOKCASE Owner Executive CRM v2.0</span>
        </footer>
      </main>

      {/* Global Add Book Modal */}
      <AddBookModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddBook={handleAddBook}
      />
    </div>
  );
}
