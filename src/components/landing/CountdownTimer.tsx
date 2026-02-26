import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ h: 4, m: 59, s: 23 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 0, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-1 text-destructive">
      <span className="text-sm font-semibold">Oferta termina em:</span>
      <div className="flex gap-1 font-heading text-xl font-extrabold tabular-nums">
        <span className="rounded bg-destructive px-2 py-1 text-destructive-foreground">
          {pad(time.h)}
        </span>
        <span>:</span>
        <span className="rounded bg-destructive px-2 py-1 text-destructive-foreground">
          {pad(time.m)}
        </span>
        <span>:</span>
        <span className="rounded bg-destructive px-2 py-1 text-destructive-foreground">
          {pad(time.s)}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
