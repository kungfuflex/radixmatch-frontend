"use client";
import React, { useState } from 'react';
import {
  IconExplore,
  IconTrade,
  IconDash,
  IconSwap,
  IconEarn,
  IconPortfolio,
  IconLaunch,
} from './icons';

const LeftSidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState('Explore');

  const navItems = [
    { name: 'Explore', icon: <IconExplore /> },
    { name: 'Trade', icon: <IconTrade /> },
    { name: 'Dash', icon: <IconDash /> },
    { name: 'Swap', icon: <IconSwap /> },
    { name: 'Earn', icon: <IconEarn /> },
  ];

  return (
    <div className="w-20 bg-night-gray p-4 flex flex-col justify-between items-center">
      <div className="w-full">
        <div className="mb-8 text-center">
          <div className="text-white font-bold text-2xl">R</div>
          <div className="text-gray-400 text-xs">Alpha</div>
        </div>
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setSelected(item.name)}
              className={`p-2 rounded-md ${selected === item.name ? 'bg-night-orange' : 'text-gray-300 hover:bg-night-light-gray'}`}
            >
              {item.icon}
            </button>
          ))}
        </nav>
      </div>
      <div className="w-full flex flex-col items-center space-y-4">
        <button className="text-gray-300 hover:text-white"><IconPortfolio /></button>
        <button onClick={() => setIsModalOpen(true)} className="text-gray-300 hover:text-white"><IconLaunch /></button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-night-light-gray p-8 rounded-lg">
            <h2 className="text-white text-2xl mb-4">Launch a Token</h2>
            <p className="text-gray-400">This is the launch a token modal.</p>
            <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSidebar;