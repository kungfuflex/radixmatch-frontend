"use client";

import { mockBalances } from "@/data/mock";
import { useWalletContext } from "@/context/wallet-provider";
import { useState } from "react";
import AnimatedCounter from "@/components/ui/animated-counter";

type TradeType = "buy" | "sell";
type OrderType = "market" | "limit";

export function TradePanel() {
  const { isConnected } = useWalletContext();
  const [orderStatus, setOrderStatus] = useState<string | null>(null);
  const [tradeType, setTradeType] = useState<TradeType>("buy");
  const [orderType, setOrderType] = useState<OrderType>("market");
  const [isLoading, setIsLoading] = useState(false);

  const handlePlaceOrder = () => {
    if (isConnected) {
      setIsLoading(true);
      setTimeout(() => {
        setOrderStatus("Order placed successfully!");
        setIsLoading(false);
        setTimeout(() => setOrderStatus(null), 3000);
      }, 1000);
    } else {
      setOrderStatus("Please connect your wallet to place an order.");
      setTimeout(() => setOrderStatus(null), 3000);
    }
  };

  return (
    <div className="bg-layer-card border flex w-full flex-1 flex-col rounded-lg">
      <div className="flex w-full justify-between border-b">
        <button
          onClick={() => setTradeType("buy")}
          className={`flex-1 p-3 text-center font-sans text-xs font-normal ${
            tradeType === "buy"
              ? "text-orange shadow-[inset_0_-1px_0_0] shadow-orange"
              : "text-secondary hover:text-primary"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setTradeType("sell")}
          className={`flex-1 p-3 text-center font-sans text-xs font-normal ${
            tradeType === "sell"
              ? "text-orange shadow-[inset_0_-1px_0_0] shadow-orange"
              : "text-secondary hover:text-primary"
          }`}
        >
          Sell
        </button>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex gap-1 rounded-lg p-1 bg-layer-card w-full justify-between">
          <button
            onClick={() => setOrderType("market")}
            className={`flex-1 px-3 py-2 text-center font-mono text-xs font-medium rounded-md ${
              orderType === "market"
                ? "bg-layer-orange text-orange"
                : "text-secondary hover:bg-layer-button"
            }`}
          >
            Market
          </button>
          <button
            onClick={() => setOrderType("limit")}
            className={`flex-1 px-3 py-2 text-center font-mono text-xs font-medium rounded-md ${
              orderType === "limit"
                ? "bg-layer-orange text-orange"
                : "text-secondary hover:bg-layer-button"
            }`}
          >
            Limit
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
                        <span className="font-mono text-sm font-normal text-primary truncate text-ellipsis max-w-full  mobile:block hidden">
                          USD
                        </span>
                        <span className="font-mono text-sm font-normal text-primary truncate text-ellipsis max-w-full  mobile:hidden">
                          USD
                        </span>
                      </div>
                    </div>
                  </button>
                  <input
                    inputMode="decimal"
                    className="font-mono text-end text-2xl leading-8 outline-none placeholder:text-secondary group-focus:bg-layer-card tablet:w-full w-[120px]"
                    placeholder="-0.00"
                  />
                </div>
                <div className="flex cursor-pointer items-center gap-1">
                  <span className="font-sans text-xs font-normal text-tertiary">
                    Balance:
                  </span>
                  <div className="font-sans text-xs font-normal text-secondary">
                    <AnimatedCounter value={mockBalances.USD} />
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="disabled:pointer-events-none bg-orange text-primary disabled:bg-tertiary disabled:text-secondary hover:bg-orange/80 px-4 h-12 w-full rounded-t-sm rounded-b-md uppercase cursor-pointer w-fit rounded-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <p className="font-mono text-sm font-normal text-inherit">
                  {isLoading
                    ? "Placing Order..."
                    : isConnected
                    ? "Swap"
                    : "Connect Wallet"}
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
  );
}