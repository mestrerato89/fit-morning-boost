import brunaPhoto from "@/assets/bruna-photo.png";

const SpecialistSection = () => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          Quem criou seu novo cardápio matinal:
        </h2>

        <div className="flex flex-col items-center gap-6">
          <img
            src={brunaPhoto}
            alt="Nutricionista Bruna Soares"
            className="h-48 w-48 rounded-full object-cover shadow-lg ring-4 ring-primary/20"
          />

          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground">
              Bruna Soares
            </h3>
            <p className="text-sm text-muted-foreground">CRN XXXXX</p>
          </div>

          <ul className="space-y-2 text-base text-foreground">
            <li className="flex items-start gap-2">
              <span className="text-secondary">✔</span>
              Nutricionista especialista em emagrecimento saudável
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary">✔</span>
              Criou método "Café que Emagrece" com 98% de aprovação
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary">✔</span>
              Já ajudou +2.000 mulheres a perderem peso sem sofrimento
            </li>
          </ul>

          <blockquote className="rounded-xl bg-muted p-5 text-center text-base italic text-foreground shadow-inner">
            <span className="text-4xl leading-none text-primary">"</span>
            <p className="mt-1">
              Criei receitas que parecem trapaça mas são 100% saudáveis. Você
              vai se sentir comendo 'comida de gorda' enquanto emagrece.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
