import recipeSkillet from "@/assets/recipe-skillet.png";
import recipePizza from "@/assets/recipe-pizza.png";
import recipePancake from "@/assets/recipe-pancake.png";
import recipeBread from "@/assets/recipe-bread.png";

const recipes = [
  { img: recipeSkillet, name: "Café de frigideira", cal: "195 cal", time: "10 min" },
  { img: recipePizza, name: "Pizza fit", cal: "207 cal", time: "3 ingredientes" },
  { img: recipePancake, name: "Panqueca de banana", cal: "183 cal", time: "7 min" },
  { img: recipeBread, name: "Pão cremoso gratinado", cal: "170 cal", time: "8 min" },
];

const SolutionSection = () => {
  return (
    <section className="bg-solution px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          Apresentando o método que já transformou{" "}
          <span className="text-secondary">+5.000</span> cafés da manhã
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {recipes.map((r, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-transform hover:scale-[1.02]"
            >
              <img
                src={r.img}
                alt={r.name}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-2 top-2 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-bold text-secondary-foreground">
                ✅ Aprovado por nutricionista
              </span>
              <div className="p-3">
                <p className="text-sm font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">
                  {r.cal} • {r.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
