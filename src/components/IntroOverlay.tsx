"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const introOverride = new URLSearchParams(window.location.search).get("intro");

    if (introOverride === "0") {
      setShow(false);
      return;
    }

    if (introOverride === "1") {
      setShow(true);

      const t = setTimeout(() => {
        setShow(false);
      }, 1400);

      return () => clearTimeout(t);
    }

    const seen = sessionStorage.getItem("introSeen");
    if (seen) return;

    setShow(true);

    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("introSeen", "true");
    }, 1400);

    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3efe7]">
      <img
        src="/jump-street-logo.png"
        alt="Jump Street"
        className="w-[220px] md:w-[280px] h-auto object-contain"
      />
    </div>
  );
}
