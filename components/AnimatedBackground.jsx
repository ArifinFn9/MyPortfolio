"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas to match the parent container dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const gridSize = 40; // matches backgroundSize: 40px 40px
    const numBlocks = 14; // number of random wandering blocks

    // Create randomized block objects
    const createBlock = (wWidth, wHeight) => {
      const cols = Math.floor(wWidth / gridSize) || 30;
      const rows = Math.floor(wHeight / gridSize) || 30;

      // Random grid-aligned position
      const col = Math.floor(Math.random() * (cols - 4)) + 2;
      const row = Math.floor(Math.random() * (rows - 4)) + 2;

      // Random block dimensions (1x1, 2x1, or 1x2 grid units)
      const shapes = [
        { w: 1, h: 1 },
        { w: 2, h: 1 },
        { w: 1, h: 2 },
        { w: 1, h: 1 },
      ];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      return {
        x: col * gridSize,
        y: row * gridSize,
        width: shape.w * gridSize,
        height: shape.h * gridSize,
        vx: (Math.random() - 0.5) * 0.45, // random horizontal drift velocity
        vy: (Math.random() - 0.5) * 0.45, // random vertical drift velocity
        opacity: 0,
        targetOpacity: 0.25 + Math.random() * 0.65, // 0.25 to 0.90
        fadeState: "in", // "in", "hold", "out"
        holdTime: 50 + Math.floor(Math.random() * 110), // frames to hold
        holdCounter: 0,
        fadeSpeed: 0.008 + Math.random() * 0.014, // random fade rate
      };
    };

    let blocks = Array.from({ length: numBlocks }, () =>
      createBlock(canvas.width, canvas.height)
    );

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blocks.forEach((block, index) => {
        // Update opacity state
        if (block.fadeState === "in") {
          block.opacity += block.fadeSpeed;
          if (block.opacity >= block.targetOpacity) {
            block.opacity = block.targetOpacity;
            block.fadeState = "hold";
          }
        } else if (block.fadeState === "hold") {
          block.holdCounter++;
          if (block.holdCounter >= block.holdTime) {
            block.fadeState = "out";
          }
        } else if (block.fadeState === "out") {
          block.opacity -= block.fadeSpeed;
          if (block.opacity <= 0) {
            block.opacity = 0;
            // Respawn at a completely NEW random grid location & trajectory
            blocks[index] = createBlock(canvas.width, canvas.height);
          }
        }

        // Update position drift
        block.x += block.vx;
        block.y += block.vy;

        // Draw block with subtle glow border
        if (block.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = block.opacity;

          // Fill background square
          ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
          ctx.fillRect(block.x, block.y, block.width, block.height);

          // Draw crisp border
          ctx.strokeStyle = "rgba(255, 255, 255, 0.20)";
          ctx.lineWidth = 1;
          ctx.strokeRect(
            block.x + 0.5,
            block.y + 0.5,
            block.width - 1,
            block.height - 1
          );

          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#09090b] overflow-hidden pointer-events-none">
      {/* 
        Fixed Rotated 2D Grid (Static Position, 15deg Angle)
      */}
      <div
        className="absolute w-[160vw] h-[160vh] top-1/2 left-1/2 opacity-[0.32]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "translate(-50%, -50%) rotate(15deg)",
        }}
      />

      {/* 
        Canvas Layer for 100% Unpredictable & Generative Grid Block Wandering
      */}
      <div
        className="absolute w-[160vw] h-[160vh] top-1/2 left-1/2"
        style={{
          transform: "translate(-50%, -50%) rotate(15deg)",
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* 
        Vignette Radial Overlay (Fades out grid towards edges)
      */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_10%,#09090b_90%)] pointer-events-none" />
    </div>
  );
}
