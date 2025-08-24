"use client";

import Link from "next/link";
import {
  IconDash,
  IconEarn,
  IconExplore,
  IconPortfolio,
  IconSwap,
  IconTrade,
  IconLaunch,
} from "../icons";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LaunchTokenModal } from "../features/launch-token-modal";

const navItems = [
  { href: "/", label: "Explore", icon: IconExplore },
  {
    href: "/trade/spot/0x776401b9bc8aae31a685731b7147d4445fd9fb19/0x5ca9f32d4ce7cc0f782213c446c2ae14b754a623",
    label: "Trade",
    icon: IconTrade,
  },
  { href: "/dash", label: "Dash", icon: IconDash },
  { href: "/swap", label: "Swap", icon: IconSwap },
  { href: "/earn", label: "Earn", icon: IconEarn },
];

export function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <aside className="absolute top-0 left-0 h-full w-20 flex flex-col items-center justify-between border-r bg-layer-card py-4">
        <div className="flex flex-col items-center gap-2">
          <Link
            className="relative flex h-5 items-center justify-center"
            href="/"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4L4 14L24 24L44 14L24 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 34L24 44L44 34"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 24L24 34L44 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <h1 className="font-mono text-xs font-normal text-secondary">Alpha</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} aria-label={label.toLowerCase()}>
                <button
                  className={`rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 p-2 ${
                    isActive
                      ? "text-orange bg-layer-orange"
                      : "text-secondary hover:text-primary hover:bg-layer-button"
                  }`}
                >
                  <Icon />
                </button>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link href="/portfolio" aria-label="portfolio">
            <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
              <IconPortfolio />
            </button>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-primary bg-layer-button p-2"
          >
            <IconLaunch />
          </button>
        </div>
      </aside>
      <LaunchTokenModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}