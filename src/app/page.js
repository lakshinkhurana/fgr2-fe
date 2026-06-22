import HeroSection from "@/components/HeroSection";
import StoryScroll from "@/components/StoryScroll";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default async function Home() {
  const { userId } = await auth();

  return (
    <main>
      {/* Top Navigation */}
      <nav style={{ 
        position: "fixed", top: 0, width: "100%", zIndex: 100, 
        padding: "1rem 2rem", display: "flex", justifyContent: "space-between", 
        alignItems: "center", backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <ShieldAlert size={24} color="var(--color-caution)" />
          <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Grid AI</span>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {userId ? (
            <>
              <Link href="/dashboard" className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                Enter Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <SignInButton mode="modal">
              <button className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                Officer Login
              </button>
            </SignInButton>
          )}
        </div>
      </nav>

      <HeroSection />
      
      {/* Visual separator line */}
      <div style={{ width: "1px", height: "100px", background: "linear-gradient(to bottom, transparent, var(--color-caution))", margin: "0 auto" }}></div>
      
      <StoryScroll />
      
      {/* Visual separator line to close off the page */}
      <div style={{ width: "1px", height: "100px", background: "linear-gradient(to bottom, var(--color-caution), transparent)", margin: "0 auto" }}></div>
      
      <footer style={{ padding: "4rem", textAlign: "center", color: "var(--color-lane-dim)", fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} Traffic Intelligence System. Flipkart Grid R2.
      </footer>
    </main>
  );
}
