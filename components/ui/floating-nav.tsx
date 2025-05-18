"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data";
import { cn } from "@/lib/utils";

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
};

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // Responsive: nav bar always fully visible, shrinks with screen, text scales
          "fixed left-4 right-4 top-10 z-[5000] w-auto flex flex-wrap items-center justify-center px-2 py-2 md:py-4 gap-2 md:gap-6 rounded-3xl border border-white/[0.2] bg-black-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex-shrink-0 min-w-[110px] max-w-full items-center justify-center text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300 px-2 md:px-4 py-1 md:py-2 rounded-lg transition text-[3.5vw] sm:text-xs md:text-sm lg:text-base whitespace-nowrap font-semibold text-center align-middle",
            )}
          >
            <span className="!cursor-pointer block w-full text-center leading-tight">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};