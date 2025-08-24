"use client";
import React, { useState } from 'react';
import Modal from './Modal';

const Swap = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isWalletConnected, setWalletConnected] = useState(false);

  const handleSwap = () => {
    if (isWalletConnected) {
      setModalOpen(true);
    } else {
      // In a real app, this would trigger the wallet connection flow
      setWalletConnected(true);
    }
  };

  return (
    <>
      <div className="bg-gray-800 text-white p-4 h-full">
        <div className="flex border-b border-gray-700">
          <button
            className={`py-2 px-4 ${activeTab === 'buy' ? 'border-b-2 border-green-500' : ''}`}
            onClick={() => setActiveTab('buy')}
          >
            Buy
          </button>
          <button
            className={`py-2 px-4 ${activeTab === 'sell' ? 'border-b-2 border-red-500' : ''}`}
            onClick={() => setActiveTab('sell')}
          >
            Sell
          </button>
        </div>
        <div className="mt-4">
          <div className="mb-4">
            <label className="block text-sm mb-1">Price</label>
            <input type="text" className="w-full bg-gray-700 p-2 rounded" defaultValue="Market" />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">Size</label>
            <input type="text" className="w-full bg-gray-700 p-2 rounded" placeholder="0.00" />
          </div>
          <button
            onClick={handleSwap}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isWalletConnected ? 'Swap' : 'Connect Wallet'}
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Confirm Swap</h2>
        <p>Are you sure you want to proceed with this swap?</p>
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={() => setModalOpen(false)} className="text-gray-400">Cancel</button>
          <button onClick={() => setModalOpen(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Confirm</button>
        </div>
      </Modal>
    </>
  );
};

export default Swap;