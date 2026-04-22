// -------------------------
// l'operateur !
// -------------------------
const container = document.querySelector(".container"); // le ! indique que container ne sera jamais null
console.log(container.children);
const user1 = {
    title: "Developer",
    salary: 50000,
    description: "Develops software applications", // description est optionnelle
};
console.log(user1?.description);
// -------------------------
// optional operators
// -------------------------
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("No message provided");
    }
}
message("Hello, TypeScript!"); // Affiche: Hello, TypeScript!
message(); // Affiche: No message provided
const house1 = {
    rooms: 3,
    price: 250000,
};
const house2 = {
    rooms: 4,
    price: 350000,
    garage: 2, // garage est optionnelle
};
console.log(house1.garage); // Affiche: undefined
console.log(house2.garage); // Affiche: 2
// -------------------------
// l'operateur ??
// -------------------------
const data = ""; // une chaîne vide est considérée comme falsy
const display = data ?? "Hello, World!"; // affiche "Hello, World!" car data est falsy
console.log(display); // Affiche: Hello, World!
// -------------------------
// Never
// -------------------------
function allertUser(message) {
    throw message;
}
allertUser("This is an alert!"); // Cette fonction ne retourne jamais, elle lance une exception
export {};
