import React, { useState } from 'react';
import { Search, Bell, Plus, Calendar, ShieldCheck, UserCheck, ChevronDown, CheckCircle } from 'lucide-react';

export default function Header({ 
  activeTab, 
  searchTerm, 
  setSearchTerm, 
  onOpenAddModal, 
  notificationsCount,
  outOfStockCount 
}) {
  const [showNotifications, setShowNotifications] = useState(false);

  const titleMap = {
    overview: 'Executive Overview',
    sales: 'Sales & Revenue Analytics',
    inventory: 'Inventory & Stock Sanctuary',
    goals: 'Progress & Goal Milestones'
  };

  const todayStr = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <header style={{
      padding: '1.25rem 2rem',
      background: 'rgba(5, 12, 8, 0.8)',
      borderBottom: '1px solid rgba(212, 160, 23, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(16px)'
    }}>
      <div className="header-inner">
        {/* Active Tab Heading & Subtitle */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="heading-display" style={{ fontSize: '1.4rem', margin: 0, lineHeight: 1.2 }}>
            {titleMap[activeTab] || 'Dashboard'}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
            <Calendar size={13} color="var(--text-muted)" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1 }}>
              {todayStr} • Live Store Data Sync
            </span>
          </div>
        </div>

        {/* Center Search Input */}
        <div style={{ position: 'relative', width: '340px', display: 'flex', alignItems: 'center' }}>
          <Search 
            size={18} 
            color="#9CA3AF" 
            style={{ position: 'absolute', left: '0.85rem', pointerEvents: 'none' }} 
          />
          <input
            type="text"
            placeholder="Search sales, books, orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-dark"
            style={{
              width: '100%',
              paddingLeft: '2.6rem',
              fontSize: '0.85rem',
              borderRadius: '20px'
            }}
          />
        </div>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {/* Quick Add Book Action Button */}
          <button 
            onClick={onOpenAddModal}
            className="btn-gold"
            style={{ fontSize: '0.85rem' }}
          >
            <Plus size={16} />
            <span>Add Book</span>
          </button>

          {/* Notifications Drawer Toggle */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(212, 160, 23, 0.25)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                position: 'relative'
              }}
            >
              <Bell size={18} />
              {notificationsCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  background: 'var(--crimson-alert)',
                  color: '#FFF',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  width: '18px',
                  height: '18px',
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
                top: '50px',
                width: '320px',
                padding: '1rem',
                zIndex: 200,
                boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: '0.85rem',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '0.5rem'
                }}>
                  <span style={{ fontWeight: 600, fontSize: '0.88rem' }}>Store Alerts</span>
                  <span className="badge badge-gold">Real-time</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.8rem' }}>
                    <div className="pulse-dot crimson" style={{ marginTop: '4px', flexShrink: 0 }}></div>
                    <div>
                      <strong style={{ color: '#FCA5A5' }}>{outOfStockCount} Titles Sold Out</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '2px 0 0 0' }}>
                        Requires stock reorder for Silent Sanctuary & Kingdom Tales.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.8rem' }}>
                    <CheckCircle size={16} color="#34D399" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: '#34D399' }}>Daily Sales Target Hit!</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '2px 0 0 0' }}>
                        LKR 420,000 revenue reached today (+24% vs target).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Owner Profile Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.4rem 0.85rem 0.4rem 0.5rem',
            background: 'rgba(212, 160, 23, 0.08)',
            border: '1px solid rgba(212, 160, 23, 0.25)',
            borderRadius: '30px'
          }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #10B981, #D4A017)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: '#050c08',
              fontSize: '0.85rem',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
              flexShrink: 0
            }}>
              BO
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, lineHeight: 1.2 }}>
                BOOKCASE Owner
              </span>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-gold)', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '1px' }}>
                <ShieldCheck size={11} color="#F7D070" style={{ flexShrink: 0 }} /> Admin Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
