"use client";
import React, { useState } from 'react';
import LeftSidebar from '@/components/LeftSidebar';
import TopNavbar from '@/components/TopNavbar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import Swap from '@/components/Swap';
import Portfolio from '@/components/Portfolio';
import Earn from '@/components/Earn';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('Trade');

  return (
    <div className="flex h-screen bg-black text-white">
      <LeftSidebar selected={selectedTab} setSelected={setSelectedTab} />
      <div className="flex flex-col flex-1">
        <TopNavbar />
        {selectedTab === 'Swap' ? <Swap /> : selectedTab === 'Portfolio' ? <Portfolio /> : selectedTab === 'Earn' ? <Earn /> : <MainContent />}
        <Footer />
      </div>
    </div>
  );
}
