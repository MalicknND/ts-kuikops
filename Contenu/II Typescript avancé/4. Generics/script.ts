// -------------------------
// Generics in TypeScript
// -------------------------

// -------------------------
// Interface réutilisable avec des types génériques
// -------------------------

interface City<T> {
  name: string;
  population: number;
  addionals: T;
}

const Touba: City<object> = {
  name: "Touba",
  population: 1000000,
  addionals: {
    location: "Sénégal",
    founded: 1887,
  },
};
const Dakar: City<Object[]> = {
  name: "Dakar",
  population: 3000000,
  addionals: [
    { location: "Sénégal", founded: 1857 },
    { location: "Sénégal", founded: 1857 },
  ],
};

// -------------------------
// Generics dans les fonctions
// -------------------------

const addRepairDate = <T>(obj: T) => {
  const lastRepairDate = new Date();
  return { ...obj, lastRepairDate };
};

const auto1 = addRepairDate({ brand: "Toyota", model: "Corolla" });
const auto2 = addRepairDate({
  brand: "Toyota",
  model: "Corolla",
  color: "red",
});
console.log(auto1.model);
