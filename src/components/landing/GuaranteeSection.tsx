const GuaranteeSection = () => {
  return (
    <section className="bg-guarantee px-4 py-12">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-4xl text-secondary-foreground shadow-lg">
          🛡️
        </div>

        <h2 className="mb-4 text-2xl font-bold text-foreground">
          7 DIAS DE GARANTIA INCONDICIONAL
        </h2>

        <p className="text-base leading-relaxed text-muted-foreground">
          Não gostou? Devolvemos 100% do seu dinheiro. Sem perguntas, sem
          burocracia. O risco é todo nosso.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
