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
  Award,
  Filter,
  Calendar,
  HelpCircle,
  Video,
  ExternalLink,
  ChevronDown,
  Layers,
  BookMarked
} from 'lucide-react';

export default function OverviewTab({ 
  kpiMetrics, 
  inventory, 
  salesTimeline, 
  recentTransactions, 
  goals, 
  setActiveTab,
  onOpenAddModal 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedFulfillment, setSelectedFulfillment] = useState('All');
  const [selectedPayment, setSelectedPayment] = useState('All');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Top 8 3D Color Metric Cards Grid (Obsidian Gold & Emerald Theme) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem'
      }}>
        {/* Row 1 Card 1: Total Store Revenue */}
        <div className="card-3d-depth card-3d-gold" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Total Store Revenue</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>LKR {(kpiMetrics.totalRevenue / 1000000).toFixed(2)}M</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '2px' }}>
            <ArrowUpRight size={14} /> {kpiMetrics.revenueGrowth} vs last month
          </span>
        </div>

        {/* Row 1 Card 2: Total Books Sold */}
        <div className="card-3d-depth card-3d-emerald" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Total Books Sold</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>{(kpiMetrics.totalSells).toLocaleString()} Copies</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '2px' }}>
            <ArrowUpRight size={14} /> {kpiMetrics.sellsGrowth} reader demand
          </span>
        </div>

        {/* Row 1 Card 3: Active Inventory */}
        <div className="card-3d-depth card-3d-blue" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Active Inventory Stock</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>{(kpiMetrics.activeInventory).toLocaleString()} Units</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9 }}>{inventory.length} Titles in catalogue</span>
        </div>

        {/* Row 1 Card 4: Sanctuary Readers */}
        <div className="card-3d-depth card-3d-purple" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Sanctuary Readers</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>{(kpiMetrics.sanctuaryMembers).toLocaleString()}</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '2px' }}>
            <ArrowUpRight size={14} /> {kpiMetrics.memberGrowth} mobile users
          </span>
        </div>

        {/* Row 2 Card 5: Avg Order Value */}
        <div className="card-3d-depth card-3d-gold" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Avg Order Value</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>LKR {kpiMetrics.averageOrderValue.toLocaleString()}</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9 }}>per reader transaction</span>
        </div>

        {/* Row 2 Card 6: Bestseller Revenue */}
        <div className="card-3d-depth card-3d-emerald" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Bestseller Revenue</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>LKR 823.2K</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9 }}>Mandodari (420 copies sold)</span>
        </div>

        {/* Row 2 Card 7: Low Stock Alerts */}
        <div className="card-3d-depth card-3d-amber" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Stock Restock Alerts</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>{kpiMetrics.lowStockAlerts} Low / {kpiMetrics.outOfStockAlerts} Sold Out</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9 }}>Requires stock reorder</span>
        </div>

        {/* Row 2 Card 8: Operational Health */}
        <div className="card-3d-depth card-3d-teal" style={{ padding: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Sanctuary Health</span>
          <h3 style={{ fontSize: '1.75rem', margin: '0.2rem 0 0.1rem 0', fontWeight: 800 }}>93.8%</h3>
          <span style={{ fontSize: '0.74rem', opacity: 0.9 }}>In-Stock Operational Health</span>
        </div>
      </div>

      {/* Main Template 3-Column Grid matching reference image layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2.3fr 1.6fr 1.1fr',
        gap: '1.25rem'
      }}>

        {/* Column 1: Dual Trend Area Charts (Left) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Sales Revenue Velocity (Last 12 Months / Weekly) */}
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h4 className="heading-serif" style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-main)' }}>
                  Sales Revenue & Order Velocity
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Daily revenue trajectory across BOOKCASE Sanctuary
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.78rem', fontWeight: 600 }}>
                <span style={{ color: '#F7D070', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F7D070' }} /> Sales Revenue (LKR)
                </span>
                <span style={{ color: '#34D399', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34D399' }} /> Copies Sold
                </span>
              </div>
            </div>

            {/* SVG Dual-Line Trend Chart in Obsidian Gold Theme */}
            <div style={{ position: 'relative', width: '100%', height: '180px' }}>
              <svg width="100%" height="100%" viewBox="0 0 500 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="goldAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4A017" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#D4A017" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="emeraldAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Gridlines */}
                <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(212, 160, 23, 0.12)" strokeDasharray="3 3" />
                <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(212, 160, 23, 0.12)" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(212, 160, 23, 0.12)" strokeDasharray="3 3" />

                {/* Area 1: Revenue (LKR) */}
                <path d="M 0,130 L 70,115 L 140,85 L 210,95 L 285,45 L 360,20 L 435,35 L 500,40 L 500,150 L 0,150 Z" fill="url(#goldAreaGrad)" />
                <path d="M 0,130 L 70,115 L 140,85 L 210,95 L 285,45 L 360,20 L 435,35 L 500,40" fill="none" stroke="#F7D070" strokeWidth="3" />

                {/* Area 2: Copies Sold */}
                <path d="M 0,135 L 70,105 L 140,75 L 210,88 L 285,60 L 360,35 L 435,50 L 500,55 L 500,150 L 0,150 Z" fill="url(#emeraldAreaGrad)" />
                <path d="M 0,135 L 70,105 L 140,75 L 210,88 L 285,60 L 360,35 L 435,50 L 500,55" fill="none" stroke="#34D399" strokeWidth="2.5" />
              </svg>

              <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '0.68rem', color: 'var(--text-muted)' }}>450K LKR</div>
              <div style={{ position: 'absolute', top: '70px', left: 0, fontSize: '0.68rem', color: 'var(--text-muted)' }}>250K LKR</div>
              <div style={{ position: 'absolute', bottom: 10, left: 0, fontSize: '0.68rem', color: 'var(--text-muted)' }}>0K</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <span>Mon (145k)</span>
              <span>Tue (168k)</span>
              <span>Wed (210k)</span>
              <span>Thu (195k)</span>
              <span>Fri (310k)</span>
              <span>Sat (420k Peak)</span>
              <span>Sun (380k)</span>
            </div>
          </div>

          {/* Revenue Projection & Goals Forecast (Future 12 Months) */}
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h4 className="heading-serif" style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-main)' }}>
                  Revenue Projection & Goal Milestones
                </h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Forecast trajectory vs Q3/Q4 executive goals
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.78rem', fontWeight: 600 }}>
                <span style={{ color: '#F7D070', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F7D070' }} /> Projected (LKR)
                </span>
                <span style={{ color: '#38BDF8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38BDF8' }} /> Goal Target
                </span>
              </div>
            </div>

            <div style={{ position: 'relative', width: '100%', height: '180px' }}>
              <svg width="100%" height="100%" viewBox="0 0 500 160" preserveAspectRatio="none">
                <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(212, 160, 23, 0.12)" strokeDasharray="3 3" />
                <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(212, 160, 23, 0.12)" strokeDasharray="3 3" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(212, 160, 23, 0.12)" strokeDasharray="3 3" />

                <path d="M 0,130 L 80,85 L 160,65 L 240,40 L 320,55 L 400,25 L 500,20" fill="none" stroke="#F7D070" strokeWidth="3" />
                <path d="M 0,135 L 80,95 L 160,75 L 240,60 L 320,70 L 400,40 L 500,35" fill="none" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="5 5" />
              </svg>

              <div style={{ position: 'absolute', top: 0, left: 0, fontSize: '0.68rem', color: 'var(--text-muted)' }}>6.0M LKR</div>
              <div style={{ position: 'absolute', top: '70px', left: 0, fontSize: '0.68rem', color: 'var(--text-muted)' }}>4.0M LKR</div>
              <div style={{ position: 'absolute', bottom: 10, left: 0, fontSize: '0.68rem', color: 'var(--text-muted)' }}>0M</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <span>Jul 2026</span>
              <span>Aug 2026</span>
              <span>Sep 2026</span>
              <span>Oct 2026</span>
              <span>Nov 2026</span>
              <span>Dec 2026</span>
            </div>
          </div>
        </div>

        {/* Column 2: Dual 3D Glass Donut Charts (Center Column) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Sales Share by Category & Genre */}
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 className="heading-serif" style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', alignSelf: 'flex-start', color: 'var(--text-main)' }}>
              Sales Share by Category & Genre
            </h4>

            {/* 3D Glass Donut Chart */}
            <div style={{ position: 'relative', width: '210px', height: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="210" height="210" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" fill="none" stroke="#D4A017" strokeWidth="30" strokeDasharray="141 299" strokeDashoffset="0" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#10B981" strokeWidth="30" strokeDasharray="105 335" strokeDashoffset="-141" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#3B82F6" strokeWidth="30" strokeDasharray="79 361" strokeDashoffset="-246" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#8B5CF6" strokeWidth="30" strokeDasharray="61 379" strokeDashoffset="-325" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#EC4899" strokeWidth="30" strokeDasharray="53 387" strokeDashoffset="-386" />
              </svg>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>1,842 Sold</span>
                <strong style={{ fontSize: '1.2rem', color: '#F7D070' }}>100% Share</strong>
              </div>
            </div>

            {/* Legend matching BOOKCASE genres */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', width: '100%', marginTop: '1rem', fontSize: '0.78rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#D4A017', fontWeight: 700 }}>■</span> Novels & Literature</span>
                <strong style={{ color: '#F7D070' }}>32% (589)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#10B981', fontWeight: 700 }}>■</span> Education & Exams</span>
                <strong style={{ color: '#34D399' }}>24% (442)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#3B82F6', fontWeight: 700 }}>■</span> Translations</span>
                <strong style={{ color: '#60A5FA' }}>18% (331)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#8B5CF6', fontWeight: 700 }}>■</span> Sci-Fi & Fantasy</span>
                <strong style={{ color: '#C084FC' }}>14% (258)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#EC4899', fontWeight: 700 }}>■</span> Poetry & Arts</span>
                <strong style={{ color: '#F472B6' }}>12% (222)</strong>
              </div>
            </div>
          </div>

          {/* Inventory Catalog Health Breakdown */}
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 className="heading-serif" style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', alignSelf: 'flex-start', color: 'var(--text-main)' }}>
              Inventory Stock Health
            </h4>

            <div style={{ position: 'relative', width: '210px', height: '210px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="210" height="210" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="70" fill="none" stroke="#10B981" strokeWidth="30" strokeDasharray="360 80" strokeDashoffset="0" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#F59E0B" strokeWidth="30" strokeDasharray="52 388" strokeDashoffset="-360" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="#EF4444" strokeWidth="30" strokeDasharray="26 414" strokeDashoffset="-412" />
              </svg>
              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block' }}>Operational</span>
                <strong style={{ fontSize: '1.2rem', color: '#34D399' }}>93.8%</strong>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', width: '100%', marginTop: '1rem', fontSize: '0.78rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#10B981', fontWeight: 700 }}>■</span> In Stock Titles</span>
                <strong style={{ color: '#34D399' }}>82% (3,485)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#F59E0B', fontWeight: 700 }}>■</span> Low Stock Warning</span>
                <strong style={{ color: '#FBBF24' }}>12% (510)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span><span style={{ color: '#EF4444', fontWeight: 700 }}>■</span> Sold Out Reorder</span>
                <strong style={{ color: '#FCA5A5' }}>6% (255)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Interactive Filter Sidebar & Bestseller Showcase (Right Column) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Report Date Filter Card */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-gold)', display: 'block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Filter Date Range
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.85rem' }}>
              <input type="text" value="2026-01-01" readOnly className="input-dark" style={{ width: '50%', padding: '0.35rem 0.5rem', fontSize: '0.75rem' }} />
              <input type="text" value="2026-07-27" readOnly className="input-dark" style={{ width: '50%', padding: '0.35rem 0.5rem', fontSize: '0.75rem' }} />
            </div>

            {/* Slider Control */}
            <div style={{ position: 'relative', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', margin: '1rem 0.25rem' }}>
              <div style={{ position: 'absolute', left: '10%', right: '15%', height: '100%', background: 'linear-gradient(90deg, #D4A017, #10B981)', borderRadius: '3px' }} />
              <div style={{ position: 'absolute', left: '10%', top: '-5px', width: '16px', height: '16px', borderRadius: '50%', background: '#F7D070', border: '2px solid #050c08', boxShadow: '0 0 10px rgba(212, 160, 23, 0.6)' }} />
              <div style={{ position: 'absolute', right: '15%', top: '-5px', width: '16px', height: '16px', borderRadius: '50%', background: '#34D399', border: '2px solid #050c08', boxShadow: '0 0 10px rgba(16, 185, 129, 0.6)' }} />
            </div>
          </div>

          {/* Filter Selectors Card */}
          <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Category & Genre</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="input-dark" style={{ width: '100%', padding: '0.45rem 0.65rem', fontSize: '0.8rem' }}>
                <option value="All">All Categories</option>
                <option value="Novels">Novels & Literature</option>
                <option value="Education">Education & Exams</option>
                <option value="Translations">Translations</option>
                <option value="Sci-Fi">Sci-Fi & Fantasy</option>
                <option value="Poetry">Poetry & Arts</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Stock Status</label>
              <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="input-dark" style={{ width: '100%', padding: '0.45rem 0.65rem', fontSize: '0.8rem' }}>
                <option value="All">All Statuses</option>
                <option value="In-Stock">🟢 In Stock</option>
                <option value="Low-Stock">🟡 Low Stock</option>
                <option value="Out-of-Stock">🔴 Sold Out</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Payment Method</label>
              <select value={selectedPayment} onChange={(e) => setSelectedPayment(e.target.value)} className="input-dark" style={{ width: '100%', padding: '0.45rem 0.65rem', fontSize: '0.8rem' }}>
                <option value="All">All Payment Methods</option>
                <option value="Credit Card">Credit Card (Visa/Master)</option>
                <option value="Online Banking">Online Banking</option>
                <option value="COD">Cash on Delivery</option>
                <option value="Koko Pay">Koko Pay</option>
              </select>
            </div>
          </div>

          {/* #1 Bestseller Highlight Showcase Card */}
          <div className="glass-card-emerald" style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Award size={16} color="#F7D070" />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-gold)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                #1 Bestseller Title
              </span>
            </div>
            <h5 className="heading-serif" style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>
              Mandodari (මන්දෝදරී)
            </h5>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>by Mohan Raj Madawala</span>
            
            <div className="sidebar-sub-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', marginTop: '0.25rem' }}>
              <span style={{ color: '#F7D070', fontWeight: 700 }}>420 Copies Sold</span>
              <span style={{ color: '#34D399', fontWeight: 600 }}>🟢 142 In Stock</span>
            </div>

            <button onClick={() => setActiveTab('inventory')} className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', marginTop: '0.25rem' }}>
              Manage Inventory Title
            </button>
          </div>

          {/* Have questions? Support Guide Box */}
          <div className="glass-card" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #10B981, #D4A017)', color: '#050c08', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.82rem' }}>
                BO
              </div>
              <div>
                <h5 style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 700 }}>Have questions?</h5>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>BOOKCASE Sanctuary Guide</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.78rem' }}>
              <a href="#setup" onClick={onOpenAddModal} style={{ color: 'var(--text-gold)', textDecoration: 'none', fontWeight: 600 }}>
                📖 Dashboard Setup Guide
              </a>
              <a href="#demo" onClick={() => setActiveTab('sales')} style={{ color: '#34D399', textDecoration: 'none', fontWeight: 600 }}>
                📊 Revenue Analytics Demo
              </a>
              <a href="#support" onClick={() => setActiveTab('inventory')} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>
                💬 Contact Sanctuary Support
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
