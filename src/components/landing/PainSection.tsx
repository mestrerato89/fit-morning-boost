const pains = [
  "Acorda atrasada e toma só café preto?",
  "Come pão/presunto e passa mal de fome às 10h?",
  "Quer emagrecer mas odeia comida sem graça?",
  "Não tem tempo de preparar nada nutritivo?",
];

const PainSection = () => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Você também já...
        </h2>

        <ul className="mb-8 space-y-4">
          {pains.map((pain, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-lg bg-muted p-4 text-base text-foreground"
            >
              <span className="mt-0.5 text-xl text-destructive">❌</span>
              <span>{pain}</span>
            </li>
          ))}
        </ul>

        <p className="text-center text-lg font-semibold text-primary">
          Existe um jeito mais inteligente de começar o dia...
        </p>
      </div>
    </section>
  );
};

export default PainSection;
