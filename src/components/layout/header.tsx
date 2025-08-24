"use client";

import { useWalletContext } from "@/context/wallet-provider";
import { IconFrBtc, IconFrEth } from "../icons";
import { useState } from "react";

export function Header() {
  const { isConnected, address, connect, disconnect } = useWalletContext();
  const [market, setMarket] = useState("frETH");
  const [isMarketDropdownOpen, setIsMarketDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b bg-layer-card px-6 h-16">
      <div className="relative">
        <button
          onClick={() => setIsMarketDropdownOpen(!isMarketDropdownOpen)}
          className="flex items-center gap-2 rounded-full bg-layer-button p-1 pr-3"
        >
          {market === "frETH" ? <IconFrEth /> : <IconFrBtc />}
          <span className="font-mono text-sm font-normal text-primary">
            {market}
          </span>
        </button>
        {isMarketDropdownOpen && (
          <div className="absolute mt-2 w-40 rounded-lg bg-layer-card border">
            <button
              onClick={() => {
                setMarket("frETH");
                setIsMarketDropdownOpen(false);
              }}
              className="flex w-full items-center gap-2 p-2 text-left hover:bg-layer-button"
            >
              <IconFrEth />
              <span className="font-mono text-sm font-normal text-primary">
                frETH
              </span>
            </button>
            <button
              onClick={() => {
                setMarket("frBTC");
                setIsMarketDropdownOpen(false);
              }}
              className="flex w-full items-center gap-2 p-2 text-left hover:bg-layer-button"
            >
              <IconFrBtc />
              <span className="font-mono text-sm font-normal text-primary">
                frBTC
              </span>
            </button>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4">
        {isConnected ? (
          <button
            onClick={disconnect}
            className="rounded-lg bg-layer-button px-3 py-2 text-sm font-normal text-secondary hover:bg-white/20"
          >
            {address}
          </button>
        ) : (
          <button
            onClick={connect}
            className="rounded-lg bg-layer-button px-3 py-2 text-sm font-normal text-secondary hover:bg-white/20"
          >
            Connect
          </button>
        )}
        <div className="relative">
          <button
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            className="flex items-center"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 9L7.5 6L4.5 3"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          {isUserDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg bg-layer-card border">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-primary hover:bg-layer-button"
              >
                Language
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-primary hover:bg-layer-button"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-primary hover:bg-layer-button"
              >
                Terms of Service
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}