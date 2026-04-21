// les types par inférence est une fonctionnalité de TypeScript qui permet au compilateur de déduire automatiquement le type d'une variable en fonction de sa valeur initiale. Cela signifie que lorsque vous déclarez une variable et lui assignez une valeur, TypeScript peut déterminer le type de cette variable sans que vous ayez besoin de l'annoter explicitement.
let str = "string";
let num = 42;
let array = [];
let obj = {};
let bool = true;

let anything;
let randomNumber: number;
// randomNumber = "string"; // Erreur : Type 'string' is not assignable to type 'number'.

const conversion = (celcius: number): number => {
  return (celcius * 9) / 5 + 32;
};
console.log(conversion(10)); // Affiche 50, la conversion de 10 degrés Celsius en Fahrenheit

// les types de base en TypeScript incluent :
// 1. number : pour les nombres, qu'ils soient entiers ou à virgule flottante.
let num1: number = 42;
// 2. string : pour les chaînes de caractères.
let str1: string = "Hello, TypeScript!";
// 3. boolean : pour les valeurs true ou false.
let bool1: boolean = true;
// 4. any : un type qui peut représenter n'importe quelle valeur, désactivant ainsi la vérification de type.
let anything1: any = "Hello, any!";
// 5. void : utilisé pour les fonctions qui ne retournent pas de valeur.
function doSomething(): void {
  console.log("Doing something...");
}
// 6. null et undefined : pour représenter l'absence de valeur ou une valeur non définie.
let nullValue: null = null;
let undefinedValue: undefined = undefined;
// 7. symbol : pour les valeurs uniques et immuables, souvent utilisées comme clés d'objets.
let sym1: symbol = Symbol("unique");
// 8. bigint : pour les nombres entiers de grande taille.
let bigInt1: bigint = 9007199254740991n;
