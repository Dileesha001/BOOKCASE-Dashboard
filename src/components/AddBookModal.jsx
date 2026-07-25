import React, { useState } from 'react';
import { X, BookPlus, Sparkles } from 'lucide-react';

export default function AddBookModal({ isOpen, onClose, onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Novels');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [featured, setFeatured] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !price || !stock) return;

    const newBook = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      title,
      author,
      category,
      price: parseFloat(price),
      stock: parseInt(stock, 10),
      status: parseInt(stock, 10) === 0 ? 'out-of-stock' : parseInt(stock, 10) <= 15 ? 'low-stock' : 'in-stock',
      salesCount: 0,
      rating: 5.0,
      featured
    };

    onAddBook(newBook);
    onClose();
    // Reset form
    setTitle('');
    setAuthor('');
    setPrice('');
    setStock('');
    setFeatured(false);
  };

  return (
    <div className="modal-overlay">
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '520px',
        padding: '2rem',
        position: 'relative',
        animation: 'modalSlide 0.3s ease-out'
      }}>
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'rgba(212, 160, 23, 0.15)',
            border: '1px solid rgba(212, 160, 23, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BookPlus size={20} color="#F7D070" />
          </div>
          <div>
            <h3 className="heading-serif" style={{ fontSize: '1.25rem', margin: 0 }}>
              Add New Title to Catalogue
            </h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              BOOKCASE Inventory Sanctuary
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              Book Title *
            </label>
            <input 
              type="text" 
              placeholder="e.g. Mandodari (මන්දෝදරී)" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
              className="input-dark"
              style={{ width: '100%' }}
              required 
            />
          </div>

          <div>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
              Author Name *
            </label>
            <input 
              type="text" 
              placeholder="e.g. Mohan Raj Madawala" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)}
              className="input-dark"
              style={{ width: '100%' }}
              required 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Category
              </label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="input-dark"
                style={{ width: '100%' }}
              >
                <option value="Novels">Novels</option>
                <option value="Education">Education</option>
                <option value="Translations">Translations</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Short Stories">Short Stories</option>
                <option value="Poetry">Poetry</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Price (LKR) *
              </label>
              <input 
                type="number" 
                placeholder="2450" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                className="input-dark"
                style={{ width: '100%' }}
                required 
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                Initial Stock Units *
              </label>
              <input 
                type="number" 
                placeholder="50" 
                value={stock} 
                onChange={(e) => setStock(e.target.value)}
                className="input-dark"
                style={{ width: '100%' }}
                required 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '0.65rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.85rem' }}>
                <input 
                  type="checkbox" 
                  checked={featured} 
                  onChange={(e) => setFeatured(e.target.checked)}
                  style={{ accentColor: '#D4A017', width: '16px', height: '16px' }}
                />
                <span>Spotlight Featured</span>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', justifyContent: 'flex-end' }}>
            <button type="button" onClick={onClose} className="btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn-gold">
              Save to Catalogue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
