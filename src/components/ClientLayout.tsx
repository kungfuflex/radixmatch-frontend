"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import LeftSidebar from '@/components/LeftSidebar';
import TopNavbar from '@/components/TopNavbar';
import Footer from '@/components/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      // Delay completion to ensure spinner is visible
      setTimeout(() => setLoading(false), 500);
    };

    handleStart();
    handleComplete(); // In a real app, you'd use router events

  }, [pathname]);

  return (
    <div className="flex h-screen bg-black text-white">
      <LeftSidebar />
      <div className="flex flex-col flex-1 relative overflow-hidden">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto">
          {loading ? <LoadingSpinner /> : children}
        </main>
        <Footer />
      </div>
    </div>
  );
}