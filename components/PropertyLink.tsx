"use client";

import { useUI } from "./UIProvider";
import type { VerticalKey } from "@/lib/content";


export function PropertyLink({
  vertical,
  className,
  label,
  children,
}: {
  vertical: VerticalKey;
  className?: string;
  label?: string;
  children?: React.ReactNode;
}) {
  const { openVertical } = useUI();
  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      aria-haspopup="dialog"
      onClick={() => openVertical(vertical)}
    >
      {children}
    </button>
  );
}
