"use client";
import React, { useState } from 'react';
import { IconFrEth, IconFrBtc } from './icons';

const TopNavbar = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState('frETH');

  const tokens = [
    { name: 'frETH', icon: <IconFrEth /> },
    { name: 'frBTC', icon: <IconFrBtc /> },
  ];

  return (
    <nav className="bg-black text-gray-400 p-2 flex justify-between items-center border-b border-gray-700">
      <div className="relative">
        <button
          className="flex items-center gap-1 text-xs"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          {tokens.find((token) => token.name === selectedToken)?.icon}
          {selectedToken}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
            {tokens.map((token) => (
              <button
                key={token.name}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                onClick={() => {
                  setSelectedToken(token.name);
                  setDropdownOpen(false);
                }}
              >
                {token.icon}
                {token.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-1 px-2 rounded text-xs">
          Connect
        </button>
        <div className="relative">
          <button onClick={() => setSettingsOpen(!isSettingsOpen)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {isSettingsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Language</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;