import { mockOrderBook } from "@/data/mock";

export function OrderBook() {
  const { bids, asks, spread } = mockOrderBook;

  return (
    <div
      dir="ltr"
      data-orientation="horizontal"
      className="bg-layer-card border rounded-lg"
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
              Order Book
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
              Trades
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
        <div className="flex flex-col">
          <div className="flex items-center px-3 py-2">
            <p className="font-family-mono text-[12px] leading-[16px] font-normal text-secondary drop-cap flex-1 text-start">
              Price
            </p>
            <p className="font-family-mono text-[12px] leading-[16px] font-normal text-secondary drop-cap flex-1 text-center">
              Size
            </p>
            <p className="font-family-mono text-[12px] leading-[16px] font-normal text-secondary drop-cap flex-1 text-end">
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
                    style={{ width: `${(ask.total / 55.29) * 100}%` }}
                  ></div>
                  <div className="z-10 flex gap-4">
                    <p className="font-family-mono text-[12px] leading-[16px] font-normal text-red drop-cap flex-1 text-start">
                      {ask.price.toLocaleString()}
                    </p>
                    <p className="font-family-mono text-[12px] leading-[16px] font-normal text-primary drop-cap flex-1 text-center">
                      {ask.size}
                    </p>
                    <p className="font-family-mono text-[12px] leading-[16px] font-normal text-primary drop-cap flex-1 text-end">
                      {ask.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-layer-card flex items-center px-3 py-1">
              <p className="font-family-mono text-[12px] leading-[16px] font-normal text-secondary drop-cap flex-1 text-start">
                Spread
              </p>
              <p className="font-family-mono text-[12px] leading-[16px] font-normal text-secondary drop-cap flex-1 text-center">
                {spread.value.toLocaleString()}
              </p>
              <p className="font-family-mono text-[12px] leading-[16px] font-normal text-secondary drop-cap flex-1 text-end">
                {spread.percentage}%
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
                    style={{ width: `${(bid.total / 0.03) * 100}%` }}
                  ></div>
                  <div className="z-10 flex gap-4">
                    <p className="font-family-mono text-[12px] leading-[16px] font-normal text-green drop-cap flex-1 text-start">
                      {bid.price.toLocaleString()}
                    </p>
                    <p className="font-family-mono text-[12px] leading-[16px] font-normal text-primary drop-cap flex-1 text-center">
                      {bid.size}
                    </p>
                    <p className="font-family-mono text-[12px] leading-[16px] font-normal text-primary drop-cap flex-1 text-end">
                      {bid.total}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}