"use client";

import Link from "next/link";
import { IconSearch } from "../icons";
import { useWalletContext } from "@/context/wallet-provider";

export function Header() {
  const { isConnected, address, connect, disconnect } = useWalletContext();

  return (
    <header className="bg-layer-0 desktop:fixed top-0 right-0 left-0 z-20 desktop:ml-[var(--sidebar-width)] ml-none desktop:m-0">
      <div className="bg-layer-card flex h-[var(--header-height)] items-center justify-between border-b desktop:px-6 relative px-4">
        <div className="flex items-center gap-4">
          <Link className="mobile:block desktop:hidden" href="/">
            <img
              alt="logo"
              loading="lazy"
              width="48"
              height="20"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/logos/gte-logo-white.svg"
            />
          </Link>
          <h1 className="font-sans text-[14px] leading-[16px] font-normal text-secondary drop-cap tablet:block hidden">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button className="bg-layer-button mobile:max-w-full w-[96px] gap-2 rounded-full mobile:w-[136px]">
                  <div className="hover:bg-layer-button flex shrink-0 cursor-pointer items-center justify-between gap-2 rounded-full p-1 pr-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <div className="relative" data-state="closed">
                        <div className="inline-flex items-center justify-center overflow-hidden align-middle select-none rounded-full size-[24px]">
                          <img
                            className="size-full rounded-[inherit] object-cover border"
                            alt="ETH"
                            role="img"
                            src="https://metacore.mobula.io/d90e937d915ab0c865ff6e335361386c56524d4d33fb66f2f04defe1500082eb.png"
                          />
                        </div>
                      </div>
                      <span className="font-family-mono text-[14px] leading-[16px] font-normal text-primary truncate text-ellipsis max-w-full drop-cap mobile:block hidden">
                        ETH
                      </span>
                      <span className="font-family-mono text-[14px] leading-[16px] font-normal text-primary truncate text-ellipsis max-w-full drop-cap mobile:hidden">
                        ETH
                      </span>
                    </div>
                  </div>
                </button>
              </div>
              <div
                role="group"
                dir="ltr"
                className="flex gap-1 rounded-lg p-1 bg-layer-card w-fit"
                aria-label="Text alignment"
                tabIndex={0}
                style={{ outline: "none" }}
              >
                <button
                  type="button"
                  data-state="off"
                  role="radio"
                  aria-checked="false"
                  className="text-secondary hover:text-primary hover:bg-layer-card flex flex-1 items-center justify-center rounded-md focus:outline-none data-[state=on]:bg-layer-orange data-[state=on]:text-orange hover:text-primary hover:bg-layer-card cursor-pointer px-3 py-1"
                  aria-label="AMM"
                  tabIndex={-1}
                  data-radix-collection-item=""
                >
                  <p className="font-family-mono text-[12px] leading-[16px] font-medium text-inherit drop-cap text-nowrap">
                    AMM
                  </p>
                </button>
                <button
                  type="button"
                  data-state="on"
                  data-disabled=""
                  role="radio"
                  aria-checked="true"
                  className="text-secondary hover:text-primary hover:bg-layer-card flex flex-1 items-center justify-center rounded-md focus:outline-none data-[state=on]:bg-layer-orange data-[state=on]:text-orange text-tertiary cursor-not-allowed px-3 py-1"
                  aria-label="CLOB"
                  disabled
                  tabIndex={-1}
                  data-radix-collection-item=""
                >
                  <p className="font-family-mono text-[12px] leading-[16px] font-medium text-inherit drop-cap text-nowrap">
                    CLOB
                  </p>
                </button>
                <button
                  type="button"
                  data-state="off"
                  data-disabled=""
                  role="radio"
                  aria-checked="false"
                  className="text-secondary hover:text-primary hover:bg-layer-card flex flex-1 items-center justify-center rounded-md focus:outline-none data-[state=on]:bg-layer-orange data-[state=on]:text-orange text-tertiary cursor-not-allowed px-3 py-1"
                  aria-label="Perps"
                  disabled
                  tabIndex={-1}
                  data-radix-collection-item=""
                >
                  <p className="font-family-mono text-[12px] leading-[16px] font-medium text-inherit drop-cap text-nowrap">
                    Perps
                  </p>
                </button>
              </div>
            </div>
          </h1>
        </div>
        <div
          className="absolute left-1/2 hidden w-[15vw] -translate-x-[70%] items-center gap-2 desktop:flex"
          role="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
        >
          <div className="relative flex flex-col gap-1 w-full">
            <div className="relative">
              <input
                placeholder="Search GTE"
                disabled
                className="bg-layer-card focus:bg-layer-button placeholder:text-secondary w-full rounded-lg border focus:outline-none h-8 p-1.5 text-[12px] placeholder:text-[12px] border-none placeholder:text-secondary! pl-8"
              />
              <div className="absolute top-1/2 left-3 -translate-y-1/2">
                <IconSearch />
              </div>
            </div>
          </div>
          <button className="absolute h-full w-full cursor-pointer"></button>
        </div>
        <div className="flex items-center flex-row">
          <div className="relative w-full">
            {isConnected ? (
              <button
                onClick={disconnect}
                className="disabled:pointer-events-none bg-layer-button text-secondary disabled:text-tertiary hover:bg-white/20 py-2 px-3 cursor-pointer w-fit rounded-lg"
              >
                <div className="flex items-center justify-center gap-2">
                  <p className="font-family-mono text-[12px] leading-[16px] font-normal text-inherit drop-cap">
                    {address}
                  </p>
                </div>
              </button>
            ) : (
              <button
                onClick={connect}
                className="disabled:pointer-events-none bg-layer-button text-secondary disabled:text-tertiary hover:bg-white/20 py-2 px-3 cursor-pointer w-fit rounded-lg"
              >
                <div className="flex items-center justify-center gap-2">
                  <p className="font-family-mono text-[12px] leading-[16px] font-normal text-inherit drop-cap">
                    Connect
                  </p>
                </div>
              </button>
            )}
          </div>
          <div className="relative w-full">
            <div className="absolute top-0 left-0 z-10 h-full -translate-x-1/2 flex-col">
              <div className="flex h-full flex-col justify-center gap-0.5">
                <div className="bg-separator size-1.5 rounded-full"></div>
                <div className="bg-separator size-1.5 rounded-full"></div>
                <div className="bg-separator size-1.5 rounded-full"></div>
              </div>
            </div>
            <button
              className="disabled:pointer-events-none bg-layer-button text-secondary disabled:text-tertiary hover:bg-white/20 py-2 px-3 cursor-pointer uppercase cursor-pointer w-fit rounded-lg cursor-pointer uppercase"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-90"
                  >
                    <path
                      d="M4.5 9L7.5 6L4.5 3"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}