import React from 'react';
import Chart from './Chart';
import OrderBook from './OrderBook';
import Swap from './Swap';
import CopyIcon from './icons/CopyIcon';

const MainContent = () => {
  return (
    <main className="flex-1 p-4 bg-black text-white">
      <div className="grid grid-cols-4 gap-4 border-b border-gray-700 pb-4 mb-4">
        <div>
          <p className="text-sm text-gray-400">Price (24hr Change)</p>
          <p className="text-lg">$3,000.00 <span className="text-green-500">(+5.2%)</span></p>
        </div>
        <div>
          <p className="text-sm text-gray-400">24hr Volume</p>
          <p className="text-lg">$1,234,567.89</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Market Cap</p>
          <p className="text-lg">$1,234,567,890.12</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Contract</p>
          <div className="flex items-center gap-2">
            <p className="text-lg">0x1234...5678</p>
            <button>
              <CopyIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 h-[calc(100vh-220px)]">
        <div className="col-span-2">
          <Chart />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <OrderBook />
          <Swap />
        </div>
      </div>
    </main>
  );
};

export default MainContent;