const bonuses = [
  { title: "Guia de Substitutos Inteligentes", value: "R$19" },
  { title: "30 Marmitas Fit para Congelar", value: "R$15" },
  { title: "60 Sucos Detox Energizantes", value: "R$29" },
];

const BonusSection = () => {
  return (
    <section className="bonus-gradient px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-8 text-center text-2xl font-bold text-primary-foreground">
          COMPRE HOJE E LEVE 3 BÔNUS GRÁTIS
        </h2>

        <div className="space-y-4">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl bg-card p-4 shadow-lg"
            >
              <div>
                <span className="text-xs font-bold text-primary">
                  BÔNUS {i + 1}
                </span>
                <p className="font-bold text-foreground">{b.title}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground line-through">
                  Valor: {b.value}
                </p>
                <p className="font-bold text-secondary">GRÁTIS</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-lg text-primary-foreground line-through">
          R$63 em bônus
        </p>
        <p className="mt-2 text-center text-xl font-extrabold text-accent">
          VOCÊ LEVA TUDO POR:
        </p>
      </div>
    </section>
  );
};

export default BonusSection;
