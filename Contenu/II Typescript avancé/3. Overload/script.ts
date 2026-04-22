// -------------------------
// l'operateur ? ou optional chaining
// -------------------------

// c'est un opérateur qui permet d'accéder à une propriété d'un objet de manière sécurisée, sans risquer une erreur si la propriété n'existe pas ou si l'objet est null ou undefined. Il est représenté par le symbole "?" et est utilisé pour éviter les erreurs de type "Cannot read property 'x' of undefined".
type NumberOrString = number | string;

function combine(a: number, b: number): number;
function combine(a: number, b: string): string;
function combine(a: string, b: number): string;
function combine(a: string, b: string): string;
function combine(a: NumberOrString, b: NumberOrString) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

console.log(combine(1, 2)); // Output: 3
console.log(combine("Hello, ", "world!")); // Output: "Hello, world!"
console.log(combine("The answer is ", 42)); // Output: "The answer is 42"
