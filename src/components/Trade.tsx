"use client";
import React, { useState } from 'react';
import Modal from './Modal';
import EthIcon from './icons/EthIcon';
import BtcIcon from './icons/BtcIcon';

const Trade = () => {
  const [orderType, setOrderType] = useState('market');
  const [isModalOpen, setModalOpen] = useState(false);
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [slippage, setSlippage] = useState(5);
  const [inputAsset, setInputAsset] = useState('frUSD');
  const [outputAsset, setOutputAsset] = useState('frETH');

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
      <div className="bg-black text-gray-400 p-2 h-full flex flex-col">
        <div className="flex border-b border-gray-700">
          <button
            className={`py-2 px-4 text-xs ${orderType === 'market' ? 'border-b-2 border-orange-500 text-orange-500' : ''}`}
            onClick={() => setOrderType('market')}
          >
            Market
          </button>
          <button
            className={`py-2 px-4 text-xs ${orderType === 'limit' ? 'border-b-2 border-orange-500 text-orange-500' : ''}`}
            onClick={() => setOrderType('limit')}
          >
            Limit
          </button>
        </div>
        <div className="text-xs my-2">1 frUSD = 0.00000008820 frETH</div>
        <div className="flex-1 flex flex-col">
          <div className="mb-2">
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs">{inputAsset}</label>
              <span className="text-xs">Balance: 0.00</span>
            </div>
            <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="0.00" />
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
            <label className="block text-xs mb-1">{outputAsset}</label>
            <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="0.00" />
          </div>
          {orderType === 'limit' && (
            <div className="mb-2">
              <label className="block text-xs mb-1">Target Price</label>
              <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="0.00" />
            </div>
          )}
          <div className="flex justify-between items-center text-xs my-2">
            <span>Slippage</span>
            <div className="flex gap-1">
              {[1, 5, 10, 25].map(val => (
                <button key={val} onClick={() => setSlippage(val)} className={`px-2 py-1 rounded ${slippage === val ? 'bg-orange-500 text-white' : 'bg-gray-700'}`}>{val}%</button>
              ))}
            </div>
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
        <div className="mt-4 border-t border-gray-700 pt-2">
          <h3 className="text-sm font-bold mb-2">CLOB Balance</h3>
          <div className="grid grid-cols-3 text-xs text-gray-500 py-2 border-b border-gray-700">
            <span>Asset</span>
            <span>Amount</span>
            <span></span>
          </div>
          <div className="text-xs py-1">
            <div className="grid grid-cols-3">
              <span>frETH</span>
              <span>0.00</span>
              <button className="text-orange-500">Withdraw</button>
            </div>
            <div className="grid grid-cols-3">
              <span>frUSD</span>
              <span>0.00</span>
              <button className="text-orange-500">Withdraw</button>
            </div>
          </div>
        </div>
      </div>
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

export default Trade;