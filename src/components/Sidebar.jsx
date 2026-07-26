import React from 'react';
import { 
  BookMarked, 
  ShieldCheck, 
  Sparkles, 
  FileText, 
  Layers, 
  Settings, 
  User, 
  Activity,
  Download,
  Database,
  Sun,
  Moon
} from 'lucide-react';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  lowStockCount, 
  totalBooks,
  theme,
  toggleTheme
}) {
  return (
    <aside style={{
      width: '280px',
      background: 'rgba(5, 12, 8, 0.95)',
      borderRight: '1px solid rgba(212, 160, 23, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flexShrink: 0,
      backdropFilter: 'blur(20px)',
      boxSizing: 'border-box'
    }}>
      {/* Brand Header */}
      <div style={{
        padding: '1.5rem 1.25rem',
        borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem'
      }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #7C3AED 0%, #059669 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(124, 58, 237, 0.4)',
          boxShadow: '0 0 15px rgba(124, 58, 237, 0.3)',
          flexShrink: 0
        }}>
          <BookMarked size={22} color="#FFF" />
        </div>
        <div>
          <h1 className="heading-display gold-gradient-text" style={{ fontSize: '1.3rem', margin: 0, lineHeight: 1.1, fontWeight: 800 }}>
            BOOKCASE
          </h1>
          <p style={{ 
            fontSize: '0.68rem', 
            color: 'var(--text-gold)', 
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginTop: '0.15rem',
            fontWeight: 700
          }}>
            Owner Executive Hub
          </p>
        </div>
      </div>

      {/* Main Sidebar Content Area */}
      <div style={{ padding: '1.25rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', overflowY: 'auto' }}>
        
        {/* Executive User Profile Sanctuary Card */}
        <div className="glass-card" style={{ padding: '1.1rem', borderRadius: '16px', border: '1px solid rgba(124, 58, 237, 0.28)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981, #7C3AED)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#FFF',
              fontSize: '1rem',
              boxShadow: '0 0 15px rgba(124, 58, 237, 0.35)',
              flexShrink: 0
            }}>
              BO
            </div>
            <div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
                BOOKCASE Owner
              </h3>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-gold)', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px', fontWeight: 600 }}>
                <ShieldCheck size={12} color="var(--text-gold)" style={{ flexShrink: 0 }} /> Admin Certified
              </span>
            </div>
          </div>

          <div className="sidebar-sub-box">
            <div style={{ color: 'var(--text-muted)', marginBottom: '3px', fontWeight: 500 }}>owner@bookcase.lk</div>
            <div style={{ color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
              🟢 Executive Session Active
            </div>
          </div>
        </div>

        {/* Sanctuary Suite Tools */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          <div style={{ 
            fontSize: '0.68rem', 
            color: 'var(--text-muted)', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            padding: '0 0.5rem',
            fontWeight: 700
          }}>
            Sanctuary Executive Tools
          </div>

          <button 
            onClick={() => setActiveTab('inventory')}
            className="sidebar-tool-btn"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Database size={16} color="var(--text-gold)" />
              <span style={{ fontWeight: 600 }}>Catalog Management</span>
            </div>
            <span className="badge badge-gold" style={{ fontSize: '0.65rem', fontWeight: 700 }}>{totalBooks} Titles</span>
          </button>

          <button 
            onClick={() => setActiveTab('sales')}
            className="sidebar-tool-btn"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <FileText size={16} color="#059669" />
              <span style={{ fontWeight: 600 }}>Export Sales Report</span>
            </div>
            <Download size={14} color="var(--text-muted)" />
          </button>

          <button 
            onClick={() => setActiveTab('goals')}
            className="sidebar-tool-btn"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Sparkles size={16} color="#7C3AED" />
              <span style={{ fontWeight: 600 }}>Goal Tracking Hub</span>
            </div>
            <span className="badge badge-emerald" style={{ fontSize: '0.65rem', fontWeight: 700 }}>Live</span>
          </button>

          {/* Theme Mode Toggle Item */}
          <button 
            onClick={toggleTheme}
            className="sidebar-tool-btn"
            style={{ marginTop: '0.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              {theme === 'dark' ? <Sun size={16} color="#F7D070" /> : <Moon size={16} color="#7C3AED" />}
              <span style={{ fontWeight: 700 }}>Theme: {theme === 'dark' ? 'Dark Obsidian' : 'Light Violet'}</span>
            </div>
            <span className="badge badge-gold" style={{ fontSize: '0.65rem', fontWeight: 700 }}>
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </span>
          </button>
        </div>

      </div>

      {/* Bottom Store Sanctuary Status */}
      <div style={{ padding: '1rem' }}>
        <div className="glass-card-emerald" style={{ padding: '0.9rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
            <div className="pulse-dot emerald"></div>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#34D399' }}>
              Sanctuary Live Sync
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
            Real-time synchronization active across <strong>{totalBooks} Titles</strong>.
          </p>
          <div style={{ 
            marginTop: '0.65rem', 
            paddingTop: '0.65rem', 
            borderTop: '1px solid rgba(16, 185, 129, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.72rem'
          }}>
            <span style={{ color: 'var(--text-muted)' }}>Store Status</span>
            <span style={{ color: '#F7D070', fontWeight: 700 }}>100% Operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
