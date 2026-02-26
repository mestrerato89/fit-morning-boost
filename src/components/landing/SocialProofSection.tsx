const testimonials = [
  "Gente, eu não sabia que comer saudável podia ser tão gostoso! Já perdi 4kg em 3 semanas só mudando o café da manhã 🤩",
  "Receitas MUITO fáceis, faço tudo em menos de 10 minutos antes de sair pro trabalho. Recomendo demais!",
  "Meu marido não acredita que é comida fit! A pizza fit virou tradição aqui em casa 😍",
];

const stats = [
  { number: "5.000+", label: "e-books vendidos" },
  { number: "4.9/5", label: "estrelas de avaliação" },
  { number: "98%", label: "recomendam para amigas" },
];

const SocialProofSection = () => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          O que dizem quem já transformou o café da manhã:
        </h2>

        {/* Testimonials */}
        <div className="mb-10 space-y-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-muted p-4 text-sm text-foreground shadow-sm"
            >
              <div className="mb-1 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                  {["AM", "CS", "RF"][i]}
                </div>
                <div>
                  <p className="text-xs font-bold">
                    {["Ana Maria", "Carol S.", "Renata F."][i]}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Compradora verificada ✅
                  </p>
                </div>
              </div>
              <p className="leading-relaxed">{t}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl font-extrabold text-secondary">
                {s.number}
              </p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
