import React, { useState } from 'react';
import { Search, Bell, Plus, Calendar, ShieldCheck, BookMarked, CheckCircle, Sun, Moon } from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab,
  searchTerm, 
  setSearchTerm, 
  onOpenAddModal, 
  notificationsCount,
  outOfStockCount,
  theme,
  toggleTheme
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  const navPills = [
    { id: 'overview', label: 'Overview' },
    { id: 'sales', label: 'Sales & Revenue' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'goals', label: 'Goals & Growth' },
  ];

  const todayStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header style={{
      width: '100%',
      padding: '0.75rem 2rem',
      background: 'rgba(5, 12, 8, 0.95)',
      borderBottom: '1px solid rgba(212, 160, 23, 0.25)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
      boxSizing: 'border-box'
    }}>
      <div className="header-inner" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        maxWidth: '1600px',
        margin: '0 auto',
        width: '100%',
        gap: '1rem'
      }}>
        
        {/* Left Branding & Title Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(212, 160, 23, 0.25) 0%, rgba(16, 185, 129, 0.15) 100%)',
            border: '1px solid rgba(212, 160, 23, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 12px rgba(212, 160, 23, 0.2)',
            flexShrink: 0
          }}>
            <BookMarked size={19} color="var(--gold-light)" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <h2 className="heading-display gold-gradient-text" style={{ fontSize: '1.2rem', margin: 0, lineHeight: 1.1, letterSpacing: '0.04em', fontWeight: 800 }}>
                BOOKCASE SANCTUARY
              </h2>
              <span className="badge badge-gold" style={{ fontSize: '0.62rem', padding: '1px 6px', letterSpacing: '0.04em' }}>
                CRM EXECUTIVE
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.12rem' }}>
              <Calendar size={11} color="var(--text-gold)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {todayStr} • Sanctuary Suite
              </span>
            </div>
          </div>
        </div>

        {/* Center Search Input */}
        <div style={{ position: 'relative', width: '260px', display: 'flex', alignItems: 'center', flexShrink: 1 }}>
          <Search 
            size={15} 
            color="var(--gold-primary)" 
            style={{ position: 'absolute', left: '0.85rem', pointerEvents: 'none' }} 
          />
          <input
            type="text"
            placeholder="Search catalog, orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-dark"
            style={{
              width: '100%',
              paddingLeft: '2.4rem',
              paddingRight: '2.4rem',
              fontSize: '0.8rem',
              borderRadius: '20px',
              border: '1px solid rgba(212, 160, 23, 0.3)',
              boxSizing: 'border-box'
            }}
          />
          <kbd style={{
            position: 'absolute',
            right: '0.7rem',
            background: 'rgba(212, 160, 23, 0.15)',
            border: '1px solid rgba(212, 160, 23, 0.3)',
            borderRadius: '4px',
            padding: '1px 5px',
            fontSize: '0.62rem',
            color: 'var(--text-gold)',
            fontFamily: 'monospace',
            pointerEvents: 'none'
          }}>
            ⌘K
          </kbd>
        </div>

        {/* Right Navigation Pills, Add Action, Theme Toggle & Bell */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          
          {/* Sleek Pill Navigation Bar */}
          {setActiveTab && (
            <div className="nav-pills-container" style={{ padding: '3px', flexShrink: 0 }}>
              {navPills.map(pill => (
                <button
                  key={pill.id}
                  onClick={() => setActiveTab(pill.id)}
                  className={`nav-pill-btn ${activeTab === pill.id ? 'active' : ''}`}
                  style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.45rem 0.95rem', 
                    whiteSpace: 'nowrap' 
                  }}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          )}

          {/* Action Button */}
          <button 
            onClick={onOpenAddModal}
            className="btn-gold"
            style={{ 
              fontSize: '0.8rem', 
              borderRadius: '20px', 
              padding: '0.5rem 1rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxShadow: '0 4px 14px rgba(212, 160, 23, 0.35)'
            }}
          >
            <Plus size={15} />
            <span>Setup Title</span>
          </button>

          {/* Theme Switcher Sun/Moon Toggle */}
          <button
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            style={{
              background: 'rgba(212, 160, 23, 0.12)',
              border: '1px solid rgba(212, 160, 23, 0.35)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-gold)',
              flexShrink: 0,
              transition: 'all 0.25s ease'
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="#F7D070" /> : <Moon size={17} color="#B8860B" />}
          </button>

          {/* Notifications Drawer Toggle */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(212, 160, 23, 0.3)',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                position: 'relative'
              }}
            >
              <Bell size={16} color="var(--text-gold)" />
              {notificationsCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  background: 'var(--crimson-alert)',
                  color: '#FFF',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  width: '17px',
                  height: '17px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #050c08'
                }}>
                  {notificationsCount}
                </span>
              )}
            </button>

            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="glass-card" style={{
                position: 'absolute',
                right: 0,
                top: '46px',
                width: '310px',
                padding: '0.9rem',
                zIndex: 200,
                boxShadow: '0 10px 30px rgba(0,0,0,0.85)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '0.75rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '0.4rem'
                }}>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Store Alerts</span>
                  <span className="badge badge-gold">Real-time</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.78rem' }}>
                    <div className="pulse-dot crimson" style={{ marginTop: '4px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: '#FCA5A5' }}>{outOfStockCount} Titles Sold Out</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', margin: '2px 0 0 0' }}>
                        Requires stock reorder for catalogue items.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.78rem' }}>
                    <CheckCircle size={15} color="#34D399" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#34D399' }}>Daily Sales Target Hit!</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.72rem', margin: '2px 0 0 0' }}>
                        LKR 420,000 revenue reached today (+24% vs target).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}
