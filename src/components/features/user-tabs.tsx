"use client";

import { useState } from "react";
import { useWalletContext } from "@/context/wallet-provider";

type Tab = "open-orders" | "filled-orders" | "balances" | "discussions";

export function UserTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("open-orders");
  const { isConnected } = useWalletContext();

  const renderContent = () => {
    if (!isConnected) {
      return (
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <button className="disabled:pointer-events-none bg-orange text-primary disabled:bg-tertiary disabled:text-secondary hover:bg-orange/80 py-2 px-3 cursor-pointer w-fit rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <p className="font-mono text-[12px] leading-[16px] font-normal text-inherit ">
                Connect your wallet
              </p>
            </div>
          </button>
        </div>
      );
    }
    // Add content for each tab here
    return <div />;
  };

  return (
    <div
      dir="ltr"
      data-orientation="horizontal"
      className="bg-layer-card border w-full rounded-lg"
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
        <div className="gap-4">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "open-orders"}
            data-state={activeTab === "open-orders" ? "active" : "inactive"}
            className="cursor-pointer text-secondary hover:text-primary hover:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-orange data-[state=active]:text-orange"
            tabIndex={-1}
            onClick={() => setActiveTab("open-orders")}
          >
            <p className="font-sans text-[12px] leading-[16px] font-normal text-inherit  p-3">
              Open Orders
            </p>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "filled-orders"}
            data-state={activeTab === "filled-orders" ? "active" : "inactive"}
            className="cursor-pointer text-secondary hover:text-primary hover:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-orange data-[state=active]:text-orange"
            tabIndex={-1}
            onClick={() => setActiveTab("filled-orders")}
          >
            <p className="font-sans text-[12px] leading-[16px] font-normal text-inherit  p-3">
              Filled Orders
            </p>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "balances"}
            data-state={activeTab === "balances" ? "active" : "inactive"}
            className="cursor-pointer text-secondary hover:text-primary hover:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-orange data-[state=active]:text-orange"
            tabIndex={-1}
            onClick={() => setActiveTab("balances")}
          >
            <p className="font-sans text-[12px] leading-[16px] font-normal text-inherit  p-3">
              Balances
            </p>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "discussions"}
            data-state={activeTab === "discussions" ? "active" : "inactive"}
            className="cursor-pointer text-secondary hover:text-primary hover:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-[inset_0_-1px_0_0] data-[state=active]:shadow-orange data-[state=active]:text-orange"
            tabIndex={-1}
            onClick={() => setActiveTab("discussions")}
          >
            <p className="font-sans text-[12px] leading-[16px] font-normal text-inherit  p-3">
              Discussions
            </p>
          </button>
        </div>
      </div>
      <div className="h-full border-t p-6">{renderContent()}</div>
    </div>
  );
}