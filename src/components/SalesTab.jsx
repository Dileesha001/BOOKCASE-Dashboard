import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  ShoppingBag, 
  Download, 
  Filter, 
  BarChart2, 
  PieChart, 
  Layers, 
  Calendar,
  Award,
  ArrowUpRight
} from 'lucide-react';

export default function SalesTab({ 
  salesTimeline, 
  genreDistribution, 
  inventory, 
  recentTransactions, 
  searchTerm 
}) {
  const [timeframe, setTimeframe] = useState('daily');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const currentTimelineData = salesTimeline[timeframe] || salesTimeline.daily;
  const maxRevenue = Math.max(...currentTimelineData.map(d => d.revenue));

  // Filter transactions
  const filteredTransactions = recentTransactions.filter(tx => {
    const matchesSearch = 
      tx.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Calculate top selling books from inventory sorted by salesCount
  const topSellers = [...inventory].sort((a, b) => b.salesCount - a.salesCount).slice(0, 5);

  const handleExportCSV = () => {
    const headers = "Order ID,Customer,Book Title,Quantity,Total (LKR),Payment Method,Status,Date\n";
    const rows = filteredTransactions.map(t => 
      `"${t.id}","${t.customer}","${t.bookTitle}",${t.qty},${t.total},"${t.paymentMethod}","${t.status}","${t.date}"`
    ).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BOOKCASE_Sales_Report_${timeframe}_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header Controls Bar */}
      <div style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h3 className="heading-serif" style={{ fontSize: '1.4rem', margin: 0 }}>
            Sales Performance & Financial Velocity
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Comprehensive analysis of store sells, revenue streams, and genre breakdown
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Timeframe Selector */}
          <div style={{
            display: 'flex',
            background: 'rgba(5, 12, 8, 0.8)',
            padding: '3px',
            borderRadius: '12px',
            border: '1px solid rgba(212, 160, 23, 0.25)'
          }}>
            {['daily', 'weekly', 'monthly'].map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                style={{
                  background: timeframe === tf ? 'var(--gold-primary)' : 'transparent',
                  color: timeframe === tf ? '#050c08' : 'var(--text-muted)',
                  fontWeight: timeframe === tf ? 700 : 500,
                  border: 'none',
                  padding: '0.45rem 1rem',
                  borderRadius: '9px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s ease'
                }}
              >
                {tf}
              </button>
            ))}
          </div>

          <button onClick={handleExportCSV} className="btn-emerald" style={{ fontSize: '0.82rem' }}>
            <Download size={15} /> Export CSV Report
          </button>
        </div>
      </div>

      {/* Main Graph Card */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
              Revenue Trend ({timeframe.toUpperCase()})
            </span>
            <h4 className="heading-display" style={{ fontSize: '1.5rem', margin: '0.2rem 0' }}>
              LKR {currentTimelineData.reduce((acc, curr) => acc + curr.revenue, 0).toLocaleString()}
            </h4>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#10B981', flexShrink: 0 }} />
              <span>Sales Revenue (LKR)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#D4A017', flexShrink: 0 }} />
              <span>Book Units Sold</span>
            </div>
          </div>
        </div>

        {/* Dynamic Chart Grid */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          height: '260px',
          gap: '1.25rem',
          paddingTop: '2rem',
          borderBottom: '1px solid rgba(212, 160, 23, 0.2)'
        }}>
          {currentTimelineData.map((point) => {
            const barHeight = Math.round((point.revenue / maxRevenue) * 100);
            return (
              <div key={point.label} style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                height: '100%',
                justifyContent: 'flex-end'
              }}>
                <div style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-gold)',
                  fontWeight: 600
                }}>
                  {(point.revenue / 1000).toFixed(0)}k
                </div>

                <div style={{
                  width: '100%',
                  maxWidth: '56px',
                  height: `${barHeight}%`,
                  background: 'linear-gradient(180deg, #10B981 0%, #064E3B 100%)',
                  borderRadius: '8px 8px 0 0',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)',
                  transition: 'height 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }} />

                <span style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 500 }}>
                  {point.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid: Genre Share & Top Selling Leaderboard */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }}>
        {/* Genre Share Breakdown */}
        <div className="glass-card card-flex" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h4 className="heading-serif" style={{ fontSize: '1.15rem', margin: 0 }}>
              Sales Share by Category & Genre
            </h4>
            <PieChart size={18} color="var(--text-gold)" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'center' }}>
            {genreDistribution.map((item) => (
              <div key={item.genre}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                  <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{item.genre}</span>
                  <span style={{ color: item.color, fontWeight: 700 }}>{item.percentage}% ({item.sales} sold)</span>
                </div>
                <div className="progress-bar-bg">
                  <div 
                    className="progress-bar-fill"
                    style={{ width: `${item.percentage}%`, background: item.color, boxShadow: `0 0 10px ${item.color}` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top 5 Bestsellers Leaderboard */}
        <div className="glass-card card-flex" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h4 className="heading-serif" style={{ fontSize: '1.15rem', margin: 0 }}>
              Top Selling Titles Leaderboard
            </h4>
            <Award size={18} color="#F7D070" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {topSellers.map((book, index) => (
              <div key={book.id} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '10px',
                border: '1px solid rgba(212, 160, 23, 0.15)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: index === 0 ? 'var(--gold-primary)' : 'rgba(255,255,255,0.1)',
                    color: index === 0 ? '#050c08' : 'var(--text-main)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    #{index + 1}
                  </div>
                  <div>
                    <h5 style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-main)' }}>{book.title}</h5>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{book.author} • {book.category}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <strong style={{ color: '#F7D070', fontSize: '0.9rem' }}>{book.salesCount} sold</strong>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    LKR {(book.salesCount * book.price).toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Complete Transactions Table */}
      <div className="glass-card" style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h4 className="heading-serif" style={{ fontSize: '1.2rem', margin: 0 }}>
            Sanctuary Sales Log ({filteredTransactions.length} Transactions)
          </h4>
          {searchTerm && (
            <span className="badge badge-gold">Filtering by: "{searchTerm}"</span>
          )}
        </div>

        <table className="custom-table">
          <thead>
            <tr>
              <th className="text-left">Order ID</th>
              <th className="text-left">Date & Time</th>
              <th className="text-left">Customer Name</th>
              <th className="text-left">Book Title Purchased</th>
              <th className="text-center">Qty</th>
              <th className="text-left">Payment Method</th>
              <th className="text-right">Total Amount</th>
              <th className="text-center">Fulfillment</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((tx) => (
              <tr key={tx.id}>
                <td className="text-left" style={{ fontWeight: 600, color: 'var(--text-gold)' }}>{tx.id}</td>
                <td className="text-left" style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{tx.date}</td>
                <td className="text-left" style={{ fontWeight: 500 }}>{tx.customer}</td>
                <td className="text-left" style={{ color: 'var(--text-main)' }}>{tx.bookTitle}</td>
                <td className="text-center">{tx.qty}</td>
                <td className="text-left">
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{tx.paymentMethod}</span>
                </td>
                <td className="text-right" style={{ fontWeight: 700, color: '#34D399' }}>LKR {tx.total.toLocaleString()}</td>
                <td className="text-center">
                  <span className={`badge ${tx.status === 'Completed' ? 'badge-emerald' : 'badge-amber'}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
