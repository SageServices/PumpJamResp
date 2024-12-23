import { useEffect, useRef } from 'react';
import MatrixCanvas, { useMatrixDraw } from './MatrixCanvas';
import { MATRIX_CONFIG } from './config';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const draw = useMatrixDraw();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();

    const columns = Math.floor(canvas.width / MATRIX_CONFIG.fontSize);
    const drops: number[] = new Array(columns).fill(0);

    const animate = () => {
      draw(ctx, drops, MATRIX_CONFIG.fontSize, MATRIX_CONFIG.chars);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [draw]);

  return <MatrixCanvas canvasRef={canvasRef} />;
}