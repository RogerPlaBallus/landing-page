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
            this.physicsY = Math.random() * canvas.height;
        } else {
             const edge = Math.floor(Math.random() * 4);
             if (edge === 0) { this.x = Math.random() * canvas.width; this.physicsY = -10; } // Top
             else if (edge === 1) { this.x = canvas.width + 10; this.physicsY = Math.random() * canvas.height; } // Right
             else if (edge === 2) { this.x = Math.random() * canvas.width; this.physicsY = canvas.height + 10; } // Bottom
             else { this.x = -10; this.y = Math.random() * canvas.height; } // Left
        }

        this.y = this.physicsY;

        this.baseSize = Math.random() * 2 + 0.5;
        this.baseVx = (Math.random() - 0.5) * 0.8; // Doubled base speed
        this.baseVy = (Math.random() - 0.5) * 0.8;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        
        // Wave properties
        this.waveAmplitude = Math.random() * 15 + 5; // How far up/down they move
        this.wavePhase = Math.random() * Math.PI * 2; // Random starting point in the wave cycle
        this.waveOffset = 0;

        this.alpha = 0; // Start invisible
      }

      draw() {
        if (this.alpha <= 0.05) return; 
        ctx.beginPath();
        
        // Calculate dynamic size based on current vertical wave position
        // When this.waveOffset is positive (down), size increases. When negative (up), size decreases.
        // Cap the size multiplier between 0.5x and 1.8x
        const sizeMultiplier = 1 + (this.waveOffset / this.waveAmplitude) * 0.8; 
        const renderSize = Math.max(0.1, this.baseSize * sizeMultiplier);

        ctx.arc(this.x, this.y, renderSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }

      update(time) {
        // High friction to simulate water resistance horizontally
        this.vx *= 0.90;
        this.vy *= 0.90;

        // "Medusa Waves" - Particles move up and down in a rhythmic wave (faster)
        const wobbleSpeed = time / 800;
        
        // Horizontal drift now slightly faster
        const fluidX = Math.sin(wobbleSpeed + this.baseVx * 10) * 0.4;
        this.vx += fluidX;

        // Calculate vertical wave offset
        // BaseVy acts as a distinct phase shift so they don't all move in unison
        this.waveOffset = Math.sin(wobbleSpeed * 2 + this.wavePhase) * this.waveAmplitude;
        
        // The actual Y position is the physical physics Y + the visual wave offset
        this.y = this.physicsY + this.waveOffset;

        const influenceRadius = 400; // How far the light/pull reaches

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          // Calculate true distance from the visual position to the mouse
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < influenceRadius) {
            // Fade in as they get closer to the cursor
            const targetAlpha = Math.pow((influenceRadius - distance) / influenceRadius, 1.5) * 0.9;
            this.alpha += (targetAlpha - this.alpha) * 0.1;

            const dirX = dx / distance;
            const dirY = dy / distance;
            
            // Very gentle attraction
            let pullStrength = (influenceRadius - distance) / influenceRadius * 0.25;

            // Core repulsion
            const coreRadius = 120;
            if (distance < coreRadius) {
                pullStrength -= Math.pow((coreRadius - distance) / coreRadius, 2) * 1.5;
            }

            const breathe = 1 + Math.sin(time / 800) * 0.3;
            
            this.vx += dirX * pullStrength * breathe;
            // Apply physics force to the physics baseline Y, not the visual wave Y
            this.vy += dirY * pullStrength * breathe;
          } else {
            // Fade out when outside radius
            this.alpha += (0 - this.alpha) * 0.1;
          }
        } else {
             // Fade out when cursor leaves screen
             this.alpha += (0 - this.alpha) * 0.1;
        }

        this.x += this.vx;
        this.physicsY += this.vy;

        // Screen wrapping for ambient particles (checking baseline physics Y)
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.physicsY < -40) this.physicsY = canvas.height + 40;
        if (this.physicsY > canvas.height + 40) this.physicsY = -40;
      }
    }

    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const animate = (time = performance.now()) => {
      // Ensure normal drawing mode
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(time); // Pass timestamp for breathing effect
        particlesArray[i].draw();
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