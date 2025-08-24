"use client";
import React, { useState } from 'react';
import { IconFrEth, IconFrBtc } from './icons';
import Modal from './Modal';

interface Pool {
  name: string;
  apr: string;
  tvl: string;
  volume: string;
  volTvl: string;
  totalSupply: string;
  bidAskSpread: string;
  vaultToken: string;
}

interface Deposit {
  name: string;
  vaultShares: string;
  shareOfPool: string;
  tokenAmounts: string[];
  vaultToken: string;
}

const Earn = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);
  const [selectedDeposit, setSelectedDeposit] = useState<Deposit | null>(null);

  const mockPools: Pool[] = [
    { name: 'frETH/frBTC', apr: '12.5%', tvl: '$1.2M', volume: '$250K', volTvl: '20.8%', totalSupply: '100,000', bidAskSpread: '0.05%', vaultToken: 'veETHBTC' },
    { name: 'frETH/frUSD', apr: '8.2%', tvl: '$5.6M', volume: '$800K', volTvl: '14.3%', totalSupply: '500,000', bidAskSpread: '0.03%', vaultToken: 'veETHUSD' },
    { name: 'frBTC/frUSD', apr: '5.1%', tvl: '$10.1M', volume: '$1.1M', volTvl: '10.9%', totalSupply: '1,000,000', bidAskSpread: '0.02%', vaultToken: 'veBTCUSD' },
  ];

  const mockDeposits: Deposit[] = [
    { name: 'frETH/frBTC', vaultShares: '1,250', shareOfPool: '1.25%', tokenAmounts: ['5 frETH', '0.25 frBTC'], vaultToken: 'veETHBTC' },
  ];

  const handleDepositClick = (pool: Pool) => {
    setSelectedPool(pool);
    setDepositModalOpen(true);
  };

  const handleWithdrawClick = (deposit: Deposit) => {
    setSelectedDeposit(deposit);
    setWithdrawModalOpen(true);
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
      <div className="flex flex-col bg-black text-white h-full overflow-y-auto p-4 space-y-6">
        {/* Deposits Section */}
        <div className="p-4 rounded-lg border border-gray-800 bg-black">
          <h2 className="text-lg font-bold mb-4 text-gray-200">Your Deposits</h2>
          {isWalletConnected ? (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400">
                  <th className="py-3 px-4 font-semibold text-xs">Pool</th>
                  <th className="py-3 px-4 font-semibold text-xs">Vault Shares</th>
                  <th className="py-3 px-4 font-semibold text-xs">Share of Pool</th>
                  <th className="py-3 px-4 font-semibold text-xs">Token Amounts</th>
                  <th className="py-3 px-4 font-semibold text-xs"></th>
                </tr>
              </thead>
              <tbody>
                {mockDeposits.map(deposit => (
                  <tr key={deposit.name} className="border-b border-gray-800 last:border-b-0 hover:bg-gray-800">
                    <td className="py-4 px-4 text-sm flex items-center gap-3">{renderPairIcon(deposit.name)} <span className="font-medium text-gray-200">{deposit.name}</span></td>
                    <td className="py-4 px-4 text-sm font-mono text-gray-300">{deposit.vaultShares} <span className="text-gray-500">{deposit.vaultToken}</span></td>
                    <td className="py-4 px-4 text-sm font-mono text-gray-300">{deposit.shareOfPool}</td>
                    <td className="py-4 px-4 text-sm">
                      <div className="flex flex-col">
                        <span className="font-mono text-gray-300">{deposit.tokenAmounts[0]}</span>
                        <span className="font-mono text-gray-300">{deposit.tokenAmounts[1]}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm"><button onClick={() => handleWithdrawClick(deposit)} className="text-orange-500 hover:underline text-xs font-bold">Withdraw</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-10"><button onClick={() => setWalletConnected(true)} className="bg-orange-500 text-white hover:bg-orange-600 py-2 px-4 rounded-lg text-sm">Connect Wallet</button></div>
          )}
        </div>

        {/* All Pools Section */}
        <div className="p-4 rounded-lg border border-gray-800 bg-black">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-200">All Pools</h2>
            <div className="flex gap-2">
              <input type="text" placeholder="Search pools..." className="bg-gray-800 p-2 rounded text-xs border border-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-500" />
              <button className="bg-orange-500 text-white hover:bg-orange-600 py-2 px-4 rounded-lg text-sm font-bold">Create Pool</button>
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-gray-400">
                <th className="py-3 px-4 font-semibold text-xs">Pool</th>
                <th className="py-3 px-4 font-semibold text-xs">TVL</th>
                <th className="py-3 px-4 font-semibold text-xs">Total Supply</th>
                <th className="py-3 px-4 font-semibold text-xs">Bid/Ask Spread</th>
                <th className="py-3 px-4 font-semibold text-xs"></th>
              </tr>
            </thead>
            <tbody>
              {mockPools.map(pool => (
                <tr key={pool.name} className="border-b border-gray-800 last:border-b-0 hover:bg-gray-800">
                  <td className="py-4 px-4 text-sm flex items-center gap-3">{renderPairIcon(pool.name)} <span className="font-medium text-gray-200">{pool.name}</span></td>
                  <td className="py-4 px-4 text-sm font-mono text-gray-300">{pool.tvl}</td>
                  <td className="py-4 px-4 text-sm font-mono text-gray-300">{pool.totalSupply} <span className="text-gray-500">{pool.vaultToken}</span></td>
                  <td className="py-4 px-4 text-sm font-mono text-green-400">{pool.bidAskSpread}</td>
                  <td className="py-4 px-4 text-sm"><button onClick={() => handleDepositClick(pool)} className="text-orange-500 hover:underline text-xs font-bold">Deposit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPool && (
        <Modal isOpen={isDepositModalOpen} onClose={() => setDepositModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Deposit into {selectedPool.name}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Amount of {selectedPool.name.split('/')[0]}</label>
              <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="0.00" />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Amount of {selectedPool.name.split('/')[1]}</label>
              <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="0.00" />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button onClick={() => setDepositModalOpen(false)} className="text-gray-400">Cancel</button>
            <button onClick={() => setDepositModalOpen(false)} className="bg-orange-500 text-white font-bold py-2 px-4 rounded">Confirm Deposit</button>
          </div>
        </Modal>
      )}

      {selectedDeposit && (
        <Modal isOpen={isWithdrawModalOpen} onClose={() => setWithdrawModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Withdraw from {selectedDeposit.name}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Amount of {selectedDeposit.vaultToken} to Withdraw</label>
              <input type="text" className="w-full bg-gray-800 p-2 rounded text-xs" placeholder="0.00" />
            </div>
            <p className="text-xs text-gray-500">You will receive approximately: {selectedDeposit.tokenAmounts[0]} and {selectedDeposit.tokenAmounts[1]}</p>
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <button onClick={() => setWithdrawModalOpen(false)} className="text-gray-400">Cancel</button>
            <button onClick={() => setWithdrawModalOpen(false)} className="bg-orange-500 text-white font-bold py-2 px-4 rounded">Confirm Withdraw</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Earn;