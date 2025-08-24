"use client";
import React from 'react';
import RadixLogo from './icons/RadixLogo';

const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="animate-spin">
        <RadixLogo />
      </div>
    </div>
  );
};

export default LoadingSpinner;