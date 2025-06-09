"use client";

import { usePathname } from "next/navigation";
import { useEffect, useCallback } from "react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const handleRouteChange = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    handleRouteChange();

    return () => {
      document.body.style.overflow = "";
    };
  }, [pathname, handleRouteChange]);

  return <>{children}</>;
}
