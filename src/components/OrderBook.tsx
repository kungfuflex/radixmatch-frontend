"use client";
import React, { useState } from 'react';

const OrderBook = () => {
  const [activeTab, setActiveTab] = useState('orderbook');

  return (
    <div className="h-full flex flex-col">
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('orderbook')}
          className={`flex-1 text-center py-2 ${activeTab === 'orderbook' ? 'bg-gray-800' : ''}`}
        >
          Order Book
        </button>
        <button
          onClick={() => setActiveTab('trades')}
          className={`flex-1 text-center py-2 ${activeTab === 'trades' ? 'bg-gray-800' : ''}`}
        >
          Trades
        </button>
      </div>
      {activeTab === 'orderbook' ? (
        <div className="flex-1">
          <div className="text-red-500">Asks</div>
          {/* Asks Data */}
          <div className="text-green-500 mt-4">Bids</div>
          {/* Bids Data */}
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr>
                <th>Price</th>
                <th>Size</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {/* Trade History Data */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderBook;