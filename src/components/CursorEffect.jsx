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

    const mouse = { x: canvas.width * 0.5, y: canvas.height * 0.5 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const particlesArray = [];
    const numberOfParticles = 140;
    const coreRadius = 30;
    const orbitZone = 260;
    const minOrbitSlotSeparation = 18;
    const sharedWaveSpeed = 3.6;
    const sharedWaveAmplitude = 13;
    const sharedWaveAngularFrequency = 2.2;
    const sharedWaveRadialFrequency = 0.03;
    const sharedWaveTangentialRatio = 0.9;
    const particlePalette = [
      [34, 211, 238],  // cyan-400
      [103, 232, 249], // cyan-300
      [6, 182, 212],   // cyan-500
      [59, 130, 246],  // blue-500
      [37, 99, 235],   // blue-600
    ];

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

        this.baseSize = Math.random() * 1.2 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;

        // Orbit slot properties
        this.orbitAngle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * 60 + 40;
        this.captured = true;
        this.breathePhase = Math.random() * Math.PI * 2;
        this.renderAngle = Math.random() * Math.PI * 2;
        this.color = particlePalette[Math.floor(Math.random() * particlePalette.length)];
        this.followEase = 0.02 + Math.random() * 0.035;

        this.alpha = 0;
      }

      pickOrbitSlot() {
        const minOrbitRadius = coreRadius + 10;
        const maxOrbitRadius = orbitZone - 10;

        for (let tries = 0; tries < 20; tries++) {
          const candidateAngle = Math.random() * Math.PI * 2;
          const minR2 = minOrbitRadius * minOrbitRadius;
          const maxR2 = maxOrbitRadius * maxOrbitRadius;
          const candidateRadius = Math.sqrt(minR2 + Math.random() * (maxR2 - minR2));
          const candidateX = Math.cos(candidateAngle) * candidateRadius;
          const candidateY = Math.sin(candidateAngle) * candidateRadius;

          let tooClose = false;
          for (let i = 0; i < particlesArray.length; i++) {
            const other = particlesArray[i];
            if (other === this) continue;
            const otherX = Math.cos(other.orbitAngle) * other.orbitRadius;
            const otherY = Math.sin(other.orbitAngle) * other.orbitRadius;

            if (Math.hypot(candidateX - otherX, candidateY - otherY) < minOrbitSlotSeparation) {
              tooClose = true;
              break;
            }
          }

          if (!tooClose) {
            this.orbitAngle = candidateAngle;
            this.orbitRadius = candidateRadius;
            return;
          }
        }

        this.orbitAngle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.sqrt(
          minOrbitRadius * minOrbitRadius
          + Math.random() * (maxOrbitRadius * maxOrbitRadius - minOrbitRadius * minOrbitRadius)
        );
      }

      snapToOrbit(anchorX, anchorY) {
        this.x = anchorX + Math.cos(this.orbitAngle) * this.orbitRadius;
        this.y = anchorY + Math.sin(this.orbitAngle) * this.orbitRadius;
        this.vx = 0;
        this.vy = 0;
      }

      draw(time) {
        let thickness = this.baseSize * 1.5;
        let length = this.baseSize * 6.4;
        let alphaScale = 1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < orbitZone) {
          const distanceRatio = Math.max(0, Math.min(1, distance / orbitZone));
          const breathe = 1 + Math.sin(time / 600 + this.breathePhase) * 0.45;
          const sizeScale = 0.08 + distanceRatio * 0.92;
          thickness = this.baseSize * 1.8 * sizeScale * breathe;
          length = this.baseSize * 7.2 * sizeScale * breathe;
          alphaScale = 0.2 + distanceRatio * 0.8;
        } else {
          thickness = this.baseSize * 1.5;
          length = this.baseSize * 6.4;
        }

        this.renderAngle = Math.atan2(dy, dx);

        const halfLength = Math.max(0.2, length * 0.5);
        const startX = this.x - Math.cos(this.renderAngle) * halfLength;
        const startY = this.y - Math.sin(this.renderAngle) * halfLength;
        const endX = this.x + Math.cos(this.renderAngle) * halfLength;
        const endY = this.y + Math.sin(this.renderAngle) * halfLength;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        const drawAlpha = this.alpha * alphaScale;
        if (drawAlpha <= 0.03) return;
        ctx.lineWidth = Math.max(0.18, thickness);
        ctx.lineCap = 'round';
        ctx.strokeStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${drawAlpha})`;
        ctx.stroke();
      }

      update(time) {
        this.alpha = 1;
        const radialX = Math.cos(this.orbitAngle);
        const radialY = Math.sin(this.orbitAngle);
        const tangentX = -radialY;
        const tangentY = radialX;

        const baseTargetX = mouse.x + radialX * this.orbitRadius;
        const baseTargetY = mouse.y + radialY * this.orbitRadius;

        // Single shared wave field: all particles follow the same wave phase model.
        const waveT = time * 0.001;
        const sharedPhase =
          waveT * sharedWaveSpeed
          + this.orbitAngle * sharedWaveAngularFrequency
          + this.orbitRadius * sharedWaveRadialFrequency;
        const radialOffset = Math.sin(sharedPhase) * sharedWaveAmplitude;
        const tangentialOffset = Math.cos(sharedPhase) * sharedWaveAmplitude * sharedWaveTangentialRatio;

        const targetX = baseTargetX + radialX * radialOffset + tangentX * tangentialOffset;
        const targetY = baseTargetY + radialY * radialOffset + tangentY * tangentialOffset;
        this.x += (targetX - this.x) * this.followEase;
        this.y += (targetY - this.y) * this.followEase;
        this.vx = 0;
        this.vy = 0;
      }
    }

    const init = () => {
      particlesArray.length = 0;
      const anchorX = mouse.x;
      const anchorY = mouse.y;

      for (let i = 0; i < numberOfParticles; i++) {
        const particle = new Particle();
        particle.captured = true;
        particle.pickOrbitSlot();
        particle.snapToOrbit(anchorX, anchorY);
        particle.alpha = 1;
        particlesArray.push(particle);
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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default CursorEffect;
