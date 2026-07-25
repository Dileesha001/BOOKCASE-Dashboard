import React, { useState } from 'react';
import { Target, CheckCircle2, AlertCircle, TrendingUp, Sparkles, Flag, Calendar, Plus } from 'lucide-react';

export default function GoalProgressTab({ goals, setGoals }) {
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTarget, setNewTarget] = useState('');
  const [newCategory, setNewCategory] = useState('Sales & Financials');

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newTitle || !newTarget) return;

    const newGoalObj = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
      current: 0,
      target: parseFloat(newTarget),
      unit: 'Target Units',
      percentage: 0,
      status: 'On Track',
      dueDate: '2026-10-31'
    };

    setGoals([...goals, newGoalObj]);
    setNewTitle('');
    setNewTarget('');
    setShowAddGoal(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h3 className="heading-serif" style={{ fontSize: '1.4rem', margin: 0 }}>
            Executive Goal & Progress Milestones
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
            Track strategic targets for revenue growth, inventory efficiency, and reader adoption
          </p>
        </div>

        <button onClick={() => setShowAddGoal(true)} className="btn-gold" style={{ fontSize: '0.85rem' }}>
          <Plus size={16} /> Set New Goal
        </button>
      </div>

      {/* Add Goal Modal */}
      {showAddGoal && (
        <div className="modal-overlay">
          <div className="glass-card" style={{ width: '100%', maxWidth: '480px', padding: '1.75rem' }}>
            <h3 className="heading-serif" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              Set Strategic Business Target
            </h3>

            <form onSubmit={handleAddGoal} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Goal Title
                </label>
                <input 
                  type="text"
                  placeholder="e.g. Q4 Revenue Target"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="input-dark"
                  style={{ width: '100%' }}
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Category
                </label>
                <select 
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="input-dark"
                  style={{ width: '100%' }}
                >
                  <option value="Sales & Financials">Sales & Financials</option>
                  <option value="Audience Growth">Audience Growth</option>
                  <option value="Digital Expansion">Digital Expansion</option>
                  <option value="Supply Chain">Supply Chain</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>
                  Numeric Target
                </label>
                <input 
                  type="number"
                  placeholder="e.g. 5000"
                  value={newTarget}
                  onChange={(e) => setNewTarget(e.target.value)}
                  className="input-dark"
                  style={{ width: '100%' }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', justifyContent: 'flex-end' }}>
                <button type="button" onClick={() => setShowAddGoal(false)} className="btn-outline">
                  Cancel
                </button>
                <button type="submit" className="btn-gold">
                  Create Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Goals Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {goals.map((goal) => (
          <div key={goal.id} className="glass-card card-flex" style={{ padding: '1.5rem', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>
                {goal.category}
              </span>
              <span className={`badge ${goal.status === 'On Track' ? 'badge-emerald' : 'badge-amber'}`}>
                {goal.status}
              </span>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', margin: '0 0 0.4rem 0', color: '#FFF' }}>
                {goal.title}
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                <Calendar size={13} style={{ flexShrink: 0 }} /> Target Date: {goal.dueDate}
              </div>
            </div>

            <div style={{ marginTop: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>
                  Current: <strong>{goal.current} {goal.unit}</strong>
                </span>
                <span style={{ color: 'var(--text-gold)', fontWeight: 700 }}>
                  Target: {goal.target} {goal.unit} ({goal.percentage}%)
                </span>
              </div>

              <div className="progress-bar-bg">
                <div 
                  className={`progress-bar-fill ${goal.percentage >= 80 ? 'progress-emerald' : 'progress-gold'}`}
                  style={{ width: `${goal.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Engagement Analytics */}
      <div className="glass-card" style={{ padding: '1.75rem' }}>
        <h4 className="heading-serif" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Reader Engagement & App Adoption Milestones
        </h4>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem'
        }}>
          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(212, 160, 23, 0.15)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Daily Active Readers</span>
            <h3 style={{ fontSize: '1.5rem', color: '#FFF', margin: '0.2rem 0' }}>3,420 Readers</h3>
            <span style={{ fontSize: '0.75rem', color: '#34D399' }}>+14% vs last week</span>
          </div>

          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(212, 160, 23, 0.15)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Reading Completion Rate</span>
            <h3 style={{ fontSize: '1.5rem', color: '#F7D070', margin: '0.2rem 0' }}>78.4%</h3>
            <span style={{ fontSize: '0.75rem', color: '#34D399' }}>High sanctuary engagement</span>
          </div>

          <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(212, 160, 23, 0.15)' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Mobile App Rating</span>
            <h3 style={{ fontSize: '1.5rem', color: '#FFF', margin: '0.2rem 0' }}>4.9 ★</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>From 1,280 reviews</span>
          </div>
        </div>
      </div>

    </div>
  );
}
