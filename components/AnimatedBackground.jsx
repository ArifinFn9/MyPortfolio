"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 bg-[#09090b] overflow-hidden">
      {/* 
        Mask Wrapper (Non-rotated, so the fadeout is aligned perfectly with the screen)
      */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 35%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0) 95%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0) 95%)",
        }}
      >
        {/* 
          Rotated 2D Grid (Scaled to 150% to cover rotated screen corners)
        */}
        <div
          className="absolute w-[150vw] h-[150vh] top-1/2 left-1/2 opacity-[0.25]"
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
          Rotated Decorative Squares (Snapped perfectly to the rotated grid coordinates)
        */}
        <div 
          className="absolute w-[150vw] h-[150vh] top-1/2 left-1/2 opacity-[0.38]"
          style={{
            transform: "translate(-50%, -50%) rotate(15deg)",
          }}
        >
          {/* Centered around viewport using % boundaries */}
          <div className="absolute top-[45%] left-[48%] w-10 h-10 bg-white/5 border border-white/10" />
          <div className="absolute top-[35%] left-[42%] w-20 h-10 bg-white/5 border border-white/10" />
          <div className="absolute top-[38%] right-[40%] w-10 h-20 bg-white/5 border border-white/10" />
          <div className="absolute top-[52%] right-[44%] w-10 h-10 bg-white/5 border border-white/10" />
          <div className="absolute top-[58%] left-[40%] w-10 h-10 bg-white/5 border border-white/10" />
          <div className="absolute top-[54%] right-[38%] w-20 h-10 bg-white/5 border border-white/10" />
          <div className="absolute top-[48%] left-[34%] w-10 h-10 bg-white/5 border border-white/10" />
        </div>
      </div>
    </div>
  );
}
