"use client";

import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  size: number;
}

export default function MouseGlowTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new trail point
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        size: 20 + Math.random() * 10,
      });

      // Limit trail length
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail
      trailRef.current = trailRef.current.filter((point) => {
        point.opacity -= 0.08;
        point.size *= 0.95;
        return point.opacity > 0;
      });

      trailRef.current.forEach((point, index) => {
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          point.size
        );
        
        const hue = 270 + index * 5; // Purple spectrum
        gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, ${point.opacity * 0.6})`);
        gradient.addColorStop(0.5, `hsla(${hue}, 80%, 50%, ${point.opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${hue}, 80%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw cursor glow
      const { x, y } = mouseRef.current;
      const cursorGradient = ctx.createRadialGradient(x, y, 0, x, y, 30);
      cursorGradient.addColorStop(0, "rgba(168, 85, 247, 0.4)");
      cursorGradient.addColorStop(0.5, "rgba(168, 85, 247, 0.2)");
      cursorGradient.addColorStop(1, "rgba(168, 85, 247, 0)");
      ctx.fillStyle = cursorGradient;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: "screen" }}
    />
  );
}