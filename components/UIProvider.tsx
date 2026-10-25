"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { VerticalKey } from "@/lib/content";

type UI = {
  openVertical: (key: VerticalKey) => void;
  closeVertical: () => void;
  vertical: VerticalKey | null;
  toast: (message: string) => void;
  copy: (text: string, message: string) => void;
};

const UIContext = createContext<UI | null>(null);

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used inside <UIProvider>");
  return ctx;
}

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [vertical, setVertical] = useState<VerticalKey | null>(null);
  const [message, setMessage] = useState("");
  const [shown, setShown] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const toast = useCallback((m: string) => {
    setMessage(m);
    setShown(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setShown(false), 2200);
  }, []);

  const copy = useCallback(
    (text: string, m: string) => {
      const fallback = () => {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          toast(m);
        } catch {
          toast("Select the text to copy it");
        }
        ta.remove();
      };
      try {
        navigator.clipboard.writeText(text).then(() => toast(m), fallback);
      } catch {
        fallback();
      }
    },
    [toast],
  );

  const openVertical = useCallback((key: VerticalKey) => {
    lastFocus.current = document.activeElement as HTMLElement | null;
    setVertical(key);
  }, []);

  const closeVertical = useCallback(() => {
    setVertical(null);
    lastFocus.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", vertical !== null);
    document.documentElement.style.overflow = vertical ? "hidden" : "";
  }, [vertical]);

  return (
    <UIContext.Provider value={{ openVertical, closeVertical, vertical, toast, copy }}>
      {children}
      <div className={`toast${shown ? " on" : ""}`} role="status" aria-live="polite">
        {message}
      </div>
    </UIContext.Provider>
  );
}
