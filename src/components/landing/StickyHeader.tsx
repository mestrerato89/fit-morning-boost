import { useState, useEffect } from "react";

const StickyHeader = () => {
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

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 px-4 py-2.5 shadow-md backdrop-blur-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <span className="text-sm font-extrabold text-foreground tracking-tight">
          ☀️ 200 Receitas Fit
        </span>
        <a
          href="https://pay.cakto.com.br/vtfffq7_792653"
          className="pulse-cta rounded-lg bg-primary px-5 py-2 text-sm font-extrabold text-primary-foreground shadow-lg transition-all hover:brightness-110"
        >
          QUERO AGORA — R$37,85
        </a>
      </div>
    </div>
  );
};

export default StickyHeader;
