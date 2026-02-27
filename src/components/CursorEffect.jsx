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

    const mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const particlesArray = [];
    const numberOfParticles = 150;

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

        this.baseSize = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;

        // Orbit properties
        this.angle = Math.random() * Math.PI * 2;
        this.orbitSpeed = (Math.random() - 0.5) * 0.02;
        this.orbitRadius = Math.random() * 60 + 40;
        this.captured = false;
        this.breathePhase = Math.random() * Math.PI * 2;

        this.alpha = 0;
      }

      draw(time) {
        if (this.alpha <= 0.05) return;

        let renderSize = this.baseSize;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const coreRadius = 30;
          const orbitZone = 120;

          if (distance < coreRadius) {
            const coreRatio = distance / coreRadius;
            renderSize = this.baseSize * (0.85 + coreRatio * 0.25);
          } else if (distance < orbitZone) {
            const breathe = 1 + Math.sin(time / 600 + this.breathePhase) * 0.5;
            renderSize = this.baseSize * 1.8 * breathe;
          } else {
            renderSize = this.baseSize;
          }
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(0.1, renderSize), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update(time) {
        const influenceRadius = 400;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < influenceRadius) {
            const targetAlpha = Math.pow((influenceRadius - distance) / influenceRadius, 1.5) * 0.9;
            this.alpha += (targetAlpha - this.alpha) * 0.1;

            if (this.captured) {
              // --- ORBIT MODE ---
              this.angle += this.orbitSpeed;
              const targetX = mouse.x + Math.cos(this.angle) * this.orbitRadius;
              const targetY = mouse.y + Math.sin(this.angle) * this.orbitRadius;

              this.x += (targetX - this.x) * 0.12;
              this.y += (targetY - this.y) * 0.12;

              this.vx *= 0.9;
              this.vy *= 0.9;

              if (distance > this.orbitRadius + 80) {
                this.captured = false;
              }
            } else {
              // --- ATTRACTION MODE ---
              const attractStrength = 0.08;
              if (distance > 0.0001) {
                this.vx += (dx / distance) * attractStrength;
                this.vy += (dy / distance) * attractStrength;
              }

              if (distance < this.orbitRadius + 20) {
                this.captured = true;
                this.angle = Math.atan2(this.y - mouse.y, this.x - mouse.x);
              }

              this.vx *= 0.97;
              this.vy *= 0.97;

              this.x += this.vx;
              this.y += this.vy;
            }
          } else {
            this.captured = false;
            this.alpha += (0 - this.alpha) * 0.05;
            this.x += this.vx;
            this.y += this.vy;
          }
        } else {
          this.captured = false;
          this.alpha += (0 - this.alpha) * 0.05;
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

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(time);
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
    />
  );
};

export default CursorEffect;
