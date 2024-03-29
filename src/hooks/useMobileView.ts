import { useEffect, useState, useMemo } from 'react';

import { isMobile } from '../utils';

interface Param {
  enableMobileView?: boolean;
  isWidgetOpen: boolean;
}
export default function useMobileView({
  enableMobileView = true,
  isWidgetOpen,
}: Param) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [enableMobileView]);

  // disable body scroll when MobileContainer is open
  useEffect(() => {
    const originalPosition = document.body.style.position;
    let originalTop = document.body.style.top;

    function setToOriginalPosition() {
      document.body.style.position = originalPosition;
      document.body.style.top = originalTop;

      if (originalPosition === 'fixed') {
        window.scrollTo(0, parseInt(originalTop || '0') * -1);
      }
    }
    if (isWidgetOpen && isMobile) {
      originalTop = `${window.scrollY}px`;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${originalTop}`;
      document.body.style.width = '100%';
    } else {
      setToOriginalPosition();
    }
    return () => {
      setToOriginalPosition();
    };
  }, [isWidgetOpen, isMobile]);

  return useMemo(
    () => ({
      width: dimensions.width,
      height: dimensions.height,
    }),
    []
  );
}
