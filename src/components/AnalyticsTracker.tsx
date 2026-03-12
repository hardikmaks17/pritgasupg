import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", "G-J6483DW0D6", {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}