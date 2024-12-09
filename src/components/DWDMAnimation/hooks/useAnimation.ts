import { useState, useCallback } from 'react';

export const useAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev);
  }, []);

  return { isAnimating, toggleAnimation };
};