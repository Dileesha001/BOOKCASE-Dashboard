import React, { useState } from 'react';
import { 
  BookOpen, 
  Plus, 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Edit3, 
  TrendingUp, 
  Star,
  RefreshCw
} from 'lucide-react';

export default function InventoryTab({ 
  inventory, 
  setInventory, 
  searchTerm, 
  onOpenAddModal 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 
    'Novels', 
    'Education', 
    'Translations', 
    'Sci-Fi', 
    'Short Stories', 
    'Poetry', 
    'Low Stock Alerts'
  ];

  // Quick inline stock updater
  const updateStock = (id, delta) => {
    setInventory(prev => prev.map(book => {
      if (book.id === id) {
        const newStock = Math.max(0, book.stock + delta);
        let newStatus = 'in-stock';
        if (newStock === 0) newStatus = 'out-of-stock';
        else if (newStock <= 15) newStatus = 'low-stock';

        return { ...book, stock: newStock, status: newStatus };
      }
      return book;
    }));
  };

  // Filter inventory
  const filteredBooks = inventory.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.id.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'Low Stock Alerts') return matchesSearch && (book.stock <= 15 || book.status === 'out-of-stock');
    return matchesSearch && book.category === selectedCategory;
  });

  const lowStockCount = inventory.filter(b => b.stock <= 15).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Upper Controls & Summary */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 className="heading-serif" style={{ fontSize: '1.4rem', margin: 0 }}>
            Sanctuary Book Inventory Management
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Monitor real-time stock levels, update pricing, and trigger restock orders
          </p>
        </div>

        <button onClick={onOpenAddModal} className="btn-gold" style={{ fontSize: '0.85rem' }}>
          <Plus size={16} /> Add Book to Inventory
        </button>
      </div>

      {/* Low Stock Reorder Alert Banner */}
      {lowStockCount > 0 && (
        <div className="glass-card" style={{
          padding: '1.25rem 1.5rem',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <AlertTriangle size={24} color="#FBBF24" style={{ flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#FBBF24', fontSize: '0.92rem' }}>
                Restock Alert: {lowStockCount} Titles Require Stock Replenishment
              </strong>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
                Inventory below 15 units. Reorder soon to maintain zero sales friction.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedCategory('Low Stock Alerts')}
            className="btn-outline" 
            style={{ fontSize: '0.78rem', borderColor: '#FBBF24', color: '#FBBF24' }}
          >
            View Low Stock Titles
          </button>
        </div>
      )}

      {/* Category Filter Pills */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: isActive ? 'var(--gold-primary)' : 'rgba(255,255,255,0.05)',
                color: isActive ? '#050c08' : 'var(--text-main)',
                fontWeight: isActive ? 700 : 500,
                border: isActive ? '1px solid var(--gold-primary)' : '1px solid rgba(212,160,23,0.2)',
                padding: '0.5rem 1.1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Main Inventory Table */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Showing <strong>{filteredBooks.length}</strong> of {inventory.length} Titles
          </span>
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Book Title & Details</th>
              <th className="text-center">Category</th>
              <th className="text-right">Price (LKR)</th>
              <th className="text-center">Stock Status</th>
              <th className="text-center">Units Available</th>
              <th className="text-right">Sales Count</th>
              <th className="text-center">Quick Restock</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr key={book.id}>
                <td className="text-left" style={{ fontWeight: 600, color: 'var(--text-gold)', fontSize: '0.82rem' }}>
                  {book.id}
                </td>
                <td className="text-left">
                  <div>
                    <div style={{ fontWeight: 600, color: '#FFF', fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {book.title}
                      {book.featured && (
                        <span className="badge badge-gold" style={{ fontSize: '0.65rem', padding: '1px 6px' }}>
                          Spotlight
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      by {book.author}
                    </span>
                  </div>
                </td>
                <td className="text-center">
                  <span className="badge badge-gold" style={{ opacity: 0.85 }}>
                    {book.category}
                  </span>
                </td>
                <td className="text-right" style={{ fontWeight: 600 }}>
                  LKR {book.price.toLocaleString()}
                  {book.discountPrice && (
                    <span style={{ fontSize: '0.75rem', color: '#34D399', display: 'block' }}>
                      LKR {book.discountPrice.toLocaleString()} (Discounted)
                    </span>
                  )}
                </td>
                <td className="text-center">
                  {book.status === 'in-stock' && (
                    <span className="badge badge-emerald">🟢 In Stock</span>
                  )}
                  {book.status === 'low-stock' && (
                    <span className="badge badge-amber">🟡 Low Stock</span>
                  )}
                  {book.status === 'out-of-stock' && (
                    <span className="badge badge-crimson">🔴 Sold Out</span>
                  )}
                </td>
                <td className="text-center">
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: book.stock === 0 ? '#EF4444' : book.stock <= 15 ? '#F59E0B' : '#FFF'
                  }}>
                    {book.stock} units
                  </span>
                </td>
                <td className="text-right" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  {book.salesCount} sold
                </td>
                <td className="text-center">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
                    <button
                      onClick={() => updateStock(book.id, -1)}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#FFF',
                        width: '26px',
                        height: '26px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 700
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => updateStock(book.id, 5)}
                      style={{
                        background: 'rgba(16, 185, 129, 0.2)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        color: '#34D399',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      +5 Restock
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
