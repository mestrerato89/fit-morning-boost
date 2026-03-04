import ebookMockup from "@/assets/ebook-mockup.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient px-4 pt-8 pb-10">
      <div className="mx-auto max-w-lg">
        {/* Urgency Badge */}
        <div className="mb-6 flex justify-center">
          <span className="badge-pulse inline-block rounded-full bg-destructive px-4 py-2 text-sm font-bold text-destructive-foreground shadow-lg">
            ⚡ PROMOÇÃO POR TEMPO LIMITADO: 61% OFF
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-center text-[28px] font-extrabold leading-tight tracking-tight text-foreground md:text-[32px]">
          ACORDOU SEM TEMPO E COM FOME?{" "}
          <span className="text-primary">
            Prepare um café da manhã DELICIOSO em 10 minutos
          </span>{" "}
          que emagrece de verdade
        </h1>

        {/* Subheadline */}
        <p className="mb-6 text-center text-lg leading-relaxed text-muted-foreground">
          200 receitas testadas pela Nutri Bruna que vão do fogão à mesa em
          menos tempo que um delivery — sem passar fome até o almoço
        </p>

        {/* Ebook Mockup */}
        <div className="mb-6 flex justify-center">
          <img
            src={ebookMockup}
            alt="E-book 200 Receitas de Café da Manhã Fit - mockup 3D"
            className="w-72 drop-shadow-2xl md:w-80"
          />
        </div>

        {/* CTA Button */}
        <a
          href="#oferta"
          className="pulse-cta mx-auto block w-[90%] rounded-xl bg-primary py-5 text-center text-lg font-extrabold text-primary-foreground shadow-xl transition-all hover:brightness-110"
        >
          QUERO COMEÇAR A EMAGRECER COMENDO BEM →
        </a>

        {/* Microcopy */}
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Pagamento seguro • Acesso imediato • 7 dias de garantia
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
