import CountdownTimer from "./CountdownTimer";

const OfferSection = () => {
  return (
    <section id="oferta" className="bg-offer px-4 py-12">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-xl text-muted-foreground line-through">
          De R$97,00
        </p>
        <p className="mt-2 text-5xl font-extrabold text-secondary">
          12x de R$37,85
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Ou R$97 à vista (economize R$20)
        </p>

        {/* Security badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-foreground">
          <span>🔒 Pagamento 100% seguro</span>
          <span>✅ Garantia de 7 dias</span>
          <span>📱 Acesso imediato no celular</span>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="pulse-cta mt-8 block rounded-xl bg-primary py-5 text-center text-lg font-extrabold text-primary-foreground shadow-xl transition-all hover:brightness-110"
        >
          SIM! QUERO EMAGRECER COMENDO GOSTOSO →
        </a>

        {/* Countdown */}
        <div className="mt-6">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
