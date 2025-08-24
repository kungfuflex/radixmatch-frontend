"use client";
import React, { useState } from 'react';
import RadixIcon from './icons/RadixIcon';
import ExploreIcon from './icons/ExploreIcon';
import TradeIcon from './icons/TradeIcon';
import DashIcon from './icons/DashIcon';
import SwapIcon from './icons/SwapIcon';
import EarnIcon from './icons/EarnIcon';
import PortfolioIcon from './icons/PortfolioIcon';
import LaunchIcon from './icons/LaunchIcon';
import Modal from './Modal';

const LeftSidebar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <aside className="w-20 bg-black flex flex-col items-center py-4">
        <div className="mb-8">
          <RadixIcon />
          <p className="text-xs text-center mt-1">Alpha</p>
        </div>
        <nav className="flex flex-col gap-6">
          <button className="flex flex-col items-center gap-1 text-xs">
            <ExploreIcon />
            Explore
          </button>
          <button className="flex flex-col items-center gap-1 text-xs">
            <TradeIcon />
            Trade
          </button>
          <button className="flex flex-col items-center gap-1 text-xs">
            <DashIcon />
            Dash
          </button>
          <button className="flex flex-col items-center gap-1 text-xs">
            <SwapIcon />
            Swap
          </button>
          <button className="flex flex-col items-center gap-1 text-xs">
            <EarnIcon />
            Earn
          </button>
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          <button className="flex flex-col items-center gap-1 text-xs">
            <PortfolioIcon />
            Portfolio
          </button>
          <button
            className="flex flex-col items-center gap-1 text-xs"
            onClick={() => setModalOpen(true)}
          >
            <LaunchIcon />
            Launch
          </button>
        </div>
      </aside>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Launch a Token</h2>
        <p>This is where the token launch form will go.</p>
      </Modal>
    </>
  );
};

export default LeftSidebar;