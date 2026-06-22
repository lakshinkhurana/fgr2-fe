"use client";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const mockDataTime = [
  { name: '08:00', violations: 45 },
  { name: '10:00', violations: 120 },
  { name: '12:00', violations: 85 },
  { name: '14:00', violations: 100 },
  { name: '16:00', violations: 150 },
  { name: '18:00', violations: 210 },
  { name: '20:00', violations: 90 },
];

const mockDataTypes = [
  { name: 'No Helmet', value: 400, color: '#ef4444' }, // danger
  { name: 'Red Light', value: 300, color: '#facc15' }, // caution
  { name: 'Tripling', value: 150, color: '#f97316' },  // orange
  { name: 'Modified', value: 50, color: '#3b82f6' },   // blue
];

export default function DashboardAreaView() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 className="h2-title" style={{ fontSize: "2rem" }}>Area Overview: Sector 42</h1>
          <p style={{ color: "var(--color-lane-dim)", marginTop: "0.5rem" }}>Live traffic violations analytics.</p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <select style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "var(--color-lane)", padding: "0.5rem 1rem", borderRadius: "8px", outline: "none" }}>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
      </header>

      {/* KPI Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.9rem", color: "var(--color-lane-dim)", textTransform: "uppercase" }}>Total Violations Today</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--color-danger)", marginTop: "0.5rem" }}>900</div>
          <div style={{ fontSize: "0.8rem", color: "var(--color-safe)", marginTop: "0.5rem" }}>+12% from yesterday</div>
        </div>
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.9rem", color: "var(--color-lane-dim)", textTransform: "uppercase" }}>Active Cameras</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--color-safe)", marginTop: "0.5rem" }}>24/24</div>
          <div style={{ fontSize: "0.8rem", color: "var(--color-lane-dim)", marginTop: "0.5rem" }}>All systems operational</div>
        </div>
        <div className="glass-panel" style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: "0.9rem", color: "var(--color-lane-dim)", textTransform: "uppercase" }}>Challans Issued</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--color-caution)", marginTop: "0.5rem" }}>450</div>
          <div style={{ fontSize: "0.8rem", color: "var(--color-lane-dim)", marginTop: "0.5rem" }}>50% automated issue rate</div>
        </div>
      </div>

      {/* Charts */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem" }}>
        <div className="glass-panel" style={{ height: "400px", padding: "1.5rem" }}>
          <h3 style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>Violations Timeline</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockDataTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.2)' }} />
              <Bar dataKey="violations" fill="var(--color-caution)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-panel" style={{ height: "400px", padding: "1.5rem" }}>
          <h3 style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>Violation Types</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={mockDataTypes}
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {mockDataTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.2)' }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginTop: "-1rem" }}>
            {mockDataTypes.map((type, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: type.color }}></div>
                {type.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
