"use client";
import React, { useState } from 'react';
import { IconFrEth, IconFrBtc } from './icons';

const assets = [
  { name: 'frETH', icon: <IconFrEth /> },
  { name: 'frBTC', icon: <IconFrBtc /> },
  { name: 'frUSD', icon: <span>$</span> },
];

interface AssetDropdownProps {
  selectedAsset: string;
  onSelectAsset: (asset: string) => void;
}

const AssetDropdown: React.FC<AssetDropdownProps> = ({ selectedAsset, onSelectAsset }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedAssetData = assets.find(asset => asset.name === selectedAsset);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedAssetData?.icon}
        {selectedAssetData?.name}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-20">
          {assets.map((asset) => (
            <button
              key={asset.name}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              onClick={() => {
                onSelectAsset(asset.name);
                setIsOpen(false);
              }}
            >
              {asset.icon}
              {asset.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssetDropdown;