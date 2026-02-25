import { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    // Initial mouse off-screen or center
    const mouse = { x: w / 2, y: h / 2 };
    
    // ─── Premium Configuration ──────────────────────────────────────────
    const config = {
      points: 50,             // Length of the tail (number of segments)
      spring: 0.45,           // How snappy it follows (0 - 1)
      friction: 0.45,         // How much speed is retained (0 - 1)
      baseRadius: 10,         // Head radius (thickness of the start of the tail)
    };

    // Initialize points array
    const points = Array.from({ length: config.points }, () => ({
      x: mouse.x,
      y: mouse.y,
      vx: 0,
      vy: 0,
    }));

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const update = () => {
      ctx.clearRect(0, 0, w, h);

      let targetX = mouse.x;
      let targetY = mouse.y;

      // 1. Calculate physics for each point
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        const dx = targetX - p.x;
        const dy = targetY - p.y;

        p.vx += dx * config.spring;
        p.vy += dy * config.spring;

        p.vx *= config.friction;
        p.vy *= config.friction;

        p.x += p.vx;
        p.y += p.vy;

        // Current point becomes the target for the next point in the chain
        targetX = p.x;
        targetY = p.y;
      }

      // 2. Draw the beautiful continuous glowing tail
      // "screen" blend mode gives overlapping colors a bright, premium glow
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        
        // t goes from 0 (head) to 1 (tail end)
        const t = i / (points.length - 1); 
        
        // Tapering radius: big at head, small at tail
        const radius = config.baseRadius * (1 - t);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(radius, 0.1), 0, Math.PI * 2);
        
        // Google-inspired color spectrum (Blues -> Purples -> Pinks -> Oranges)
        // 210 hue is Blue, going up to ~350 which is Pink/Red
        const hue = 210 + t * 140; 
        const alpha = 1 - t; // Fade out towards the tail end
        
        ctx.fillStyle = `hsla(${hue}, 90%, 65%, ${alpha})`;
        ctx.fill();
      }

      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999, // ensures it sits on top of everything
      }}
    />
  );
};

export default CursorEffect;
