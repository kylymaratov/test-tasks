import { useMemo } from 'react';

interface UseAnimationProps {
  initial: any;
  inView: boolean;
}

export const UseAnimation = ({ initial, inView }: UseAnimationProps) => {
  const animationProps = useMemo(() => {
    return inView ? { opacity: 1, y: 0 } : initial;
  }, [inView, initial]);

  return {
    animate: animationProps,
  };
};
