export function TradePanel() {
  return (
    <div
      dir="ltr"
      data-orientation="horizontal"
      className="bg-layer-card border flex w-full flex-1 flex-col rounded-lg border rounded-lg"
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
            {/* Trade Panel Content */}
          </div>
        </div>
      </div>
    </div>
  );
}