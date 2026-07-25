import React, { useState } from 'react';
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

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [inventory, setInventory] = useState(initialInventory);
  const [goals, setGoals] = useState(businessGoals);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
      />

      {/* Main Content Area */}
      <main className="main-content">
        <Header 
          activeTab={activeTab}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onOpenAddModal={() => setIsAddModalOpen(true)}
          notificationsCount={outOfStockCount + lowStockCount}
          outOfStockCount={outOfStockCount}
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
