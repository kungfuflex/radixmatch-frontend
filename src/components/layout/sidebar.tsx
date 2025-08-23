import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="bg-layer-0 fixed top-0 left-0 z-30 hidden h-screen border-r w-none desktop:flex desktop:w-[var(--sidebar-width)]">
      <div className="bg-layer-card flex h-full flex-col justify-between p-3 py-4">
        <Link className="relative flex h-5 w-14 items-center justify-center" href="/">
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
          {/* Navigation Icons */}
        </div>
        <div className="flex flex-col items-center gap-2">
          {/* Bottom Icons */}
        </div>
      </div>
    </aside>
  );
}