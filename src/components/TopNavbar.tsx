"use client";
import React, { useState } from 'react';
import EthIcon from './icons/EthIcon';
import BtcIcon from './icons/BtcIcon';
import ArrowDownIcon from './icons/ArrowDownIcon';

const TopNavbar = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center border-b border-gray-700">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2">
          <EthIcon />
          frETH
          <ArrowDownIcon />
        </button>
        {/* <button className="flex items-center gap-2">
          <BtcIcon />
          frBTC
          <ArrowDownIcon />
        </button> */}
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect
        </button>
        <div className="relative">
          <button onClick={() => setSettingsOpen(!isSettingsOpen)}>
            <ArrowDownIcon />
          </button>
          {isSettingsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Language</a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Privacy Policy</a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Terms of Service</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;