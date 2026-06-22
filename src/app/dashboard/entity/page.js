"use client";
import { useState } from "react";
import { Search, Download, FileText, AlertCircle } from "lucide-react";
import ChallanDownloader from "@/components/ChallanTemplate";

export default function EntityView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearched(true);
    }
  };

  const mockEntityData = {
    plate: "MH01AB1234",
    owner: "John Doe",
    vehicle: "Honda Activa 6G",
    totalFines: "₹2,500",
    unpaid: "₹1,000",
    violations: [
      { id: "V-9921", date: "2026-06-21", type: "No Helmet", location: "Sector 42 Junction", fine: "₹1,000", status: "Unpaid" },
      { id: "V-8834", date: "2026-06-15", type: "Red Light", location: "Main Street Signal", fine: "₹500", status: "Paid" },
      { id: "V-7712", date: "2026-05-10", type: "No Helmet", location: "Sector 42 Junction", fine: "₹1,000", status: "Paid" },
    ]
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <header style={{ marginBottom: "2rem" }}>
        <h1 className="h2-title" style={{ fontSize: "2rem" }}>Entity Search</h1>
        <p style={{ color: "var(--color-lane-dim)", marginTop: "0.5rem" }}>Search for a vehicle by license plate to view its violation history.</p>
      </header>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
        <div style={{ position: "relative", flex: 1 }}>
          <Search size={20} color="var(--color-lane-dim)" style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)" }} />
          <input 
            type="text" 
            placeholder="Enter License Plate (e.g. MH01AB1234)" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
            style={{ 
              width: "100%", 
              padding: "1rem 1rem 1rem 3rem", 
              background: "rgba(255,255,255,0.05)", 
              border: "1px solid rgba(255,255,255,0.2)", 
              borderRadius: "8px",
              color: "white",
              fontSize: "1.1rem",
              fontFamily: "var(--font-mono)",
              outline: "none"
            }}
          />
        </div>
        <button type="submit" className="btn-primary" style={{ padding: "0 2rem" }}>Search</button>
      </form>

      {/* Search Results */}
      {searched && (
        <div className="glass-panel" style={{ padding: "2rem" }}>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
                <h2 style={{ fontSize: "2.5rem", fontFamily: "var(--font-mono)", fontWeight: "bold", letterSpacing: "2px" }}>
                  {mockEntityData.plate}
                </h2>
                <span className="badge badge-warning">Multiple Offender</span>
              </div>
              <div style={{ color: "var(--color-lane-dim)", fontSize: "1.1rem" }}>
                {mockEntityData.owner} • {mockEntityData.vehicle}
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "2rem", textAlign: "right" }}>
              <div>
                <div style={{ fontSize: "0.9rem", color: "var(--color-lane-dim)", textTransform: "uppercase" }}>Total Fines</div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{mockEntityData.totalFines}</div>
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", color: "var(--color-danger)", textTransform: "uppercase" }}>Unpaid</div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--color-danger)" }}>{mockEntityData.unpaid}</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.2rem" }}>Violation History</h3>
            <button className="btn-primary" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>
              <Download size={18} /> Download Audit Report
            </button>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Violation</th>
                <th>Location</th>
                <th>Fine</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockEntityData.violations.map((v) => (
                <tr key={v.id}>
                  <td style={{ fontFamily: "var(--font-mono)" }}>{v.date}</td>
                  <td>
                    <span className={`badge ${v.type === "No Helmet" ? "badge-danger" : "badge-warning"}`}>
                      {v.type}
                    </span>
                  </td>
                  <td>{v.location}</td>
                  <td style={{ fontFamily: "var(--font-mono)" }}>{v.fine}</td>
                  <td>
                    <span style={{ color: v.status === "Paid" ? "var(--color-safe)" : "var(--color-danger)", fontWeight: "bold" }}>
                      {v.status}
                    </span>
                  </td>
                  <td>
                    <ChallanDownloader violationData={v} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}

      {!searched && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem", color: "var(--color-lane-dim)", textAlign: "center", background: "rgba(255,255,255,0.02)", borderRadius: "8px", border: "1px dashed rgba(255,255,255,0.1)" }}>
          <AlertCircle size={48} style={{ marginBottom: "1rem", opacity: 0.5 }} />
          <p>Enter a license plate number above to retrieve the entity&apos;s complete traffic violation history and pending challans.</p>
        </div>
      )}
    </div>
  );
}
