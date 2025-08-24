"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RadixLogo from './icons/RadixLogo';
import {
  IconDash,
  IconEarn,
  IconExplore,
  IconLaunch,
  IconPortfolio,
  IconSwap,
  IconTrade,
} from './icons';
import Modal from './Modal';

const LeftSidebar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Explore', href: '/explore', icon: <IconExplore /> },
    { name: 'Trade', href: '/trade', icon: <IconTrade /> },
    { name: 'Swap', href: '/swap', icon: <IconSwap /> },
    { name: 'Earn', href: '/earn', icon: <IconEarn /> },
    { name: 'Portfolio', href: '/portfolio', icon: <IconPortfolio /> },
  ];

  const bottomNavItems = [
    { name: 'Launch', icon: <IconLaunch />, onClick: () => setModalOpen(true) },
  ];

  return (
    <>
      <aside className="w-20 bg-black flex flex-col items-center py-4">
        <div className="mb-8">
          <RadixLogo />
          <p className="text-xs text-center mt-1">RADIX</p>
        </div>
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-xs ${
                pathname === item.href ? 'text-orange-500' : ''
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-6">
          {bottomNavItems.map((item) => (
            <button
              key={item.name}
              title={item.name}
              className="flex flex-col items-center gap-1 text-xs"
              onClick={item.onClick}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </aside>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Launch a Token</h2>
        <p>This is where the token launch form will go.</p>
      </Modal>
    </>
  );
};

export default LeftSidebar;