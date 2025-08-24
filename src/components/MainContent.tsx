import React from 'react';
import Chart from './Chart';
import OrderBook from './OrderBook';
import Swap from './Swap';
import { IconCopy } from './icons';

const MainContent = () => {
  return (
    <main className="flex-1 p-2 bg-black text-gray-400 flex flex-col overflow-hidden">
      <div className="grid grid-cols-4 gap-2 border-b border-gray-700 pb-2 mb-2">
        <div>
          <p className="text-xs text-gray-500">Price (frUSD)</p>
          <p className="text-sm text-gray-300">$3,000.00 <span className="text-green-500">(+5.2%)</span></p>
        </div>
        <div>
          <p className="text-xs text-gray-500">24hr Volume</p>
          <p className="text-sm text-gray-300">$1,234,567.89</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Market Cap</p>
          <p className="text-sm text-gray-300">$1,234,567,890.12</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Contract</p>
          <div className="flex items-center gap-1">
            <p className="text-sm text-gray-300">0x1234...5678</p>
            <button>
              <IconCopy />
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-2 flex-1 overflow-hidden">
        <div className="lg:col-span-3">
          <Chart />
        </div>
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-2 overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <OrderBook />
          </div>
          <div className="flex-1">
            <Swap />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;