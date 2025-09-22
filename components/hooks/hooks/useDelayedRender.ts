// hooks/useDelayedRender.ts
import { useEffect, useState } from 'react';

interface DelayedRenderOptions {
  enterDelay?: number;
  exitDelay?: number;
}

interface DelayedRenderReturn {
  mounted: boolean;
  rendered: boolean;
}

export default function useDelayedRender(
  show: boolean,
  options: DelayedRenderOptions = {}
): DelayedRenderReturn {
  const { enterDelay = 0, exitDelay = 0 } = options;
  const [mounted, setMounted] = useState(show);
  const [rendered, setRendered] = useState(show);

  useEffect(() => {
    let enterTimer: NodeJS.Timeout;
    let exitTimer: NodeJS.Timeout;

    if (show) {
      // Show sequence: mount immediately, then render after delay
      setMounted(true);
      
      if (enterDelay > 0) {
        enterTimer = setTimeout(() => {
          setRendered(true);
        }, enterDelay);
      } else {
        setRendered(true);
      }
    } else {
      // Hide sequence: stop rendering after delay, then unmount
      if (exitDelay > 0) {
        setRendered(false);
        exitTimer = setTimeout(() => {
          setMounted(false);
        }, exitDelay);
      } else {
        setRendered(false);
        setMounted(false);
      }
    }

    return () => {
      if (enterTimer) clearTimeout(enterTimer);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [show, enterDelay, exitDelay]);

  return { mounted, rendered };
}