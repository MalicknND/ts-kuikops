// -------------------------
// Generics in TypeScript
// -------------------------
const Touba = {
    name: "Touba",
    population: 1000000,
    addionals: {
        location: "Sénégal",
        founded: 1887,
    },
};
const Dakar = {
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
const addRepairDate = (obj) => {
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
export {};
