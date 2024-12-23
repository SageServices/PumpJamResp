import { useCallback } from 'react';
import { MatrixDrawProps } from './types';

export const useMatrixDraw = () => {
  return useCallback((ctx: CanvasRenderingContext2D, drops: number[], fontSize: number, chars: string) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    gradient.addColorStop(0, '#60a5fa'); // Light blue
    gradient.addColorStop(1, '#fb923c'); // Modern orange
    
    ctx.fillStyle = gradient;
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      
      ctx.shadowColor = '#60a5fa';
      ctx.shadowBlur = 5;
      ctx.fillText(text, x, y);
      ctx.shadowBlur = 0;
      
      if (y > ctx.canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }, []);
};

export default function MatrixCanvas({ canvasRef }: MatrixDrawProps) {
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
}