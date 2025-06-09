"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./artikler.module.scss";
import Article from "./Article";

export default function ArticleContainer() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const totalArticles = 5; // Antall artikler
  const thumbWidth = 100 / totalArticles; // Bredden på thumb basert på antall artikler

  const updateScrollPosition = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;

    // Del opp scrollbaren i seksjoner basert på antall artikler
    const sectionSize = maxScroll / (totalArticles - 1);
    const currentIndex = Math.round(currentScroll / sectionSize);

    setCurrentIndex(currentIndex);
    setIsLeftDisabled(currentScroll <= 0);
    setIsRightDisabled(currentScroll >= maxScroll - 1);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollPosition);
      updateScrollPosition();

      const resizeObserver = new ResizeObserver(() => {
        requestAnimationFrame(updateScrollPosition);
      });
      resizeObserver.observe(container);

      return () => {
        container.removeEventListener("scroll", updateScrollPosition);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const scroll = (direction) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const sectionSize = maxScroll / (totalArticles - 1);
    const newIndex =
      direction === "right" ? currentIndex + 1 : currentIndex - 1;

    container.scrollTo({
      left: newIndex * sectionSize,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={styles.articleContainer} ref={containerRef}>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>

      <div className={styles.navigationWrapper}>
        <div className={styles.scrollTracker}>
          <div
            className={styles.scrollThumb}
            style={{
              transform: `translateX(${currentIndex * (100 / (totalArticles - 1))}%)`,
              width: `${thumbWidth}%`,
            }}
          ></div>
        </div>
        <div className={styles.arrowsContainer}>
          <button
            className={`${styles.arrowButton} ${styles.prev} ${isLeftDisabled ? styles.disabled : ""}`}
            onClick={() => scroll("left")}
            disabled={isLeftDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                d="M0.999817 6L16.9998 6"
                stroke="currentcolor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.9996 11C5.9996 11 0.999645 7.31756 0.999634 5.99996C0.999622 4.68237 5.99963 1 5.99963 1"
                stroke="currentcolor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.arrowButton} ${styles.next} ${isRightDisabled ? styles.disabled : ""}`}
            onClick={() => scroll("right")}
            disabled={isRightDisabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
            >
              <path
                d="M17.0001 6L1.00012 6"
                stroke="currentcolor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0003 11C12.0003 11 17.0002 7.31756 17.0002 5.99996C17.0003 4.68237 12.0002 1 12.0002 1"
                stroke="currentcolor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
