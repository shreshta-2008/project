import React from 'react';

const trendData = [
  { role: "AI Engineer", growth: 45, salaryMin: 10, salaryMax: 22 },
  { role: "Cloud Engineer", growth: 35, salaryMin: 8, salaryMax: 18 },
  { role: "Frontend Dev", growth: 28, salaryMin: 6, salaryMax: 12 },
  { role: "Full Stack Dev", growth: 30, salaryMin: 7, salaryMax: 15 },
];

export default function Trends() {
  return (
    <div className="dashboard">
      <div className="hero" style={{ textAlign: 'left', padding: '20px' }}>
        <h1 className="brand">CareerPulse 📊</h1>
        <p className="tagline">Live job market insights & trending skills</p>
      </div>

      <div className="trend-grid">
        {trendData.map((item, index) => (
          <div key={index} className="trend-card graph-style">
            <h3>{item.role}</h3>
            
            {/* Growth Graph Section */}
            <div className="graph-section">
              <div className="graph-label">
                <span>Growth</span>
                <span className="growth-text">+{item.growth}%</span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill" style={{ width: `${item.growth}%` }}></div>
              </div>
            </div>

            {/* Salary Graph Section */}
            <div className="graph-section">
              <div className="graph-label">
                <span>Salary Range</span>
                <span>₹{item.salaryMin}–{item.salaryMax} LPA</span>
              </div>
              <div className="salary-bar-container">
                {/* Visualizing where the salary sits on a 0-30 scale */}
                <div 
                  className="salary-range-fill" 
                  style={{ 
                    left: `${(item.salaryMin / 30) * 100}%`, 
                    width: `${((item.salaryMax - item.salaryMin) / 30) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}