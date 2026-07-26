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
  RefreshCw,
  Sparkles,
  ShoppingBag,
  Minus
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      
      {/* Upper Controls & Summary */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 className="heading-serif" style={{ fontSize: '1.4rem', margin: 0, color: '#FFF' }}>
            Sanctuary Book Inventory Catalogue
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Real-time catalog stock management, instant price adjustments, and quick restock controls
          </p>
        </div>

        <button onClick={onOpenAddModal} className="btn-gold" style={{ fontSize: '0.82rem', padding: '0.55rem 1.25rem' }}>
          <Plus size={16} /> Setup Title to Inventory
        </button>
      </div>

      {/* Low Stock Reorder Alert Banner */}
      {lowStockCount > 0 && (
        <div className="glass-card" style={{
          padding: '1.1rem 1.5rem',
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.35)',
          borderRadius: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <AlertTriangle size={20} color="#FBBF24" />
            </div>
            <div>
              <strong style={{ color: '#FBBF24', fontSize: '0.92rem' }}>
                Restock Alert: {lowStockCount} Titles Require Stock Replenishment
              </strong>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: '2px 0 0 0' }}>
                Catalog stock levels below 15 units. Trigger reorder to prevent stockout.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedCategory('Low Stock Alerts')}
            className="btn-outline" 
            style={{ fontSize: '0.78rem', borderColor: '#FBBF24', color: '#FBBF24', padding: '0.45rem 1rem' }}
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
        paddingBottom: '0.35rem'
      }}>
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: isActive 
                  ? 'linear-gradient(135deg, #D4A017 0%, #B8860B 100%)' 
                  : 'rgba(255,255,255,0.04)',
                color: isActive ? '#050c08' : 'var(--text-muted)',
                fontWeight: isActive ? 700 : 500,
                border: isActive ? '1px solid #F7D070' : '1px solid rgba(212,160,23,0.2)',
                padding: '0.45rem 1.1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.8rem',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? '0 4px 15px rgba(212, 160, 23, 0.4)' : 'none'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Main Inventory Table */}
      <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Showing <strong style={{ color: 'var(--text-gold)' }}>{filteredBooks.length}</strong> of {inventory.length} Catalogue Titles
          </span>
          <span className="badge badge-gold" style={{ fontSize: '0.72rem' }}>
            Live Inventory Sync Active
          </span>
        </div>

        <table className="custom-table" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.4rem' }}>
          <thead>
            <tr style={{ background: 'rgba(5, 12, 8, 0.8)' }}>
              <th className="text-left" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>ID</th>
              <th className="text-left" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Book Title & Author</th>
              <th className="text-center" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Category</th>
              <th className="text-right" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Price (LKR)</th>
              <th className="text-center" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Stock Status</th>
              <th className="text-center" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Units Available</th>
              <th className="text-right" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sales Volume</th>
              <th className="text-center" style={{ padding: '0.85rem 1rem', fontSize: '0.72rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Quick Restock</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <tr 
                key={book.id} 
                style={{ 
                  background: 'rgba(13, 22, 17, 0.6)', 
                  borderBottom: '1px solid rgba(212, 160, 23, 0.12)',
                  transition: 'background 0.2s ease'
                }}
              >
                {/* ID Badge - No Wrap */}
                <td className="text-left" style={{ padding: '0.9rem 1rem', whiteSpace: 'nowrap' }}>
                  <span style={{ 
                    fontFamily: 'monospace', 
                    fontSize: '0.78rem', 
                    fontWeight: 700, 
                    color: '#F7D070', 
                    background: 'rgba(212, 160, 23, 0.12)', 
                    border: '1px solid rgba(212, 160, 23, 0.3)', 
                    padding: '4px 8px', 
                    borderRadius: '6px',
                    whiteSpace: 'nowrap'
                  }}>
                    {book.id}
                  </span>
                </td>

                {/* Book Title & Author */}
                <td className="text-left" style={{ padding: '0.9rem 1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', fontWeight: 700, color: '#FFF' }}>
                        {book.title}
                      </span>
                      {book.featured && (
                        <span style={{ 
                          background: 'linear-gradient(135deg, rgba(212, 160, 23, 0.25) 0%, rgba(212, 160, 23, 0.05) 100%)', 
                          border: '1px solid rgba(212, 160, 23, 0.45)', 
                          color: '#F7D070', 
                          fontSize: '0.62rem', 
                          padding: '2px 7px', 
                          borderRadius: '12px',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '3px'
                        }}>
                          <Sparkles size={10} color="#F7D070" /> Spotlight
                        </span>
                      )}
                    </div>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      by {book.author}
                    </span>
                  </div>
                </td>

                {/* Category Pill Tag */}
                <td className="text-center" style={{ padding: '0.9rem 1rem' }}>
                  <span style={{ 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(212, 160, 23, 0.25)', 
                    color: 'var(--text-gold)', 
                    fontSize: '0.72rem', 
                    fontWeight: 600, 
                    padding: '4px 10px', 
                    borderRadius: '14px',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    display: 'inline-block'
                  }}>
                    {book.category}
                  </span>
                </td>

                {/* Pricing Column */}
                <td className="text-right" style={{ padding: '0.9rem 1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                    {book.discountPrice ? (
                      <>
                        <span style={{ fontWeight: 800, color: '#34D399', fontSize: '0.9rem' }}>
                          LKR {book.discountPrice.toLocaleString()}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                          LKR {book.price.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span style={{ fontWeight: 700, color: '#FFF', fontSize: '0.9rem' }}>
                        LKR {book.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </td>

                {/* Stock Status Badge */}
                <td className="text-center" style={{ padding: '0.9rem 1rem' }}>
                  {book.status === 'in-stock' && (
                    <span style={{ 
                      background: 'rgba(16, 185, 129, 0.15)', 
                      border: '1px solid rgba(16, 185, 129, 0.4)', 
                      color: '#34D399', 
                      fontWeight: 700, 
                      fontSize: '0.74rem', 
                      padding: '4px 10px', 
                      borderRadius: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span className="pulse-dot emerald" style={{ width: '6px', height: '6px' }} /> In Stock
                    </span>
                  )}
                  {book.status === 'low-stock' && (
                    <span style={{ 
                      background: 'rgba(245, 158, 11, 0.15)', 
                      border: '1px solid rgba(245, 158, 11, 0.4)', 
                      color: '#FBBF24', 
                      fontWeight: 700, 
                      fontSize: '0.74rem', 
                      padding: '4px 10px', 
                      borderRadius: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span className="pulse-dot amber" style={{ width: '6px', height: '6px' }} /> Low Stock
                    </span>
                  )}
                  {book.status === 'out-of-stock' && (
                    <span style={{ 
                      background: 'rgba(239, 68, 68, 0.15)', 
                      border: '1px solid rgba(239, 68, 68, 0.4)', 
                      color: '#FCA5A5', 
                      fontWeight: 700, 
                      fontSize: '0.74rem', 
                      padding: '4px 10px', 
                      borderRadius: '20px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <span className="pulse-dot crimson" style={{ width: '6px', height: '6px' }} /> Sold Out
                    </span>
                  )}
                </td>

                {/* Units Available + Progress Indicator */}
                <td className="text-center" style={{ padding: '0.9rem 1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                    <span style={{
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      color: book.stock === 0 ? '#EF4444' : book.stock <= 15 ? '#FBBF24' : '#FFF'
                    }}>
                      {book.stock} units
                    </span>
                    <div style={{ width: '60px', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ 
                        width: `${Math.min(100, Math.round((book.stock / 150) * 100))}%`, 
                        height: '100%', 
                        background: book.stock === 0 ? '#EF4444' : book.stock <= 15 ? '#FBBF24' : '#34D399',
                        borderRadius: '2px'
                      }} />
                    </div>
                  </div>
                </td>

                {/* Sales Volume */}
                <td className="text-right" style={{ padding: '0.9rem 1rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ShoppingBag size={12} color="var(--text-gold)" /> {book.salesCount} sold
                  </span>
                </td>

                {/* Quick Restock Action Controls */}
                <td className="text-center" style={{ padding: '0.9rem 1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <button
                      onClick={() => updateStock(book.id, -1)}
                      title="Reduce 1 unit"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        color: 'var(--text-muted)',
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Minus size={13} />
                    </button>
                    <button
                      onClick={() => updateStock(book.id, 5)}
                      title="Restock +5 units"
                      style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.08) 100%)',
                        border: '1px solid rgba(16, 185, 129, 0.45)',
                        color: '#34D399',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        transition: 'all 0.2s ease',
                        whiteSpace: 'nowrap',
                        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.2)'
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
