import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });

export const metadata = {
  title: "Traffic Violation AI",
  description: "Next-gen intelligent traffic violation detection system.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${spaceMono.variable}`}>
          {/* The scrolling road background */}
          <div className="road-bg">
            <div className="road-lines"></div>
          </div>
          
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
