import Link from "next/link";
import {
  IconDash,
  IconEarn,
  IconExplore,
  IconMenu,
  IconSwap,
  IconTrade,
} from "../icons";

export function Footer() {
  return (
    <footer className="desktop:hidden bg-layer-0 fixed right-0 bottom-0 left-0 z-10 h-[calc(var(--footer-height)+var(--footer-height))]">
      <div className="bg-layer-card flex h-[var(--footer-height)] gap-2 border-t p-2">
        <button className="disabled:pointer-events-none bg-layer-red text-red-light disabled:bg-tertiary py-2 px-3 w-full outline-none cursor-pointer w-fit rounded-lg outline-none">
          <div className="flex items-center justify-center gap-2">
            <p className="font-family-mono text-[12px] leading-[16px] font-normal text-inherit drop-cap">
              Sell
            </p>
          </div>
        </button>
        <button className="disabled:pointer-events-none bg-layer-green text-green-light disabled:bg-tertiary py-2 px-3 w-full outline-none cursor-pointer w-fit rounded-lg outline-none">
          <div className="flex items-center justify-center gap-2">
            <p className="font-family-mono text-[12px] leading-[16px] font-normal text-inherit drop-cap">
              Buy
            </p>
          </div>
        </button>
      </div>
      <div className="bg-layer-card bg-layer-1 flex items-center justify-between border-t px-4 py-2">
        <Link href="/">
          <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
            <IconExplore />
          </button>
        </Link>
        <Link href="/trade/spot/0x776401b9bc8aae31a685731b7147d4445fd9fb19/0x5ca9f32d4ce7cc0f782213c446c2ae14b754a623">
          <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-orange bg-layer-orange p-2">
            <IconTrade />
          </button>
        </Link>
        <Link href="/dash">
          <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
            <IconDash />
          </button>
        </Link>
        <Link href="/swap">
          <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
            <IconSwap />
          </button>
        </Link>
        <Link href="/earn">
          <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2">
            <IconEarn />
          </button>
        </Link>
        <button className="rounded-lg flex items-center justify-center transition-colors group cursor-pointer w-fit h-fit disabled:opacity-50 text-secondary hover:text-primary hover:bg-layer-button p-2 outline-none">
          <IconMenu />
        </button>
      </div>
    </footer>
  );
}