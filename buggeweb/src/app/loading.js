"use client";

import { Skeleton, SkeletonText } from "./components/ui/Skeleton";
import "./loading.scss";

export default function Loading() {
  return (
    <div className="loading-container">
      {/* Header Skeleton */}
      <div className="header-skeleton">
        <Skeleton height="60px" className="rounded" />
        <SkeletonText lines={2} width={(i) => (i === 0 ? "60%" : "40%")} />
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="content-item">
              <Skeleton height="200px" className="rounded" />
              <SkeletonText lines={3} width={(i) => ["80%", "70%", "60%"][i]} />
            </div>
          ))}
      </div>

      {/* Footer Skeleton */}
      <div className="footer-skeleton">
        <Skeleton height="40px" width="200px" />
        <div className="footer-links">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} width="120px" height="20px" />
            ))}
        </div>
      </div>
    </div>
  );
}
