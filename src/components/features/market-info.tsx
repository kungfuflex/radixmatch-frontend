"use client";

import { mockMarketInfo } from "@/data/mock";
import { IconCopy } from "@/components/icons";
import AnimatedCounter from "@/components/ui/animated-counter";

export function MarketInfo() {
  const { price, change, volume, marketCap, contract } = mockMarketInfo;

  const handleCopy = () => {
    navigator.clipboard.writeText(contract);
  };

  return (
    <div className="grid grid-cols-1 gap-2 tablet:grid-cols-2 desktop:grid-cols-4">
      <div className="flex flex-col gap-1">
        <p className="font-sans text-xs font-normal text-secondary">
          Price (24hr Change)
        </p>
        <div className="flex items-center gap-2">
          <div className="font-mono text-sm font-normal text-primary flex items-center">
            $<AnimatedCounter value={price} />
          </div>
          <div
            className={`font-mono text-sm font-normal flex items-center text-${
              change > 0 ? "green" : "red"
            }`}
          >
            <AnimatedCounter value={change} />%
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-sans text-xs font-normal text-secondary">
          24h Volume
        </p>
        <div className="font-mono text-sm font-normal text-primary flex items-center">
          $<AnimatedCounter value={volume} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-sans text-xs font-normal text-secondary">
          Market Cap
        </p>
        <div className="font-mono text-sm font-normal text-primary flex items-center">
          $<AnimatedCounter value={marketCap} />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-sans text-xs font-normal text-secondary">
          Contract
        </p>
        <div
          className="flex cursor-pointer items-center gap-1 text-secondary hover:text-primary"
          onClick={handleCopy}
        >
          <p className="font-mono text-sm font-normal text-secondary">
            {`${contract.slice(0, 6)}...${contract.slice(-4)}`}
          </p>
          <IconCopy />
        </div>
      </div>
    </div>
  );
}