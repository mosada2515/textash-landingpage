"use client";

import { useEffect, useState, useRef } from "react";

const SERIF = { fontFamily: "var(--font-baskerville, Georgia, serif)" } as const;
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fading, setFading] = useState(false);
  const prevScrolled = useRef(scrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (prevScrolled.current !== scrolled) {
      prevScrolled.current = scrolled;
      setFading(true);
      const timeout = setTimeout(() => setFading(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [scrolled]);

  const contentOpacity = fading ? 0.5 : 1;

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 z-50 flex items-center"
      style={{
        top: isMobile ? "16px" : scrolled ? "20px" : "61px",
        width: isMobile
          ? "calc(100% - 2rem)"
          : scrolled
            ? "420px"
            : "min(92vw, 620px)",
        height: isMobile ? "64px" : scrolled ? "58px" : "72px",
        padding: isMobile ? "0 16px" : scrolled ? "0 18px" : "0 24px",
        backgroundColor: "var(--background)",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(128,93,33,0.10)",
        border: "1px solid var(--border)",
        transition: `width 1s ${EASE}, height 1s ${EASE}, top 1s ${EASE}, padding 1s ${EASE}`,
      }}
    >
      <div
        style={{
          opacity: contentOpacity,
          transition: `opacity 0.6s ${EASE}`,
        }}
        className="flex w-full items-center justify-between gap-3"
      >
        <span
          style={{
            ...SERIF,
            fontSize: !isMobile && scrolled ? "17px" : isMobile ? "18px" : "22px",
            transition: `font-size 1s ${EASE}`,
            letterSpacing: "-0.02em",
            fontWeight: 600,
            color: "var(--foreground)",
            whiteSpace: "nowrap",
          }}
        >
          Text <span style={{ color: "var(--primary)" }}>Ash</span>
        </span>

        <a
          href="#cta"
          className="inline-flex items-center justify-center rounded-full font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--primary-foreground)",
            minWidth: isMobile ? "112px" : scrolled ? "126px" : "140px",
            height: isMobile ? "40px" : scrolled ? "42px" : "46px",
            padding: isMobile ? "0 16px" : "0 20px",
            fontSize: isMobile ? "14px" : "15px",
            whiteSpace: "nowrap",
          }}
        >
          Get invited
        </a>
      </div>
    </nav>
  );
}
