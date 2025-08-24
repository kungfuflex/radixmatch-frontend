"use client";

import { mockBalances } from "@/data/mock";
import AnimatedCounter from "@/components/ui/animated-counter";

export function ClobBalance() {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-sans text-[12px] leading-[16px] font-normal text-secondary  underline">
        CLOB Balance
      </p>
      <div className="flex items-center justify-between">
        <p className="font-sans text-[12px] leading-[16px] font-normal text-secondary ">
          ETH
        </p>
        <p className="font-mono text-[12px] leading-[16px] font-medium text-primary ">
          <AnimatedCounter value={mockBalances.ETH} />
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-sans text-[12px] leading-[16px] font-normal text-secondary ">
          USD
        </p>
        <p className="font-mono text-[12px] leading-[16px] font-medium text-primary ">
          <AnimatedCounter value={mockBalances.USD} />
        </p>
      </div>
      <button className="disabled:pointer-events-none bg-layer-button text-secondary disabled:text-tertiary hover:bg-white/20 py-2 px-3 w-full cursor-pointer w-fit rounded-lg">
        <div className="flex items-center justify-center gap-2">
          <p className="font-mono text-[12px] leading-[16px] font-normal text-inherit ">
            Withdraw
          </p>
        </div>
      </button>
    </div>
  );
}