"use client";
import React, { useState } from 'react';

const Swap = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('buy')}
          className={`flex-1 text-center py-2 ${activeTab === 'buy' ? 'bg-gray-800' : ''}`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex-1 text-center py-2 ${activeTab === 'sell' ? 'bg-gray-800' : ''}`}
        >
          Sell
        </button>
      </div>
      <div className="flex-1">
        {/* Swap form goes here */}
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded">
        {isWalletConnected ? 'Swap' : 'Connect Wallet'}
      </button>
    </div>
  );
};

export default Swap;