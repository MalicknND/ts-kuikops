// Intersection Types
const shark1 = {
    fin: 2,
    element: "water",
    gills: true,
    weight: 500,
    length: 6,
    headShape: "hammer",
};
console.log(shark1); // Output: { fin: 2, element: 'water', gills: true, weight: 500, length: 6, headShape: 'hammer' }
const redRose = {
    pollen: true,
    type: "vegetal",
    color: "red",
    thorn: true,
};
console.log(redRose); // Output: { pollen: true, type: 'vegetal', color: 'red', thorn: true }
const automaticResponse = (country) => {
    if (country.lang === "JA") {
        console.log("Hello Japan");
    }
    else if (country.lang === "IT") {
        console.log("Hello Italy");
    }
};
const japanese1 = {
    lang: "JA",
    food: ["Sushi"],
};
automaticResponse(japanese1); // Output: Hello Japan
const spainTrip = {
    malick: {
        age: 30,
        city: "Madrid",
    },
    amine: {
        age: 28,
        city: "Barcelona",
    },
};
console.log(spainTrip);
export {};
