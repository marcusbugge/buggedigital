import dynamic from "next/dynamic";

// Dynamisk import av tunge komponenter
export const DynamicDetails = dynamic(
  () => import("../sections/details/Details"),
  {
    loading: () => <div className="loading-placeholder">Laster...</div>,
    ssr: true,
  }
);

export const DynamicCarousel = dynamic(
  () => import("../sections/portofolio/Carousel"),
  {
    loading: () => <div className="loading-placeholder">Laster...</div>,
    ssr: false,
  }
);

export const DynamicLandingPageLayout = dynamic(
  () => import("../components/layout/LandingPageLayout"),
  {
    loading: () => <div className="loading-placeholder">Laster...</div>,
    ssr: true,
  }
);
