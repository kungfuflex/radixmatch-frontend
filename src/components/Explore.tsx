"use client";
import React from 'react';
import { IconFrEth, IconFrBtc } from './icons';
import ClobCard from './ClobCard';

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
          <ClobCard key={market.name} market={market} />
        ))}
      </div>
    </div>
  );
};

export default Explore;