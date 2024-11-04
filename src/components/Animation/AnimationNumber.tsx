import React, { useEffect, useMemo, useRef } from 'react';
import { animate } from 'framer-motion';

interface Props {
  from: number;
  to: number;
  className?: string;
  duration?: number;
  endText?: string;
}

export const AnimatedNumber: React.FC<Props> = ({
  to,
  from,
  className,
  endText,
  duration,
}) => {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  const isInt = useMemo(() => {
    return !Number.isInteger(to);
  }, []);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) return;

    const controls = animate(from, to, {
      duration: duration || 3,
      onUpdate(value) {
        if (!isInt) {
          node.textContent = value.toFixed(0) + endText;
        } else {
          node.textContent = value.toFixed(2) + endText;
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <p className={className} ref={nodeRef} />;
};

export default AnimatedNumber;
