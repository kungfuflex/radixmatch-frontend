"use client";
import React from 'react';
import Link from 'next/link';

interface ClobCardProps {
  market: {
    name: string;
    description: string;
    href: string;
    icon: React.ReactNode;
    bgColor: string;
    textColor: string;
  };
}

const ClobCard: React.FC<ClobCardProps> = ({ market }) => {
  return (
    <Link href={market.href}>
      <a className="group relative flex flex-col justify-between h-48 p-4 rounded-lg border border-gray-800 bg-black hover:bg-gray-900 transition-all duration-300">
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
      </a>
    </Link>
  );
};

export default ClobCard;