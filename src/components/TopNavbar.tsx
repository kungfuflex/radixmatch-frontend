"use client";
import React, { useState } from 'react';
import { IconFrEth, IconFrBtc } from './icons';

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState('frETH');

  return (
    <header className="bg-night-gray p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center bg-night-light-gray text-white p-2 rounded">
          <span className="mr-2">
            {selectedAsset === 'frETH' ? <IconFrEth /> : <IconFrBtc />}
          </span>
          <select
            className="bg-transparent"
            value={selectedAsset}
            onChange={(e) => setSelectedAsset(e.target.value)}
          >
            <option value="frETH">frETH</option>
            <option value="frBTC">frBTC</option>
          </select>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-night-orange text-white px-4 py-2 rounded">Connect</button>
        <div className="ml-4 relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-white">▼</button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-night-light-gray rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-night-gray">Language</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-night-gray">Privacy Policy</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-night-gray">Terms of Service</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;