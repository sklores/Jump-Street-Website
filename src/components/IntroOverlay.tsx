"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
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
