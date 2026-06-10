"use client";

import { useEffect, useRef, useCallback } from "react";

interface CrackLine {
  x: number;
  y: number;
  branches: { angle: number; length: number; opacity: number }[];
  opacity: number;
  startTime: number;
}

export default function GlassCrackEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cracksRef = useRef<CrackLine[]>([]);
  const animationRef = useRef<number>(0);

  const generateCracks = useCallback((x: number, y: number) => {
    const cracks: CrackLine = {
      x,
      y,
      branches: [],
      opacity: 1,
      startTime: Date.now(),
    };

    // Generate main branches
    const numBranches = 5 + Math.floor(Math.random() * 4);
    for (let i = 0; i < numBranches; i++) {
      const angle = (Math.PI * 2 * i) / numBranches + (Math.random() - 0.5) * 0.5;
      const length = 50 + Math.random() * 100;
      
      // Sub-branches
      const subBranches = [];
      const numSubBranches = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < numSubBranches; j++) {
        const subAngle = angle + (Math.random() - 0.5) * 0.8;
        const subLength = length * (0.3 + Math.random() * 0.4);
        subBranches.push({
          angle: subAngle,
          length: subLength,
          opacity: 0.6 + Math.random() * 0.4,
        });
      }

      cracks.branches.push({
        angle,
        length,
        opacity: 1,
      });

      // Add sub-branches as separate lines
      subBranches.forEach((sub) => {
        cracks.branches.push({
          angle: sub.angle,
          length: sub.length,
          opacity: sub.opacity,
        });
      });
    }

    cracksRef.current.push(cracks);

    // Keep only last 20 cracks to prevent memory issues
    if (cracksRef.current.length > 20) {
      cracksRef.current.shift();
    }
  }, []);

  const drawCracks = useCallback((ctx: CanvasRenderingContext2D) => {
    const currentTime = Date.now();

    cracksRef.current = cracksRef.current.filter((crack) => {
      const age = currentTime - crack.startTime;
      const duration = 4000; // 4 seconds
      crack.opacity = Math.max(0, 1 - age / duration);
      return crack.opacity > 0;
    });

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    cracksRef.current.forEach((crack) => {
      ctx.strokeStyle = `rgba(192, 132, 252, ${crack.opacity})`;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.shadowColor = `rgba(168, 85, 247, ${crack.opacity * 0.8})`;
      ctx.shadowBlur = 10;

      crack.branches.forEach((branch) => {
        ctx.beginPath();
        ctx.moveTo(crack.x, crack.y);
        const endX = crack.x + Math.cos(branch.angle) * branch.length;
        const endY = crack.y + Math.sin(branch.angle) * branch.length;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(192, 132, 252, ${crack.opacity * branch.opacity})`;
        ctx.stroke();

        // Draw smaller secondary cracks
        for (let i = 1; i < 3; i++) {
          const ratio = i / 3;
          const midX = crack.x + (endX - crack.x) * ratio;
          const midY = crack.y + (endY - crack.y) * ratio;
          const subAngle = branch.angle + (Math.random() - 0.5) * 0.3;
          const subLength = branch.length * 0.2 * Math.random();
          
          ctx.beginPath();
          ctx.moveTo(midX, midY);
          ctx.lineTo(
            midX + Math.cos(subAngle) * subLength,
            midY + Math.sin(subAngle) * subLength
          );
          ctx.lineWidth = 1;
          ctx.strokeStyle = `rgba(192, 132, 252, ${crack.opacity * 0.5 * branch.opacity})`;
          ctx.stroke();
        }
      });
    });

    if (cracksRef.current.length > 0) {
      animationRef.current = requestAnimationFrame(() => drawCracks(ctx));
    }
  }, []);

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

    const handleClick = (e: MouseEvent) => {
      generateCracks(e.clientX, e.clientY);
      if (cracksRef.current.length > 0) {
        cancelAnimationFrame(animationRef.current);
        drawCracks(ctx);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationRef.current);
    };
  }, [generateCracks, drawCracks]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
}