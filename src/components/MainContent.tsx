"use client";
import React, { useState } from 'react';
import Chart from './Chart';
import OrderBook from './OrderBook';
import Swap from './Swap';

const MainContent = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-night-gray p-4 mb-4 flex justify-between items-center">
        <div>
          <div className="text-gray-400">Price (24hr Change)</div>
          <div className="text-white text-lg">$3,000.00 <span className="text-green-500">(+2.5%)</span></div>
        </div>
        <div>
          <div className="text-gray-400">24hr Volume</div>
          <div className="text-white text-lg">$1.2B</div>
        </div>
        <div>
          <div className="text-gray-400">Market Cap</div>
          <div className="text-white text-lg">$360B</div>
        </div>
        <div>
          <div className="text-gray-400">Contract</div>
          <div className="text-white text-lg flex items-center">
            {`${contractAddress.substring(0, 6)}...${contractAddress.substring(contractAddress.length - 4)}`}
            <button onClick={copyToClipboard} className="ml-2 text-gray-400 hover:text-white">
              {copied ? 'Copied!' : '📋'}
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3 bg-night-gray p-4">
          <Chart />
        </div>
        <div className="lg:col-span-1 bg-night-gray p-4">
          <OrderBook />
        </div>
        <div className="lg:col-span-1 bg-night-gray p-4">
          <Swap />
        </div>
      </div>
    </div>
  );
};

export default MainContent;