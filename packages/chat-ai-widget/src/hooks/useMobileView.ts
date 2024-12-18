import { useEffect, useState, useMemo } from 'react';

import { useConstantState } from '../context/ConstantContext';
import { useWidgetState } from '../context/WidgetStateContext';

export default function useMobileView() {
  const { isMobileView } = useConstantState();
  const { isOpen: isWidgetOpen } = useWidgetState();
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
  }, []);

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
    if (isWidgetOpen && isMobileView) {
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
  }, [isWidgetOpen, isMobileView]);

  return useMemo(
    () => ({
      width: dimensions.width,
      height: dimensions.height,
    }),
    [],
  );
}
