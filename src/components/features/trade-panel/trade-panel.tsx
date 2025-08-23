"use client";

import { mockBalances } from "@/data/mock";
import { useWalletContext } from "@/context/wallet-provider";
import { useState } from "react";

export function TradePanel() {
  const { isConnected } = useWalletContext();
  const [orderStatus, setOrderStatus] = useState<string | null>(null);

  const handlePlaceOrder = () => {
    if (isConnected) {
      setOrderStatus("Order placed successfully!");
      setTimeout(() => setOrderStatus(null), 3000);
    } else {
      setOrderStatus("Please connect your wallet to place an order.");
      setTimeout(() => setOrderStatus(null), 3000);
    }
  };

  return (
    <div
      dir="ltr"
      data-orientation="horizontal"
      className="bg-layer-card border flex w-full flex-1 flex-col rounded-lg"
    >
      <div
        role="tablist"
        aria-orientation="horizontal"
        aria-label="Tabs"
        className="flex w-full justify-between"
        tabIndex={0}
        data-orientation="horizontal"
        style={{ outline: "none" }}
      >
        <div className="flex w-full justify-between gap-0">
          <button
            type="button"
            role="tab"
            aria-selected="true"
            data-state="active"
            className="cursor-pointer text-secondary hover:text-primary hover:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-orange data-[state=active]:text-orange flex-1"
            tabIndex={-1}
            data-orientation="horizontal"
          >
            <p className="font-sans text-[12px] leading-[16px] font-normal text-inherit drop-cap p-3">
              Buy
            </p>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            data-state="inactive"
            className="cursor-pointer text-secondary hover:text-primary hover:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-orange data-[state=active]:text-orange flex-1"
            tabIndex={-1}
            data-orientation="horizontal"
          >
            <p className="font-sans text-[12px] leading-[16px] font-normal text-inherit drop-cap p-3">
              Sell
            </p>
          </button>
        </div>
      </div>
      <div
        data-state="active"
        data-orientation="horizontal"
        role="tabpanel"
        className="h-full border-t"
        style={{}}
      >
        <div className="flex flex-col gap-2 p-2">
          <div
            role="group"
            dir="ltr"
            className="flex gap-1 rounded-lg p-1 bg-layer-card flex w-full justify-between"
            aria-label="Text alignment"
            tabIndex={0}
            style={{ outline: "none" }}
          >
            <button
              type="button"
              data-state="on"
              role="radio"
              aria-checked="true"
              className="text-secondary hover:text-primary hover:bg-layer-card flex flex-1 items-center justify-center rounded-md focus:outline-none data-[state=on]:bg-layer-orange data-[state=on]:text-orange hover:text-primary hover:bg-layer-card cursor-pointer px-3 py-2"
              aria-label="Market"
              tabIndex={-1}
            >
              <p className="font-family-mono text-[12px] leading-[16px] font-medium text-inherit drop-cap text-nowrap">
                Market
              </p>
            </button>
            <button
              type="button"
              data-state="off"
              role="radio"
              aria-checked="false"
              className="text-secondary hover:text-primary hover:bg-layer-card flex flex-1 items-center justify-center rounded-md focus:outline-none data-[state=on]:bg-layer-orange data-[state=on]:text-orange hover:text-primary hover:bg-layer-card cursor-pointer px-3 py-2"
              aria-label="Limit"
              tabIndex={-1}
            >
              <p className="font-family-mono text-[12px] leading-[16px] font-medium text-inherit drop-cap text-nowrap">
                Limit
              </p>
            </button>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-col gap-3">
              <div className="relative flex flex-col gap-1">
                <div className="group flex flex-col border gap-2 rounded-lg p-2 bg-layer-card focus-within:bg-layer-button">
                  <div className="flex items-center justify-between gap-4">
                    <button className="bg-layer-button mobile:max-w-full w-[96px] gap-2 rounded-full mobile:w-[115px]">
                      <div className="hover:bg-layer-button flex shrink-0 cursor-pointer items-center justify-between gap-2 rounded-full p-1 pr-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <div className="relative" data-state="closed">
                            <div className="inline-flex items-center justify-center overflow-hidden align-middle select-none rounded-full size-[24px]">
                              <img
                                className="size-full rounded-[inherit] object-cover border"
                                alt="USD"
                                role="img"
                                src="https://i.imgur.com/rkSOGzt.png"
                              />
                            </div>
                          </div>
                          <span className="font-family-mono text-[14px] leading-[16px] font-normal text-primary truncate text-ellipsis max-w-full drop-cap mobile:block hidden">
                            USD
                          </span>
                          <span className="font-family-mono text-[14px] leading-[16px] font-normal text-primary truncate text-ellipsis max-w-full drop-cap mobile:hidden">
                            USD
                          </span>
                        </div>
                      </div>
                    </button>
                    <input
                      inputMode="decimal"
                      className="font-family-mono text-end text-[24px] leading-[32px] outline-none placeholder:text-secondary group-focus:bg-layer-card tablet:w-full w-[120px]"
                      placeholder="-0.00"
                    />
                  </div>
                  <div className="flex cursor-pointer items-center gap-1">
                    <span className="font-sans text-[12px] leading-[16px] font-normal text-tertiary drop-cap">
                      Balance:
                    </span>
                    <div className="font-sans text-[12px] leading-[16px] font-normal text-secondary">
                      {mockBalances.USD}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="disabled:pointer-events-none bg-orange text-primary disabled:bg-tertiary disabled:text-secondary hover:bg-orange/80 px-4 h-[48px] w-full rounded-t-sm rounded-b-md uppercase cursor-pointer w-fit rounded-lg"
              >
                <div className="flex items-center justify-center gap-2">
                  <p className="font-family-mono text-[14px] leading-[16px] font-normal text-inherit drop-cap">
                    {isConnected ? "Place Order" : "Connect Wallet"}
                  </p>
                </div>
              </button>
              {orderStatus && (
                <div className="text-center text-sm text-green-500">
                  {orderStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}