import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RADIX | frBTC/frETH: $0.00 | frBTC/frUSD: $0.00",
  description: "High-frequency trading DEX for the Radix ecosystem.",
  keywords: "Radix, DEX, HFT, crypto, trading, frBTC, frETH, frUSD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen bg-black text-white">
          <LeftSidebar />
          <div className="flex flex-col flex-1">
            <TopNavbar />
            <main className="flex-1 overflow-y-auto">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
