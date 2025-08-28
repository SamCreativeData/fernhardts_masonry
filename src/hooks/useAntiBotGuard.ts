import { useEffect, useState } from 'react';

/**
 * Anti-bot guard hook that only returns true after user interaction,
 * time delay, and document visibility checks
 */
export default function useAntiBotGuard(delayMs = 800) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let interacted = false;
    let timeElapsed = false;
    
    const checkReady = () => {
      if (document.visibilityState !== 'visible') return;
      if ((interacted || timeElapsed) && document.visibilityState === 'visible') {
        setReady(true);
      }
    };

    const markInteraction = () => {
      interacted = true;
      checkReady();
    };

    const timer = setTimeout(() => {
      timeElapsed = true;
      checkReady();
    }, delayMs);

    // Listen for user interactions
    window.addEventListener('mousemove', markInteraction, { once: true });
    window.addEventListener('keydown', markInteraction, { once: true });
    window.addEventListener('touchstart', markInteraction, { once: true });
    window.addEventListener('click', markInteraction, { once: true });

    // Check visibility changes
    document.addEventListener('visibilitychange', checkReady);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', markInteraction);
      window.removeEventListener('keydown', markInteraction);
      window.removeEventListener('touchstart', markInteraction);
      window.removeEventListener('click', markInteraction);
      document.removeEventListener('visibilitychange', checkReady);
    };
  }, [delayMs]);

  return ready;
}