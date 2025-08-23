import Link from "next/link";

export function Header() {
  return (
    <header className="bg-layer-0 desktop:fixed top-0 right-0 left-0 z-20 desktop:ml-[var(--sidebar-width)] ml-none desktop:m-0">
      <div className="bg-layer-card flex h-[var(--header-height)] items-center justify-between border-b desktop:px-6 relative px-4">
        <div className="flex items-center gap-4">
          <Link className="mobile:block desktop:hidden" href="/">
            <img
              alt="logo"
              loading="lazy"
              width="48"
              height="20"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/logos/gte-logo-white.svg"
            />
          </Link>
          <h1 className="font-sans text-[14px] leading-[16px] font-normal text-secondary drop-cap tablet:block hidden">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                {/* Token Selector */}
              </div>
              <div
                role="group"
                dir="ltr"
                className="flex gap-1 rounded-lg p-1 bg-layer-card w-fit"
                aria-label="Text alignment"
                tabIndex={0}
                style={{ outline: "none" }}
              >
                {/* CLOB/AMM/Perps Toggles */}
              </div>
            </div>
          </h1>
        </div>
        <div
          className="absolute left-1/2 hidden w-[15vw] -translate-x-[70%] items-center gap-2 desktop:flex hidden"
          role="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          data-state="closed"
        >
          {/* Search Bar */}
        </div>
        <div className="flex items-center flex-row">
          <div className="relative w-full">
            {/* Connect Button */}
          </div>
          <div className="relative w-full">
            <div className="absolute top-0 left-0 z-10 h-full -translate-x-1/2 flex-col">
              <div className="flex h-full flex-col justify-center gap-0.5">
                <div className="bg-separator size-1.5 rounded-full"></div>
                <div className="bg-separator size-1.5 rounded-full"></div>
                <div className="bg-separator size-1.5 rounded-full"></div>
              </div>
            </div>
            {/* Dropdown Menu */}
          </div>
        </div>
      </div>
    </header>
  );
}