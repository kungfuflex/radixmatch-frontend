import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (
  value: number,
  precision: number = 2,
): string => {
  const suffixes = ["", "K", "M", "B", "T"];
  const tier = (Math.log10(Math.abs(value)) / 3) | 0;

  if (tier === 0) {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(value);
  }

  const suffix = suffixes[tier];
  const scale = 10 ** (tier * 3);
  const scaled = value / scale;

  return (
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(scaled) + suffix
  );
};
