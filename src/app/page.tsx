"use client";

import { OrderBook } from "@/components/features/order-book/order-book";
import { TradePanel } from "@/components/features/trade-panel/trade-panel";
import { MarketInfo } from "@/components/features/market-info";
import { TradingViewChart } from "@/components/features/trading-view-chart";

export default function Home() {
  return (
    <div className="grid h-full grid-rows-[auto,1fr] gap-2 p-2">
      <div className="bg-layer-card rounded-lg border px-4 py-2">
        <MarketInfo />
      </div>
      <div className="grid grid-cols-[1fr,320px,320px] gap-2">
        <div className="bg-layer-card flex h-full min-h-[600px] w-full rounded-lg border p-2">
          <TradingViewChart />
        </div>
        <OrderBook />
        <TradePanel />
      </div>
    </div>
  );
}
