// -------------------------
// l'operateur !
// -------------------------
const container = document.querySelector(".container")!; // le ! indique que container ne sera jamais null
console.log(container.children);

// -------------------------
// l'operateur ? ou optional chaining
// -------------------------

type Job = {
  title: string;
  description?: string; // le ? indique que description est optionnelle
  salary: number;
};

const user1: Job = {
  title: "Developer",
  salary: 50000,
  description: "Develops software applications", // description est optionnelle
};

console.log(user1?.description);

// -------------------------
// optional operators
// -------------------------

function message(msg?: string) {
  if (msg) {
    console.log(msg);
  } else {
    console.log("No message provided");
  }
}

message("Hello, TypeScript!"); // Affiche: Hello, TypeScript!
message(); // Affiche: No message provided

// -------------------------
// optional internal properties
// -------------------------

interface House {
  rooms: number;
  price: number;
  garage?: number; // le ? indique que garage est optionnelle
}

const house1: House = {
  rooms: 3,
  price: 250000,
};

const house2: House = {
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

function allertUser(message: string): never {
  throw message;
}
allertUser("This is an alert!"); // Cette fonction ne retourne jamais, elle lance une exception
