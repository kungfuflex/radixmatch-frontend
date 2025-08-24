"use client";
import React from 'react';
import Link from 'next/link';
import { IconFrEth, IconFrBtc } from './icons';

const markets = [
  {
    name: 'frBTC/frETH',
    description: 'Trade the most popular crypto pair.',
    href: '/trade',
    icon: <div className="flex items-center"><IconFrBtc /><IconFrEth /></div>,
    bgColor: 'bg-orange-500/10',
    textColor: 'text-orange-500',
  },
  {
    name: 'frETH/frUSD',
    description: 'The most liquid market for frETH.',
    href: '/trade',
    icon: <IconFrEth />,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
  },
  {
    name: 'frBTC/frUSD',
    description: 'The most liquid market for frBTC.',
    href: '/trade',
    icon: <IconFrBtc />,
    bgColor: 'bg-yellow-500/10',
    textColor: 'text-yellow-500',
  },
];

const Explore = () => {
  return (
    <div className="flex-1 bg-black p-4 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {markets.map((market) => (
          <Link
            key={market.name}
            href={market.href}
            className="group relative flex flex-col justify-between h-48 p-4 rounded-lg border border-gray-800 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
          >
            <div className={`absolute inset-0 ${market.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            <div className="relative z-10 flex justify-between items-start">
              <div className={`p-2 rounded-lg ${market.bgColor} ${market.textColor}`}>
                {market.icon}
              </div>
              <div className="flex h-[20px] gap-1.5 transition-all duration-300 group-hover:gap-2">
                <div className="h-full -skew-x-[20deg] bg-white/40" style={{ width: '1px' }}></div>
                <div className="h-full -skew-x-[20deg] bg-white/40" style={{ width: '2px' }}></div>
                <div className="h-full -skew-x-[20deg] bg-white/40" style={{ width: '3px' }}></div>
                <div className="h-full -skew-x-[20deg] bg-white/40" style={{ width: '4px' }}></div>
                <div className="h-full -skew-x-[20deg] bg-white/40" style={{ width: '5px' }}></div>
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-lg font-bold text-gray-200">{market.name}</h2>
              <p className="text-sm text-gray-400">{market.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;