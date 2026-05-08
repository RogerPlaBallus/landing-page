import React, { useEffect, useState } from 'react';

const FRAME_SIZE = 64;
const FRAME_DURATION = 120;
const MIN_MOVEMENT_DURATION = 720;

const FRAME_COUNTS_BY_ROW = [
  4, 4, 6, 6, 6, 6, 14, 3, 4, 4, 5, 5, 8, 8, 3, 3, 3, 8, 8, 5, 5, 5,
  5, 5, 5, 5, 5, 3, 3, 11, 11, 5, 11, 11, 11, 11, 11, 11, 5, 11, 11,
  11, 11, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 8, 10, 10, 2, 2,
  3, 5, 5, 4,
];

const MOVEMENTS = FRAME_COUNTS_BY_ROW.map((frames, row) => ({
  row,
  frames,
  duration: Math.max(frames * FRAME_DURATION, MIN_MOVEMENT_DURATION),
}));

const getCycleIndex = (offset) => (
  ((offset % MOVEMENTS.length) + MOVEMENTS.length) % MOVEMENTS.length
);

const getPrefersReducedMotion = () => (
  typeof window !== 'undefined'
  && 'matchMedia' in window
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getPrefersReducedMotion
  );

  useEffect(() => {
    if (!('matchMedia' in window)) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

const PixelCat = ({
  sprite,
  label,
  cycleOffset = 0,
  className = '',
}) => {
  const [movementIndex, setMovementIndex] = useState(
    () => getCycleIndex(cycleOffset)
  );
  const prefersReducedMotion = usePrefersReducedMotion();

  const movement = MOVEMENTS[movementIndex];

  useEffect(() => {
    setMovementIndex(getCycleIndex(cycleOffset));
  }, [cycleOffset]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setMovementIndex((current) => (current + 1) % MOVEMENTS.length);
    }, movement.duration);

    return () => window.clearTimeout(timer);
  }, [movement.duration, movementIndex, prefersReducedMotion]);

  const style = {
    '--cat-sprite': `url("${sprite}")`,
    '--cat-y': `${movement.row * -FRAME_SIZE}px`,
    '--cat-x-end': `${movement.frames * -FRAME_SIZE}px`,
    '--cat-duration': `${movement.duration}ms`,
    '--cat-steps': `steps(${movement.frames})`,
  };

  return (
    <span
      aria-label={label}
      className={`pixel-cat ${className}`}
      role="img"
      style={style}
    >
      <span
        key={`${movement.row}-${movement.frames}`}
        className="pixel-cat__sprite"
        aria-hidden="true"
      />
    </span>
  );
};

export default PixelCat;
