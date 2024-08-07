"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { testimonials } from "@/data";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: typeof testimonials;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "15s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      containerRef.current!.style.setProperty("animation-play-state", "running");
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      containerRef.current!.style.setProperty("animation-play-state", "running");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    containerRef.current!.style.setProperty("animation-play-state", "paused");
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 3; // The scroll speed
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (containerRef.current && scrollerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const clickPosition = e.pageX - containerRef.current.offsetLeft;
      const cardWidth = scrollerRef.current.children[0].clientWidth + 16; // card width + gap
      const currentIndex = Math.round(containerRef.current.scrollLeft / cardWidth);

      let targetIndex;

      if (clickPosition < containerWidth / 2) {
        targetIndex = currentIndex - 1;
        if (targetIndex < 0) {
          targetIndex = items.length - 1;
          containerRef.current.scrollLeft += items.length * cardWidth;
        }
      } else {
        targetIndex = currentIndex + 1;
        if (targetIndex >= items.length) {
          targetIndex = 0;
          containerRef.current.scrollLeft -= items.length * cardWidth;
        }
      }

      const targetScrollLeft = targetIndex * cardWidth + (cardWidth - containerWidth) / 2;
      containerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
          >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-16 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-800 p-5 md:w-[60vw] md:p-16"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className=" relative z-20 text-sm font-normal leading-[1.6] text-white md:text-lg">
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <Image
                    height={50}
                    width={50}
                    src="/profile.jpeg"
                    alt="profile"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>

                  <span className=" text-sm font-normal leading-[1.6] text-white-200">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
