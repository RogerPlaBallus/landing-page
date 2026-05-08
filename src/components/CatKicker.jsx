import React from 'react';
import PixelCat from './PixelCat';

const CatKicker = ({
  sprite,
  catLabel,
  children,
  cycleOffset = 0,
  className = '',
  lineClassName = '',
}) => (
  <div className={className}>
    <div className="inline-flex flex-col items-center gap-1">
      <PixelCat
        sprite={sprite}
        label={catLabel}
        cycleOffset={cycleOffset}
      />
      <span className="text-xs font-bold text-[#00a85a] uppercase tracking-widest">
        {children}
      </span>
    </div>

    {lineClassName && <div className={lineClassName} aria-hidden="true" />}
  </div>
);

export default CatKicker;
