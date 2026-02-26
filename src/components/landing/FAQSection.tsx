import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "As receitas são difíceis?",
    a: "Não! São feitas para quem não sabe cozinhar. Máximo 15 minutos.",
  },
  {
    q: "Precisa de ingredientes caros?",
    a: "Não. Tudo em supermercado comum, custo médio R$15 por semana.",
  },
  {
    q: "Funciona para quem faz jejum intermitente?",
    a: "Sim! Tem opções para quebrar o jejum de forma saudável.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          Perguntas Frequentes
        </h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-card px-4 shadow-sm"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
