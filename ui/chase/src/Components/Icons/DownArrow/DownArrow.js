import React from "react";

export const DownArrow = ({h="1em", w="1em", color='black', className}) => {
  return (
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={h}
      width={w}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
    </svg>
  );
};

