"use client";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Car, ScanLine, ShieldAlert } from "lucide-react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Area Overview", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Entity Search", path: "/dashboard/entity", icon: <Car size={20} /> },
    { name: "Live AI Scan", path: "/dashboard/analyze", icon: <ScanLine size={20} /> },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{
        width: "280px",
        background: "rgba(26, 26, 26, 0.9)",
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        height: "100vh"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "3rem", padding: "0 1rem" }}>
          <ShieldAlert size={28} color="var(--color-caution)" />
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>TP Dashboard</h2>
        </div>

        <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.path} 
                href={link.path}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: "8px",
                  background: isActive ? "rgba(250, 204, 21, 0.1)" : "transparent",
                  color: isActive ? "var(--color-caution)" : "var(--color-lane-dim)",
                  transition: "all 0.2s ease"
                }}
              >
                {link.icon}
                <span style={{ fontWeight: isActive ? "600" : "400" }}>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div style={{ padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: "1rem" }}>
          <UserButton afterSignOutUrl="/" />
          <div style={{ fontSize: "0.9rem", color: "var(--color-lane-dim)" }}>Traffic Officer</div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
