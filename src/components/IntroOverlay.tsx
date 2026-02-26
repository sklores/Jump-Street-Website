'use client';

import { useEffect, useState } from 'react';

const INTRO_KEY = 'jump-street-intro-seen';

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState<'hidden' | 'visible' | 'fading'>('hidden');

  useEffect(() => {
    const seen = sessionStorage.getItem(INTRO_KEY);

    if (seen) {
      return;
    }

    setVisible(true);

    const fadeIn = window.setTimeout(() => setPhase('visible'), 40);
    const hold = window.setTimeout(() => setPhase('fading'), 1050);
    const finish = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem(INTRO_KEY, 'true');
    }, 1550);

    return () => {
      window.clearTimeout(fadeIn);
      window.clearTimeout(hold);
      window.clearTimeout(finish);
    };
  }, []);

  if (!visible) {
    return null;
  }

  const opacityClass = phase === 'visible' ? 'opacity-100' : phase === 'fading' ? 'opacity-0' : 'opacity-0';

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-50 flex items-center justify-center bg-cream transition-opacity duration-500 ${opacityClass}`}
    >
      <div className="text-center">
        {/* TODO: Replace with actual logo file path once available, e.g. /jump-street-logo.svg */}
        <span className="font-display text-4xl font-bold tracking-[0.4em] text-charcoal">JUMP STREET</span>
      </div>
    </div>
  );
}
