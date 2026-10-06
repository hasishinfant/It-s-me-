import React, { useEffect, useState, useRef } from 'react';

export interface CursorPreviewData {
  title: string;
  category: string;
  year: string;
  image?: string;
  metrics?: string;
}

export const PlayfulCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [previewData, setPreviewData] = useState<CursorPreviewData | null>(null);
  const [visible, setVisible] = useState(false);

  const requestRef = useRef<number | null>(null);
  const targetPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setVisible(true);
      targetPos.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [data-interactive]');
        setHovered(!!interactive);

        const customCursorText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
        setCursorText(customCursorText || null);

        // Check for floating 3D window preview
        const previewEl = target.closest('[data-preview-title]');
        if (previewEl) {
          setPreviewData({
            title: previewEl.getAttribute('data-preview-title') || '',
            category: previewEl.getAttribute('data-preview-category') || '',
            year: previewEl.getAttribute('data-preview-year') || '',
            image: previewEl.getAttribute('data-preview-image') || '',
            metrics: previewEl.getAttribute('data-preview-metrics') || '',
          });
        } else {
          setPreviewData(null);
        }
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing animation loop
    let currentX = -100;
    let currentY = -100;

    const animate = () => {
      currentX += (targetPos.current.x - currentX) * 0.2;
      currentY += (targetPos.current.y - currentY) * 0.2;
      setTrailingPos({ x: currentX, y: currentY });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[999] overflow-hidden">
      {/* Precision Core Dot */}
      <div
        className="fixed w-2 h-2 -ml-1 -mt-1 rounded-full bg-neutral-900 transition-transform duration-75 ease-out shadow-sm"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${hovered ? 0.4 : 1})`,
        }}
      />

      {/* Trailing Ring with Magnetic Feel */}
      <div
        className={`fixed rounded-full border border-neutral-900/40 transition-all duration-200 ease-out flex items-center justify-center ${
          hovered
            ? 'w-10 h-10 -ml-5 -mt-5 bg-neutral-900/10 backdrop-blur-[2px] border-neutral-900/60'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) scale(${
            cursorText ? 1.6 : 1
          })`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-medium tracking-tight uppercase text-neutral-900">
            {cursorText}
          </span>
        )}
      </div>

      {/* Floating 3D Preview Window Card (Frames 12–13) */}
      {previewData && (
        <div
          className="fixed pointer-events-none transition-transform duration-150 ease-out z-[1000]"
          style={{
            transform: `translate3d(${trailingPos.x + 28}px, ${trailingPos.y - 120}px, 0) rotate(2deg)`,
          }}
        >
          <div className="w-64 p-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] preserve-3d">
            <div className="h-32 w-full rounded-xl overflow-hidden bg-neutral-950 relative flex items-center justify-center">
              {previewData.image ? (
                <img
                  src={previewData.image}
                  alt={previewData.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-neutral-900 to-neutral-950 text-white">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>{previewData.category}</span>
                    <span>{previewData.year}</span>
                  </div>
                  <div className="text-sm font-semibold tracking-tight">{previewData.title}</div>
                  {previewData.metrics && (
                    <div className="text-[10px] text-emerald-400 font-mono">
                      {previewData.metrics}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="mt-2.5 flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-neutral-900">{previewData.title}</span>
              <span className="text-[10px] uppercase font-mono text-neutral-500">
                {previewData.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PlayfulCursor;
