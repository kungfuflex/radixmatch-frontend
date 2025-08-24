import { SVGProps } from "react";

export function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.26981 2.51468C4.46996 2.25468 4.86207 2.25468 5.06222 2.51468L7.51043 5.695C7.76353 6.02379 7.52915 6.5 7.11423 6.5H2.2178C1.80288 6.5 1.5685 6.02379 1.8216 5.695L4.26981 2.51468Z"
        fill="var(--color-red)"
      ></path>
    </svg>
  );
}