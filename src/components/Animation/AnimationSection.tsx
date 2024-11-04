'use client';

import { UseAnimation } from '@/hooks/UseAnimation';
import { useInView, motion } from 'framer-motion';
import React, { ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  initial?: any;
  transition?: any;
}

const AnimatedSection: React.FC<Props> = ({
  children,
  className,
  initial = { opacity: 0, y: 50 },
  transition = { duration: 0.5 },
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  const { animate } = UseAnimation({ initial, inView, transition });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      layout
    >
      {children}
    </motion.section>
  );
};

export default React.memo(AnimatedSection);
