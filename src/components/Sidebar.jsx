import React from 'react';
import { 
  LayoutDashboard, 
  TrendingUp, 
  BookOpen, 
  Target, 
  Store, 
  Sparkles, 
  ShieldCheck, 
  BookMarked 
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, lowStockCount, totalBooks }) {
  const navItems = [
    { id: 'overview', label: 'Executive Overview', icon: LayoutDashboard },
    { id: 'sales', label: 'Sales & Revenue', icon: TrendingUp },
    { 
      id: 'inventory', 
      label: 'Inventory Catalog', 
      icon: BookOpen,
      badge: lowStockCount > 0 ? `${lowStockCount} Low` : null,
      badgeColor: 'amber'
    },
    { id: 'goals', label: 'Progress & Goals', icon: Target },
  ];

  return (
    <aside style={{
      width: '280px',
      background: 'rgba(5, 12, 8, 0.95)',
      borderRight: '1px solid rgba(212, 160, 23, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flexShrink: 0,
      backdropFilter: 'blur(20px)'
    }}>
      {/* Brand Header */}
      <div style={{
        padding: '1.75rem 1.5rem',
        borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem'
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #D4A017 0%, #050c08 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(212, 160, 23, 0.5)',
          boxShadow: '0 0 15px rgba(212, 160, 23, 0.3)'
        }}>
          <BookMarked size={24} color="#FFF" />
        </div>
        <div>
          <h1 className="heading-display" style={{ fontSize: '1.25rem', margin: 0, lineHeight: 1.1 }}>
            BOOKCASE
          </h1>
          <p style={{ 
            fontSize: '0.7rem', 
            color: 'var(--text-gold)', 
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginTop: '0.2rem',
            fontWeight: 600
          }}>
            Owner Executive Hub
          </p>
        </div>
      </div>

      {/* Navigation List */}
      <nav style={{ padding: '1.5rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{ 
          fontSize: '0.7rem', 
          color: 'var(--text-muted)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          padding: '0 0.75rem 0.5rem 0.75rem',
          fontWeight: 600
        }}>
          Main Command
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                border: isActive ? '1px solid rgba(212, 160, 23, 0.4)' : '1px solid transparent',
                background: isActive 
                  ? 'linear-gradient(90deg, rgba(212, 160, 23, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)' 
                  : 'transparent',
                color: isActive ? 'var(--text-gold)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Icon size={20} color={isActive ? '#F3C649' : '#9CA3AF'} />
                <span style={{ 
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '0.92rem',
                  letterSpacing: '0.01em'
                }}>
                  {item.label}
                </span>
              </div>
              {item.badge && (
                <span className={`badge badge-${item.badgeColor}`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Store Sanctuary Status */}
      <div style={{ padding: '1rem' }}>
        <div className="glass-card-emerald" style={{ padding: '1rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
            <div className="pulse-dot emerald"></div>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#34D399' }}>
              Sanctuary Live Online
            </span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
            Connected to <strong>{totalBooks} Titles</strong> across Sri Lanka.
          </p>
          <div style={{ 
            marginTop: '0.75rem', 
            paddingTop: '0.75rem', 
            borderTop: '1px solid rgba(16, 185, 129, 0.2)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.75rem'
          }}>
            <span style={{ color: 'var(--text-muted)' }}>Store Status</span>
            <span style={{ color: '#F7D070', fontWeight: 600 }}>100% Operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
