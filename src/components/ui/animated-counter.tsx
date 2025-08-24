import { memo } from "react";
import { formatNumber } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number | string;
  precision?: number;
  className?: string;
}

const AnimatedCounter = ({
  value,
  precision = 2,
  className,
}: AnimatedCounterProps) => {
  const formattedValue =
    typeof value === "string" ? value : formatNumber(value, precision);
  const [integerPart, fractionalPart] = formattedValue.split(".");

  const renderPart = (part: string, isFractional = false) => {
    const digits = part.split("");
    return (
      <>
        {isFractional && "."}
        {digits.map((digit, index) => (
          <span key={index} className="relative tabular-nums">
            <span className="invisible">{digit}</span>
            <span className="absolute left-0">{digit}</span>
          </span>
        ))}
      </>
    );
  };

  return (
    <div className={className}>
      {renderPart(integerPart)}
      {fractionalPart && renderPart(fractionalPart, true)}
    </div>
  );
};

export default memo(AnimatedCounter);