"use client";
import React, { useState } from 'react';

const OrderBook = () => {
  const [activeTab, setActiveTab] = useState('orderBook');

  return (
    <div className="bg-gray-800 text-white p-4 h-full">
      <div className="flex border-b border-gray-700">
        <button
          className={`py-2 px-4 ${activeTab === 'orderBook' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('orderBook')}
        >
          Order Book
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'trades' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('trades')}
        >
          Trades
        </button>
      </div>
      {activeTab === 'orderBook' && (
        <div>
          <div className="grid grid-cols-3 text-sm text-gray-400 py-2 border-b border-gray-700">
            <span>Price (USD)</span>
            <span>Size</span>
            <span>Total</span>
          </div>
          <div>
            {/* Asks */}
            <div className="grid grid-cols-3 text-sm py-1 bg-red-500 bg-opacity-20">
              <span className="text-red-500">3,001.00</span>
              <span>0.123</span>
              <span>$369.12</span>
            </div>
            <div className="grid grid-cols-3 text-sm py-1">
              <span className="text-red-500">3,000.50</span>
              <span>0.456</span>
              <span>$1,368.22</span>
            </div>
            {/* Bids */}
            <div className="grid grid-cols-3 text-sm py-1 bg-green-500 bg-opacity-20">
              <span className="text-green-500">2,999.50</span>
              <span>0.789</span>
              <span>$2,366.61</span>
            </div>
            <div className="grid grid-cols-3 text-sm py-1">
              <span className="text-green-500">2,999.00</span>
              <span>1.011</span>
              <span>$3,031.98</span>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'trades' && (
        <div>
          <div className="grid grid-cols-3 text-sm text-gray-400 py-2 border-b border-gray-700">
            <span>Price (USD)</span>
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