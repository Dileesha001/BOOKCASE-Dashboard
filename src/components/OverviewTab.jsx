import React, { useState } from 'react';
import { 
  DollarSign, 
  BookOpen, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle,
  Package,
  Award
} from 'lucide-react';

export default function OverviewTab({ kpiMetrics, inventory, salesTimeline, recentTransactions, goals, setActiveTab }) {
  const [hoveredBarIndex, setHoveredBarIndex] = useState(null);

  // Calculate max for sales bar scaling
  const maxRevenue = Math.max(...salesTimeline.daily.map(d => d.revenue));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* KPI Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem'
      }}>
        {/* Metric 1: Total Revenue */}
        <div className="glass-card" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            width: '100px', 
            height: '100px', 
            background: 'radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%)' 
          }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Total Revenue
              </span>
              <h3 className="gold-gradient-text" style={{ fontSize: '1.8rem', margin: '0.3rem 0 0.2rem 0', fontWeight: 700 }}>
                LKR {(kpiMetrics.totalRevenue).toLocaleString()}
              </h3>
            </div>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(212, 160, 23, 0.15)',
              border: '1px solid rgba(212, 160, 23, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <DollarSign size={22} color="#F7D070" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.85rem', fontSize: '0.8rem' }}>
            <span style={{ color: '#34D399', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
              <ArrowUpRight size={15} /> {kpiMetrics.revenueGrowth}
            </span>
            <span style={{ color: 'var(--text-dim)' }}>vs last month</span>
          </div>
        </div>

        {/* Metric 2: Books Sold */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Total Books Sold
              </span>
              <h3 style={{ fontSize: '1.8rem', margin: '0.3rem 0 0.2rem 0', fontWeight: 700, color: '#FFF' }}>
                {(kpiMetrics.totalSells).toLocaleString()} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Copies</span>
              </h3>
            </div>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShoppingBag size={22} color="#34D399" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.85rem', fontSize: '0.8rem' }}>
            <span style={{ color: '#34D399', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
              <ArrowUpRight size={15} /> {kpiMetrics.sellsGrowth}
            </span>
            <span style={{ color: 'var(--text-dim)' }}>high reader demand</span>
          </div>
        </div>

        {/* Metric 3: Active Stock Inventory */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Active Inventory Stock
              </span>
              <h3 style={{ fontSize: '1.8rem', margin: '0.3rem 0 0.2rem 0', fontWeight: 700, color: '#FFF' }}>
                {(kpiMetrics.activeInventory).toLocaleString()} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Units</span>
              </h3>
            </div>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BookOpen size={22} color="#60A5FA" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.85rem', fontSize: '0.8rem' }}>
            <span className="badge badge-amber" style={{ padding: '2px 8px' }}>
              {kpiMetrics.lowStockAlerts} Low Stock
            </span>
            <span className="badge badge-crimson" style={{ padding: '2px 8px' }}>
              {kpiMetrics.outOfStockAlerts} Out
            </span>
          </div>
        </div>

        {/* Metric 4: Sanctuary Readers */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Sanctuary Readers
              </span>
              <h3 style={{ fontSize: '1.8rem', margin: '0.3rem 0 0.2rem 0', fontWeight: 700, color: '#FFF' }}>
                {(kpiMetrics.sanctuaryMembers).toLocaleString()}
              </h3>
            </div>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={22} color="#A78BFA" />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.85rem', fontSize: '0.8rem' }}>
            <span style={{ color: '#34D399', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
              <ArrowUpRight size={15} /> {kpiMetrics.memberGrowth}
            </span>
            <span style={{ color: 'var(--text-dim)' }}>active mobile readers</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Revenue Bar Chart & Sanctuary Spotlight Banner */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '1.5rem'
      }}>
        
        {/* Weekly Revenue Visualizer */}
        <div className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h3 className="heading-serif" style={{ fontSize: '1.2rem', margin: 0 }}>
                Weekly Sales Revenue Velocity
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                Daily sales distribution across BOOKCASE literary sanctuary
              </p>
            </div>
            <button onClick={() => setActiveTab('sales')} className="btn-outline" style={{ fontSize: '0.78rem', padding: '0.4rem 0.85rem' }}>
              Full Analytics <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Interactive CSS Bar Chart */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            height: '220px',
            paddingTop: '2rem',
            gap: '1rem',
            borderBottom: '1px solid rgba(212, 160, 23, 0.2)'
          }}>
            {salesTimeline.daily.map((item, idx) => {
              const heightPct = Math.round((item.revenue / maxRevenue) * 100);
              const isHovered = hoveredBarIndex === idx;

              return (
                <div 
                  key={item.label}
                  onMouseEnter={() => setHoveredBarIndex(idx)}
                  onMouseLeave={() => setHoveredBarIndex(null)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.65rem',
                    height: '100%',
                    justifyContent: 'flex-end',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <div className="glass-card" style={{
                      position: 'absolute',
                      top: '-45px',
                      padding: '0.4rem 0.65rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                      border: '1px solid var(--gold-primary)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.6)'
                    }}>
                      <div style={{ color: 'var(--text-gold)', fontWeight: 600 }}>LKR {item.revenue.toLocaleString()}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.68rem' }}>{item.orders} Orders</div>
                    </div>
                  )}

                  {/* Bar */}
                  <div style={{
                    width: '100%',
                    maxWidth: '42px',
                    height: `${heightPct}%`,
                    background: isHovered 
                      ? 'linear-gradient(180deg, #F7D070 0%, #D4A017 100%)' 
                      : 'linear-gradient(180deg, #10B981 0%, #054E3B 100%)',
                    borderRadius: '8px 8px 0 0',
                    transition: 'all 0.25s ease',
                    boxShadow: isHovered ? '0 0 15px rgba(212, 160, 23, 0.6)' : 'none'
                  }} />

                  <span style={{ fontSize: '0.78rem', color: isHovered ? '#F7D070' : 'var(--text-muted)', fontWeight: isHovered ? 600 : 400 }}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Peak Day: <strong>Saturday (LKR 420,000)</strong></span>
            <span>Average Daily: <strong>LKR 262,571</strong></span>
          </div>
        </div>

        {/* Sanctuary Bestseller Highlight Showcase Card */}
        <div className="glass-card-emerald" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Award size={18} color="#F7D070" />
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              #1 Bestseller Highlight
            </span>
          </div>

          <h3 className="heading-serif" style={{ fontSize: '1.3rem', color: '#FFF', margin: '0.2rem 0' }}>
            Mandodari (මන්දෝදරී)
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            by Mohan Raj Madawala
          </p>

          <div style={{ margin: '1rem 0', padding: '0.85rem', background: 'rgba(5, 12, 8, 0.6)', borderRadius: '10px', border: '1px solid rgba(212, 160, 23, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Sells</span>
              <strong style={{ color: '#F7D070' }}>420 Copies</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.35rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Current Price</span>
              <strong>LKR 1,960 <span style={{ textDecoration: 'line-through', color: '#6B7280', fontSize: '0.7rem' }}>2,450</span></strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>Stock Status</span>
              <span style={{ color: '#34D399', fontWeight: 600 }}>🟢 142 In Stock</span>
            </div>
          </div>

          <button onClick={() => setActiveTab('inventory')} className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
            Manage Inventory Item
          </button>
        </div>
      </div>

      {/* Lower Row: Recent Transactions Table & Goal Progress Overview */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.8fr 1fr',
        gap: '1.5rem'
      }}>
        {/* Recent Transactions */}
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.15rem', margin: 0 }}>
              Recent Sanctuary Sales
            </h3>
            <button onClick={() => setActiveTab('sales')} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}>
              View All Orders
            </button>
          </div>

          <table className="custom-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Book Title</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.slice(0, 4).map((tx) => (
                <tr key={tx.id}>
                  <td style={{ fontWeight: 600, color: 'var(--text-gold)' }}>{tx.id}</td>
                  <td>{tx.customer}</td>
                  <td style={{ color: '#FFF' }}>{tx.bookTitle}</td>
                  <td style={{ fontWeight: 600 }}>LKR {tx.total.toLocaleString()}</td>
                  <td>
                    <span className={`badge ${tx.status === 'Completed' ? 'badge-emerald' : 'badge-amber'}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Goals Progress Mini Panel */}
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.15rem', margin: 0 }}>
              Owner Goals Track
            </h3>
            <button onClick={() => setActiveTab('goals')} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}>
              Goal Board
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {goals.slice(0, 3).map((goal) => (
              <div key={goal.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 500, color: '#FFF' }}>{goal.title}</span>
                  <span style={{ color: 'var(--text-gold)', fontWeight: 600 }}>{goal.percentage}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className={`progress-bar-fill ${goal.percentage > 85 ? 'progress-emerald' : 'progress-gold'}`}
                    style={{ width: `${goal.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
