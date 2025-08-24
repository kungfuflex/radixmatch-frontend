"use client";
import React, { useState } from 'react';
import Modal from './Modal';
import AssetDropdown from './AssetDropdown';

const Swap = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [slippage, setSlippage] = useState(5);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [inputAsset, setInputAsset] = useState('frETH');
  const [outputAsset, setOutputAsset] = useState('frUSD');

  const handleSwap = () => {
    if (isWalletConnected) {
      setModalOpen(true);
    } else {
      setWalletConnected(true);
    }
  };

  const toggleAssets = () => {
    setInputAsset(outputAsset);
    setOutputAsset(inputAsset);
  };

  return (
    <>
      <div className="bg-black text-gray-400 p-4 h-full flex flex-col items-center justify-center font-mono">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Buy {outputAsset}</h2>
            <button className="text-gray-400" onClick={() => setSettingsModalOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-green-500 mb-4">1 {inputAsset} = 12,138,140.15 {outputAsset}</p>
          <div className="flex-1 flex flex-col">
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <AssetDropdown selectedAsset={inputAsset} onSelectAsset={setInputAsset} />
                <span className="text-xs">Balance: 0.00</span>
              </div>
              <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="-0.00" />
            </div>
            <div className="flex justify-center my-2">
              <button onClick={toggleAssets} className="p-1 bg-gray-700 rounded-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 4L17 20M17 20L21 16M17 20L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 20L7 4M7 4L3 8M7 4L11 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <AssetDropdown selectedAsset={outputAsset} onSelectAsset={setOutputAsset} />
                <span className="text-xs">Balance: 0.00</span>
              </div>
              <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="+0.00" />
            </div>
            <div className="mt-auto">
              <button
                onClick={handleSwap}
                className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded text-xs"
              >
                {isWalletConnected ? 'Swap' : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isSettingsModalOpen} onClose={() => setSettingsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="flex justify-between items-center text-xs my-2">
          <span>Slippage</span>
          <div className="flex gap-1">
            {[1, 5, 10, 25].map(val => (
              <button key={val} onClick={() => setSlippage(val)} className={`px-2 py-1 rounded ${slippage === val ? 'bg-orange-500 text-white' : 'bg-gray-700'}`}>{val}%</button>
            ))}
          </div>
        </div>
      </Modal>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Confirm Swap</h2>
        <p>Are you sure you want to proceed with this swap?</p>
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={() => setModalOpen(false)} className="text-gray-400">Cancel</button>
          <button onClick={() => setModalOpen(false)} className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-2 px-4 rounded">Confirm</button>
        </div>
      </Modal>
    </>
  );
};

export default Swap;