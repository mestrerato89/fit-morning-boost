import { useState, useEffect } from "react";

const StickyFooter = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">Por apenas</p>
          <p className="text-lg font-extrabold text-secondary">
            R$37,85
          </p>
        </div>
        <a
          href="#"
          className="pulse-cta rounded-lg bg-secondary px-6 py-3 text-sm font-extrabold text-secondary-foreground shadow-lg transition-all hover:brightness-110"
        >
          COMPRAR AGORA →
        </a>
      </div>
    </div>
  );
};

export default StickyFooter;
