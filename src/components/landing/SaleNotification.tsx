import { useState, useEffect } from "react";

const names = [
  "Maria S.", "Ana P.", "Juliana R.", "Camila F.", "Fernanda L.",
  "Patrícia M.", "Luciana B.", "Gabriela T.", "Rafaela D.", "Carolina A.",
  "Beatriz N.", "Larissa O.", "Amanda C.", "Vanessa K.", "Bruna G.",
];

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre",
  "Salvador", "Fortaleza", "Brasília", "Recife", "Goiânia",
];

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomMinutes = () => Math.floor(Math.random() * 30) + 2;

const SaleNotification = () => {
  const [notification, setNotification] = useState<{ name: string; city: string; minutes: number } | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setNotification({
        name: getRandomItem(names),
        city: getRandomItem(cities),
        minutes: getRandomMinutes(),
      });
      setShow(true);

      setTimeout(() => setShow(false), 4000);
    };

    // First notification after 15s
    const initialTimeout = setTimeout(showNotification, 15000);

    // Then every 25-45s
    const interval = setInterval(showNotification, 25000 + Math.random() * 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-20 left-4 z-50 max-w-[280px] rounded-xl border border-border bg-card p-3 shadow-xl transition-all duration-500 ${
        show
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-lg font-bold text-secondary">
          {notification.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">
            {notification.name}
          </p>
          <p className="text-xs text-muted-foreground">
            de {notification.city} comprou há {notification.minutes} min
          </p>
          <p className="mt-1 text-xs font-semibold text-secondary">
            ✅ Compra verificada
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaleNotification;
