import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Footer } from "@/components/layout/footer";
import { OrderBook } from "@/components/features/order-book/order-book";
import { TradePanel } from "@/components/features/trade-panel/trade-panel";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="bg-layer-0 flex-1 desktop:ml-[var(--sidebar-width)] ml-0 desktop:mt-[var(--header-height)] mt-0 desktop:mb-0 overflow-y-auto mb-[calc(var(--footer-height)+var(--footer-height))]">
            <div className="desktop:max-w-[calc(100vw-var(--sidebar-width))] w-screen p-0 h-full">
              <div className="flex h-full flex-col gap-2">
                <div className="flex h-full flex-col gap-2 p-2 desktop:max-h-[calc(100vh-var(--header-height))] tablet:max-h-[calc(100vh-var(--header-height)-var(--footer-height)-var(--footer-height))] max-h-[calc(100vh-var(--header-height)-var(--header-height)-var(--footer-height)-var(--footer-height))]">
                  <div className="bg-layer-card rounded-lg border px-4 py-2">
                    {/* Market Info */}
                  </div>
                  <div className="desktop:flex-row flex flex-col gap-2">
                    <div className="hide-scrollbar flex flex-1 flex-col gap-2">
                      <div className="desktop:flex-row flex flex-col gap-2">
                        <div className="bg-layer-card flex h-full min-h-[600px] w-full rounded-lg border p-2">
                          {/* TradingView Chart */}
                        </div>
                        <div className="desktop:w-[400px] w-full">
                          <OrderBook />
                        </div>
                      </div>
                      <div
                        dir="ltr"
                        data-orientation="horizontal"
                        className="bg-layer-card border w-full rounded-lg"
                      >
                        {/* Open Orders/Filled Orders/Balances/Discussions Tabs */}
                      </div>
                    </div>
                    <div className="desktop:max-w-[320px] flex max-w-full min-w-[320px] flex-col">
                      <div className="flex h-full flex-1 flex-col gap-2">
                        <div className="desktop:block hidden">
                          <TradePanel />
                        </div>
                        <div className="bg-layer-card rounded-lg border p-2">
                          {/* CLOB Balance */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
