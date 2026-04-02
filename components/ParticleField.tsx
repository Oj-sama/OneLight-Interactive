"use client";

import { useEffect, useRef } from "react";
import { Application, Container, Graphics } from "pixi.js";

type Particle = {
  graphic: Graphics;
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  driftOffset: number;
  driftSpeed: number;
  orbitAngle: number;
  orbitRadius: number;
  orbitSpeed: number;
  followSpeed: number;
  isCaptured: boolean;
  trailIndex: number;
};

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    active: false,
    pressed: false,
    pullRadius: 0,
    offsetX: 0,
    offsetY: -3,
  });

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    let destroyed = false;
    let cleanup: void | (() => void);
    let particles: Particle[] = [];
    let time = 0;
    let burstEnergy = 0;

    const app = new Application();

    const init = async () => {
      await app.init({
        resizeTo: window,
        backgroundAlpha: 0,
        antialias: false,
        resolution: 1,
      });

      if (destroyed) return;

      host.appendChild(app.canvas);

      const particleLayer = new Container();
      app.stage.addChild(particleLayer);

      const particleCount = 15000;

      let swirlX = window.innerWidth / 2;
      let swirlY = window.innerHeight / 2;
      let swirlVX = 0;
      let swirlVY = 0;
      let swirlHistory: { x: number; y: number }[] = [];
      const maxTrailLength = 80;

      const drawStar = (
        g: Graphics,
        radius: number,
        alpha: number,
        color: number
      ) => {
        const r1 = radius;
        const t = radius * 0.4;

        g.moveTo(0, -r1);
        g.lineTo(t, -t);
        g.lineTo(r1, 0);
        g.lineTo(t, t);
        g.lineTo(0, r1);
        g.lineTo(-t, t);
        g.lineTo(-r1, 0);
        g.lineTo(-t, -t);
        g.closePath();
        g.fill({ color, alpha });
      };

      const createParticle = (x: number, y: number) => {
        const dot = new Graphics();

        // --- SIZE VARIATION ---
        const base = Math.random() * 0.7 + 0.25;
        let scale = 1;
        const r = Math.random();

        if (r < 0.7) scale = 1;
        else if (r < 0.9) scale = 1.5;
        else if (r < 0.97) scale = 2;
        else scale = 3;

        const radius = base * scale;

        // --- RANDOM BRIGHTNESS / LIGHTER COLOR VARIATION ---
        // Most particles stay normal cyan, some become brighter/lighter.
        let color = 0x7dd3fc;
        let alpha = Math.max(0.4, 0.9 - (scale - 1) * 0.2);

        const brightnessRoll = Math.random();

        if (brightnessRoll < 0.08) {
          // brightest particles
          color = 0xe0f7ff;
          alpha = Math.min(1, alpha + 0.28);
        } else if (brightnessRoll < 0.22) {
          // medium-bright particles
          color = 0xb8ecff;
          alpha = Math.min(1, alpha + 0.16);
        } else if (brightnessRoll < 0.4) {
          // slightly brighter particles
          color = 0x96e2ff;
          alpha = Math.min(1, alpha + 0.08);
        }

        // --- STAR SHAPE (✦) ---
        drawStar(dot, radius, alpha, color);

        dot.x = x;
        dot.y = y;
        particleLayer.addChild(dot);

        return {
          graphic: dot,
          x,
          y,
          homeX: x,
          homeY: y,
          vx: 0,
          vy: 0,
          driftOffset: Math.random() * Math.PI * 2,
          driftSpeed: Math.random() * 0.18 + 0.05,
          orbitAngle: Math.random() * Math.PI * 2,
          orbitRadius: Math.random() * 28 + 12,
          orbitSpeed: Math.random() * 0.07 + 0.025,
          followSpeed: Math.random() * 0.075 + 0.05,
          isCaptured: false,
          trailIndex: Math.floor(Math.random() * 55),
        } satisfies Particle;
      };

      const createParticles = () => {
        particleLayer.removeChildren();
        particles = [];
        const width = window.innerWidth;
        const height = window.innerHeight;
        for (let i = 0; i < particleCount; i += 1) {
          particles.push(
            createParticle(Math.random() * width, Math.random() * height)
          );
        }
      };

      const explode = () => {
        burstEnergy = 1;
        for (const p of particles) {
          const dx = p.x - swirlX;
          const dy = p.y - swirlY;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const maxR = Math.max(window.innerWidth, window.innerHeight) * 0.6;

          if (dist < maxR) {
            const nx = dx / dist;
            const ny = dy / dist;
            const falloff = Math.pow(1 - dist / maxR, 0.5);
            const force = (8 + Math.random() * 6) * (falloff * 1.8 + 0.4);
            const tang = (Math.random() - 0.5) * 3;

            p.vx = nx * force + -ny * tang;
            p.vy = ny * force + nx * tang;
          }

          p.isCaptured = false;
        }
      };

      createParticles();

      const onResize = () => {
        swirlX = window.innerWidth / 2;
        swirlY = window.innerHeight / 2;
        swirlVX = 0;
        swirlVY = 0;
        swirlHistory = [];
        createParticles();
      };

      const onMouseMove = (e: MouseEvent) => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        mouseRef.current.active = true;
      };

      const onMouseDown = (e: MouseEvent) => {
        if (e.button !== 0) return;

        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        mouseRef.current.active = true;
        mouseRef.current.pressed = true;
        mouseRef.current.pullRadius = 0;
      };

      const onMouseUp = (e: MouseEvent) => {
        if (e.button !== 0) return;

        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        explode();
        mouseRef.current.pressed = false;
        mouseRef.current.pullRadius = 0;
      };

      const onMouseLeave = () => {
        mouseRef.current.active = false;
        mouseRef.current.pressed = false;
        mouseRef.current.pullRadius = 0;
      };

      window.addEventListener("resize", onResize);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mouseleave", onMouseLeave);

      app.ticker.add(() => {
        time += 0.008;
        const mouse = mouseRef.current;

        const targetX = mouse.x + mouse.offsetX;
        const targetY = mouse.y + mouse.offsetY;

        if (mouse.pressed) {
          mouse.pullRadius = Math.min(
            Math.max(window.innerWidth, window.innerHeight) * 1.2,
            mouse.pullRadius + 18
          );
        }

        const springStrength = 0.12;
        const damping = 0.72;

        swirlVX = swirlVX * damping + (targetX - swirlX) * springStrength;
        swirlVY = swirlVY * damping + (targetY - swirlY) * springStrength;

        swirlX += swirlVX;
        swirlY += swirlVY;

        swirlHistory.unshift({ x: swirlX, y: swirlY });
        if (swirlHistory.length > maxTrailLength) {
          swirlHistory.pop();
        }

        burstEnergy *= 0.985;

        for (const p of particles) {
          // --- CUT THROUGH (disabled when pressed) ---
          if (mouse.active && !mouse.pressed) {
            const mx = mouse.x;
            const my = mouse.y - 10;

            const repelRadius = 60;
            const repelStrength = 0.25;

            const dx = p.x - mx;
            const dy = p.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;

            if (dist < repelRadius) {
              const nx = dx / dist;
              const ny = dy / dist;
              const falloff = 1 - dist / repelRadius;
              const force = falloff * repelStrength;

              p.x += nx * force * 20;
              p.y += ny * force * 20;
            }
          }

          if (mouse.active && mouse.pressed) {
            const dx = p.x - swirlX;
            const dy = p.y - swirlY;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;

            if (dist < mouse.pullRadius) {
              p.isCaptured = true;
              p.orbitAngle += p.orbitSpeed;

              const historyPoint =
                swirlHistory[Math.min(p.trailIndex, swirlHistory.length - 1)] ??
                { x: swirlX, y: swirlY };

              const targetPX =
                historyPoint.x + Math.cos(p.orbitAngle) * p.orbitRadius;
              const targetPY =
                historyPoint.y + Math.sin(p.orbitAngle) * p.orbitRadius;

              p.x += (targetPX - p.x) * p.followSpeed;
              p.y += (targetPY - p.y) * p.followSpeed;
              p.vx = 0;
              p.vy = 0;
            } else {
              const targetHomeX =
                p.homeX + Math.cos(time * p.driftSpeed + p.driftOffset) * 4;
              const targetHomeY =
                p.homeY + Math.sin(time * p.driftSpeed + p.driftOffset) * 4;

              p.x += p.vx;
              p.y += p.vy;
              p.vx *= 0.975;
              p.vy *= 0.975;
              p.x += (targetHomeX - p.x) * 0.02;
              p.y += (targetHomeY - p.y) * 0.02;
            }
          } else {
            const targetHomeX =
              p.homeX + Math.cos(time * p.driftSpeed + p.driftOffset) * 4;
            const targetHomeY =
              p.homeY + Math.sin(time * p.driftSpeed + p.driftOffset) * 4;

            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.975;
            p.vy *= 0.975;

            const homePull = 0.0015 + (1 - burstEnergy) * 0.0045;
            p.x += (targetHomeX - p.x) * homePull;
            p.y += (targetHomeY - p.y) * homePull;
          }

          p.graphic.x = p.x;
          p.graphic.y = p.y;
        }
      });

      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
        window.removeEventListener("mouseleave", onMouseLeave);
      };
    };

    init().then((fn) => {
      cleanup = fn;
    });

    return () => {
      destroyed = true;
      cleanup?.();
      app.destroy(true, { children: true });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[5] h-full w-full"
      aria-hidden="true"
    />
  );
}