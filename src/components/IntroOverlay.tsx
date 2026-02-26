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
      }, 2500);

      return () => clearTimeout(t);
    }

    const seen = sessionStorage.getItem("introSeen");
    if (seen) return;

    setShow(true);
    document.body.style.overflow = "hidden";

    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("introSeen", "true");
      document.body.style.overflow = "";
    }, 3200);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f3efe7]">
      <img
        src="/Jump%20Street%20Logo.png"
        alt="Jump Street"
        className="w-[360px] md:w-[560px] h-auto object-contain"
      />
    </div>
  );
}
