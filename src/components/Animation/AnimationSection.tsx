'use client';

import { UseAnimation } from '@/hooks/UseAnimation';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: ReactNode;
  className?: string;
  initial?: any;
  transition?: any;
  id: string;
}

const AnimatedSection: React.FC<Props> = ({
  children,
  className,
  initial = { opacity: 0, y: 50 },
  transition = { duration: 0.5 },
  id,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { animate } = UseAnimation({ initial, inView });

  return (
    <motion.section
      id={id}
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
