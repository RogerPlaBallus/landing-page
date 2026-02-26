import React, { useRef, useEffect } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const mouse = { x: null, y: null, vx: 0, vy: 0 };
    const influenceRadius = 520;
    const gravityOffsetY = 28;
    const coreRadius = 54;
    const orbitZone = 150;
    const particleSizeMultiplier = 2;

    const handleMouseMove = (e) => {
      if (mouse.x !== null && mouse.y !== null) {
        mouse.vx = e.clientX - mouse.x;
        mouse.vy = e.clientY - mouse.y;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const particlesArray = [];
    const numberOfParticles = 25;

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        if (initial || Math.random() < 0.2) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          const edge = Math.floor(Math.random() * 4);
          if (edge === 0) { this.x = Math.random() * canvas.width; this.y = -10; }
          else if (edge === 1) { this.x = canvas.width + 10; this.y = Math.random() * canvas.height; }
          else if (edge === 2) { this.x = Math.random() * canvas.width; this.y = canvas.height + 10; }
          else { this.x = -10; this.y = Math.random() * canvas.height; }
        }

        this.baseSize = (Math.random() * 2 + 0.5) * particleSizeMultiplier;
        this.vx = (Math.random() - 0.5) * 1.6;
        this.vy = (Math.random() - 0.5) * 1.6;

        // Orbit properties
        this.angle = Math.random() * Math.PI * 2;
        this.orbitSpeed = (Math.random() - 0.5) * 0.02;
        this.orbitRadius = Math.random() * 60 + 40;
        this.captured = false;
        this.breathePhase = Math.random() * Math.PI * 2;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.012 + Math.random() * 0.008;

        this.alpha = 0;
      }

      draw(time) {
        if (this.alpha <= 0.05) return;

        const pulse = (Math.sin(time * this.pulseSpeed + this.pulsePhase) + 1) * 0.5;
        let renderSize = this.baseSize * (0.95 + pulse * 0.55);

        if (mouse.x !== null && mouse.y !== null) {
          const gravityX = mouse.x;
          const gravityY = mouse.y + gravityOffsetY;
          const dx = gravityX - this.x;
          const dy = gravityY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const zonePulse = (Math.sin(time / 230 + this.breathePhase) + 1) * 0.5;

          if (distance < coreRadius) {
            renderSize = this.baseSize * (1 + zonePulse * 0.95);
          } else if (distance < orbitZone) {
            renderSize = this.baseSize * (1.35 + zonePulse * 1.45);
          } else {
            renderSize = this.baseSize * (0.95 + pulse * 0.55);
          }
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.1, renderSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        if (mouse.x !== null && mouse.y !== null) {
          const gravityX = mouse.x;
          const gravityY = mouse.y + gravityOffsetY;
          const dx = gravityX - this.x;
          const dy = gravityY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const safeDistance = Math.max(distance, 1);

          if (distance < influenceRadius) {
            const normalizedDistance = 1 - safeDistance / influenceRadius;
            const targetAlpha = Math.max(0.18, Math.pow(normalizedDistance, 1.35) * 0.95);
            this.alpha += (targetAlpha - this.alpha) * 0.22;

            const nx = dx / safeDistance;
            const ny = dy / safeDistance;
            const tangentX = -ny;
            const tangentY = nx;
            const swirlDirection =
              (Math.abs(mouse.vx) > 0.1 || Math.abs(mouse.vy) > 0.1)
                ? Math.sign(mouse.vx || mouse.vy)
                : Math.sign(this.orbitSpeed) || 1;

            const attractStrength = 0.12 + normalizedDistance * 0.48;
            const swirlStrength = normalizedDistance * 0.14;

            this.vx += nx * attractStrength;
            this.vy += ny * attractStrength;

            // Tangential force keeps particles flowing around the core instead of disappearing into it.
            this.vx += tangentX * swirlStrength * swirlDirection;
            this.vy += tangentY * swirlStrength * swirlDirection;

            const cursorStepX = Math.max(-24, Math.min(24, mouse.vx));
            const cursorStepY = Math.max(-24, Math.min(24, mouse.vy));
            const cursorDrag = normalizedDistance * 0.6;
            this.x += cursorStepX * cursorDrag;
            this.y += cursorStepY * cursorDrag;

            if (distance < coreRadius) {
              const repelStrength = ((coreRadius - safeDistance) / coreRadius) * 0.8;
              this.vx -= nx * repelStrength;
              this.vy -= ny * repelStrength;
            }

            this.vx *= distance < orbitZone ? 0.985 : 0.993;
            this.vy *= distance < orbitZone ? 0.985 : 0.993;

            this.x += this.vx;
            this.y += this.vy;
          } else {
            this.alpha += (0 - this.alpha) * 0.03;
            this.vx *= 0.992;
            this.vy *= 0.992;
            this.x += this.vx;
            this.y += this.vy;
          }
        } else {
          this.alpha += (0 - this.alpha) * 0.03;
          this.vx *= 0.992;
          this.vy *= 0.992;
          this.x += this.vx;
          this.y += this.vy;
        }

        // Screen wrapping
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -40) this.y = canvas.height + 40;
        if (this.y > canvas.height + 40) this.y = -40;
      }
    }

    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = (time = performance.now()) => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      mouse.vx *= 0.8;
      mouse.vy *= 0.8;
      if (Math.abs(mouse.vx) < 0.01) mouse.vx = 0;
      if (Math.abs(mouse.vy) < 0.01) mouse.vy = 0;

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(time);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-9999"
      style={{ zIndex: 99999 }}
    />
  );
};

export default CursorEffect;

