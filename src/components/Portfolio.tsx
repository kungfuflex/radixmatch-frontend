"use client";
import React, { useState } from 'react';
import { IconFrEth, IconFrBtc } from './icons';
import Modal from './Modal';

// Night-themed portfolio component
interface LpPosition {
  price: string;
  volume: string;
  redeemable: string[];
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Balances');
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [filter, setFilter] = useState('All');
  const [isRedeemModalOpen, setRedeemModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<LpPosition | null>(null);

  const mockBalances = [
    { token: 'frETH', balance: '12.5', usdValue: '37,500.00' },
    { token: 'frBTC', balance: '2.1', usdValue: '126,000.00' },
    { token: 'frUSD', balance: '10,000.00', usdValue: '10,000.00' },
  ];

  const mockLpPositions = {
    'frETH/frBTC': [
      { price: '0.051', volume: '5', redeemable: ['0.255 frETH', '0.01275 frBTC'] },
      { price: '0.050', volume: '10', redeemable: ['0.5 frETH', '0.025 frBTC'] },
      { price: '0.049', volume: '8', redeemable: ['0.392 frETH', '0.0196 frBTC'] },
    ],
    'frETH/frUSD': [
      { price: '3005', volume: '2', redeemable: ['0.00066 frETH', '2 frUSD'] },
      { price: '3000', volume: '5', redeemable: ['0.0016 frETH', '5 frUSD'] },
      { price: '2995', volume: '3', redeemable: ['0.001 frETH', '3 frUSD'] },
    ],
    'frBTC/frUSD': [
      { price: '60100', volume: '0.5', redeemable: ['0.0000083 frBTC', '0.5 frUSD'] },
      { price: '60000', volume: '1', redeemable: ['0.000016 frBTC', '1 frUSD'] },
      { price: '59900', volume: '0.8', redeemable: ['0.0000133 frBTC', '0.8 frUSD'] },
    ],
  };

  const filteredPairs = filter === 'All' ? Object.keys(mockLpPositions) : Object.keys(mockLpPositions).filter(p => p.includes(filter));

  const handleRedeemClick = (position: any) => {
    setSelectedPosition(position);
    setRedeemModalOpen(true);
  };

  const renderPairIcon = (pair: string) => {
    if (pair.includes('frETH') && pair.includes('frBTC')) {
      return <div className="flex items-center"><IconFrEth /><IconFrBtc /></div>;
    }
    if (pair.includes('frETH')) return <IconFrEth />;
    if (pair.includes('frBTC')) return <IconFrBtc />;
    return null;
  };

  return (
    <>
      <div className="flex flex-col bg-black text-white h-full overflow-y-auto p-4">
        <div className="p-4 rounded-lg border border-gray-800 bg-black mb-4">
          <h2 className="text-lg font-bold mb-4">Portfolio Overview</h2>
          <p className="text-gray-500">Summary charts and figures will be displayed here.</p>
        </div>

        <div className="border rounded-lg border-gray-800 bg-black flex-1 flex flex-col">
          <div className="flex border-b border-gray-700">
            <button onClick={() => setActiveTab('Balances')} className={`py-2 px-4 text-sm ${activeTab === 'Balances' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400'}`}>Balances</button>
            <button onClick={() => setActiveTab('LP Positions')} className={`py-2 px-4 text-sm ${activeTab === 'LP Positions' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400'}`}>LP Positions</button>
          </div>

          <div className="p-4 flex-1">
            {activeTab === 'Balances' && (
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700 text-gray-500">
                    <th className="py-2 px-4 font-normal text-xs">Token</th>
                    <th className="py-2 px-4 font-normal text-xs">Balance</th>
                    <th className="py-2 px-4 font-normal text-xs">USD Value</th>
                  </tr>
                </thead>
                <tbody>
                  {isWalletConnected ? (
                    mockBalances.map((asset) => (
                      <tr key={asset.token} className="border-b border-gray-800">
                        <td className="py-3 px-4 text-sm">{asset.token}</td>
                        <td className="py-3 px-4 text-sm">{asset.balance}</td>
                        <td className="py-3 px-4 text-sm">${asset.usdValue}</td>
                      </tr>
                    ))
                  ) : (
                    <tr><td colSpan={3} className="text-center py-10"><button onClick={() => setWalletConnected(true)} className="bg-orange-500 text-white hover:bg-orange-600 py-2 px-4 rounded-lg text-sm">Connect Wallet</button></td></tr>
                  )}
                </tbody>
              </table>
            )}
            {activeTab === 'LP Positions' && (
              <div className="space-y-6">
                <div className="flex gap-2 mb-4">
                  <button onClick={() => setFilter('All')} className={`px-3 py-1 rounded text-xs ${filter === 'All' ? 'bg-orange-500' : 'bg-gray-700'}`}>All</button>
                  <button onClick={() => setFilter('frETH')} className={`px-3 py-1 rounded text-xs ${filter === 'frETH' ? 'bg-orange-500' : 'bg-gray-700'}`}>frETH</button>
                  <button onClick={() => setFilter('frBTC')} className={`px-3 py-1 rounded text-xs ${filter === 'frBTC' ? 'bg-orange-500' : 'bg-gray-700'}`}>frBTC</button>
                  <button onClick={() => setFilter('frUSD')} className={`px-3 py-1 rounded text-xs ${filter === 'frUSD' ? 'bg-orange-500' : 'bg-gray-700'}`}>frUSD</button>
                </div>
                {isWalletConnected ? (
                  filteredPairs.map(pair => (
                    <div key={pair}>
                      <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-gray-300">{renderPairIcon(pair)} {pair}</h3>
                      <table className="w-full text-left bg-black rounded-lg">
                        <thead>
                          <tr className="border-b border-gray-700 text-gray-500">
                            <th className="py-2 px-4 font-normal text-xs">Price</th>
                            <th className="py-2 px-4 font-normal text-xs">Volume</th>
                            <th className="py-2 px-4 font-normal text-xs">Redeemable</th>
                            <th className="py-2 px-4 font-normal text-xs"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {mockLpPositions[pair as keyof typeof mockLpPositions].map((pos) => (
                            <tr key={pos.price} className="border-b border-gray-800 last:border-b-0">
                              <td className="py-3 px-4 text-sm text-gray-300">{pos.price}</td>
                              <td className="py-3 px-4 text-sm text-gray-300">{pos.volume}</td>
                              <td className="py-3 px-4 text-sm">
                                <div className="flex flex-col">
                                  <span className="text-gray-400">{pos.redeemable[0]}</span>
                                  <span className="text-gray-400">{pos.redeemable[1]}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-sm"><button onClick={() => handleRedeemClick(pos)} className="text-orange-500 hover:underline text-xs">Redeem</button></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10"><button onClick={() => setWalletConnected(true)} className="bg-orange-500 text-white hover:bg-orange-600 py-2 px-4 rounded-lg text-sm">Connect Wallet</button></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {selectedPosition && (
        <Modal isOpen={isRedeemModalOpen} onClose={() => setRedeemModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Redeem Position</h2>
          <p>Are you sure you want to redeem this position?</p>
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <p><span className="font-bold">Price:</span> {selectedPosition.price}</p>
            <p><span className="font-bold">Volume:</span> {selectedPosition.volume}</p>
            <p><span className="font-bold">You will receive:</span></p>
            <ul className="list-disc list-inside ml-4">
              <li>{selectedPosition.redeemable[0]}</li>
              <li>{selectedPosition.redeemable[1]}</li>
            </ul>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button onClick={() => setRedeemModalOpen(false)} className="text-gray-400">Cancel</button>
            <button onClick={() => setRedeemModalOpen(false)} className="bg-orange-500 text-white font-bold py-2 px-4 rounded">Confirm</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Portfolio;