"use client";

import { mockOrderBook, mockTrades } from "@/data/mock";
import { useState } from "react";
import AnimatedCounter from "@/components/ui/animated-counter";

type Tab = "order-book" | "trades";

export function OrderBook() {
  const { bids, asks, spread } = mockOrderBook;
  const [activeTab, setActiveTab] = useState<Tab>("order-book");

  const maxTotalAsks = Math.max(...asks.map((ask) => ask.total));
  const maxTotalBids = Math.max(...bids.map((bid) => bid.total));

  return (
    <div className="bg-layer-card border rounded-lg flex flex-col h-full">
      <div className="flex w-full justify-between border-b">
        <button
          onClick={() => setActiveTab("order-book")}
          className={`flex-1 p-3 text-center font-sans text-xs font-normal ${
            activeTab === "order-book"
              ? "text-orange shadow-[inset_0_-1px_0_0] shadow-orange"
              : "text-secondary hover:text-primary"
          }`}
        >
          Order Book
        </button>
        <button
          onClick={() => setActiveTab("trades")}
          className={`flex-1 p-3 text-center font-sans text-xs font-normal ${
            activeTab === "trades"
              ? "text-orange shadow-[inset_0_-1px_0_0] shadow-orange"
              : "text-secondary hover:text-primary"
          }`}
        >
          Trades
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {activeTab === "order-book" && (
          <div className="flex flex-col">
            <div className="flex items-center px-3 py-2">
              <p className="font-mono text-xs font-normal text-secondary flex-1 text-start">
                Price
              </p>
              <p className="font-mono text-xs font-normal text-secondary flex-1 text-center">
                Size
              </p>
              <p className="font-mono text-xs font-normal text-secondary flex-1 text-end">
                Total
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <div className="flex flex-col-reverse gap-0.5">
                {asks.map((ask, i) => (
                  <div
                    key={i}
                    className="hover:bg-layer-card relative cursor-pointer px-3 py-1"
                  >
                    <div
                      className="absolute top-0 left-0 h-full opacity-20 transition-all duration-300 rounded-none bg-red"
                      style={{ width: `${(ask.total / maxTotalAsks) * 100}%` }}
                    ></div>
                    <div className="z-10 flex gap-4">
                      <p className="font-mono text-xs font-normal text-red flex-1 text-start">
                        <AnimatedCounter value={ask.price} />
                      </p>
                      <p className="font-mono text-xs font-normal text-primary flex-1 text-center">
                        <AnimatedCounter value={ask.size} />
                      </p>
                      <p className="font-mono text-xs font-normal text-primary flex-1 text-end">
                        <AnimatedCounter value={ask.total} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-layer-card flex items-center px-3 py-1">
                <p className="font-mono text-xs font-normal text-secondary flex-1 text-start">
                  Spread
                </p>
                <p className="font-mono text-xs font-normal text-secondary flex-1 text-center">
                  <AnimatedCounter value={spread.value} />
                </p>
                <p className="font-mono text-xs font-normal text-secondary flex-1 text-end">
                  <AnimatedCounter value={spread.percentage} />%
                </p>
              </div>
              <div className="flex flex-col gap-0.5">
                {bids.map((bid, i) => (
                  <div
                    key={i}
                    className="hover:bg-layer-card relative cursor-pointer px-3 py-1"
                  >
                    <div
                      className="absolute top-0 left-0 h-full opacity-20 transition-all duration-300 rounded-none bg-green"
                      style={{ width: `${(bid.total / maxTotalBids) * 100}%` }}
                    ></div>
                    <div className="z-10 flex gap-4">
                      <p className="font-mono text-xs font-normal text-green flex-1 text-start">
                        <AnimatedCounter value={bid.price} />
                      </p>
                      <p className="font-mono text-xs font-normal text-primary flex-1 text-center">
                        <AnimatedCounter value={bid.size} />
                      </p>
                      <p className="font-mono text-xs font-normal text-primary flex-1 text-end">
                        <AnimatedCounter value={bid.total} />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "trades" && (
          <div className="flex flex-col h-full">
            <div className="flex items-center px-3 py-2">
              <p className="font-mono text-xs font-normal text-secondary flex-1 text-start">
                Price
              </p>
              <p className="font-mono text-xs font-normal text-secondary flex-1 text-center">
                Size
              </p>
              <p className="font-mono text-xs font-normal text-secondary flex-1 text-end">
                Time
              </p>
            </div>
            <div className="flex-1 overflow-y-auto">
              {mockTrades.map((trade, i) => (
                <div
                  key={i}
                  className="hover:bg-layer-card relative cursor-pointer px-3 py-1"
                >
                  <div className="z-10 flex gap-4">
                    <p
                      className={`font-mono text-xs font-normal flex-1 text-start ${
                        trade.type === "buy" ? "text-green" : "text-red"
                      }`}
                    >
                      <AnimatedCounter value={trade.price} />
                    </p>
                    <p className="font-mono text-xs font-normal text-primary flex-1 text-center">
                      <AnimatedCounter value={trade.amount} precision={3} />
                    </p>
                    <p className="font-mono text-xs font-normal text-primary flex-1 text-end">
                      {trade.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}