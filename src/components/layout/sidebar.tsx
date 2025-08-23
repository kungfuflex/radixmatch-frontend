import Link from "next/link";
import {
  IconDash,
  IconEarn,
  IconExplore,
  IconPortfolio,
  IconSwap,
  IconTrade,
  IconWallet,
} from "../icons";

export function Sidebar() {
  return (
    <aside className="bg-layer-0 fixed top-0 left-0 z-30 hidden h-screen border-r w-none desktop:flex desktop:w-[var(--sidebar-width)]">
      <div className="bg-layer-card flex h-full flex-col justify-between p-3 py-4">
        <Link
          className="relative flex h-5 w-14 items-center justify-center"
          href="/"
        >
          <img
            alt="logo"
            decoding="async"
            data-nimg="fill"
            className="h-auto w-auto"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src="/logos/gte-logo-white.svg"
          />
          <h1 className="font-family-mono text-[12px] leading-[16px] font-normal text-secondary drop-cap mt-12">
            TESTNET
          </h1>
        </Link>
        <div className="flex flex-col items-center gap-2">
          <Link href="/" aria-label="explore">
            <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
              <IconExplore />
            </button>
          </Link>
          <Link href="/trade/spot/0x776401b9bc8aae31a685731b7147d4445fd9fb19/0x5ca9f32d4ce7cc0f782213c446c2ae14b754a623" aria-label="trade">
            <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-orange bg-layer-orange p-2">
              <IconTrade />
            </button>
          </Link>
          <Link href="/dash" aria-label="dash">
            <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
              <IconDash />
            </button>
          </Link>
          <Link href="/swap" aria-label="swap">
            <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
              <IconSwap />
            </button>
          </Link>
          <Link href="/earn" aria-label="earn">
            <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
              <IconEarn />
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link href="/portfolio" aria-label="portfolio">
            <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
              <IconPortfolio />
            </button>
          </Link>
          <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-primary bg-layer-button p-2">
            <IconWallet />
          </button>
        </div>
      </div>
    </aside>
  );
}