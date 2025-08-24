"use client";
import React, { useState, useEffect } from 'react';

interface Order {
  price: string;
  size: string;
  total: string;
}

const OrderBook = () => {
  const [activeTab, setActiveTab] = useState('orderBook');
  const [asks, setAsks] = useState<Order[]>([]);
  const [bids, setBids] = useState<Order[]>([]);

  useEffect(() => {
    setAsks(Array.from({ length: 20 }, (_, i) => ({
      price: (3001.00 + i * 0.5).toFixed(2),
      size: (Math.random() * 1).toFixed(3),
      total: (Math.random() * 3000).toFixed(2),
    })));
    setBids(Array.from({ length: 20 }, (_, i) => ({
      price: (2999.50 - i * 0.5).toFixed(2),
      size: (Math.random() * 1).toFixed(3),
      total: (Math.random() * 3000).toFixed(2),
    })));
  }, []);

  return (
    <div className="bg-black text-gray-400 p-2 h-full flex flex-col">
      <div className="flex border-b border-gray-700">
        <button
          className={`py-2 px-4 text-xs ${activeTab === 'orderBook' ? 'border-b-2 border-orange-500 text-orange-500' : ''}`}
          onClick={() => setActiveTab('orderBook')}
        >
          Order Book
        </button>
        <button
          className={`py-2 px-4 text-xs ${activeTab === 'trades' ? 'border-b-2 border-orange-500 text-orange-500' : ''}`}
          onClick={() => setActiveTab('trades')}
        >
          Trades
        </button>
      </div>
      {activeTab === 'orderBook' && (
        <div className="flex flex-col flex-1 min-h-0">
          <div className="grid grid-cols-3 text-xs text-gray-500 py-2 border-b border-gray-700">
            <span>Price</span>
            <span>Size</span>
            <span>Total</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="h-1/2 overflow-y-auto border-b border-gray-700">
              {/* Asks */}
              {asks.map((ask, i) => (
                <div key={i} className="grid grid-cols-3 text-xs py-1">
                  <span className="text-red-500">{ask.price}</span>
                  <span>{ask.size}</span>
                  <span>${ask.total}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 text-xs py-2 border-b border-gray-700">
              <span className="text-gray-400">Spread</span>
              <span className="text-gray-400">0.50</span>
              <span className="text-gray-400">0.02%</span>
            </div>
            <div className="h-1/2 overflow-y-auto">
              {/* Bids */}
              {bids.map((bid, i) => (
                <div key={i} className="grid grid-cols-3 text-xs py-1">
                  <span className="text-green-500">{bid.price}</span>
                  <span>{bid.size}</span>
                  <span>${bid.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === 'trades' && (
        <div>
          <div className="grid grid-cols-3 text-sm text-gray-400 py-2 border-b border-gray-700">
            <span>Price (frUSD)</span>
            <span>Size</span>
            <span>Time</span>
          </div>
          <div>
            <div className="grid grid-cols-3 text-sm py-1">
              <span className="text-green-500">3,000.00</span>
              <span>0.123</span>
              <span>12:34:56</span>
            </div>
            <div className="grid grid-cols-3 text-sm py-1">
              <span className="text-red-500">2,999.99</span>
              <span>0.456</span>
              <span>12:34:55</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderBook;