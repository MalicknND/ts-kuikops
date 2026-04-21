//  TUPLE = c'est un tableau dont les éléments ont des types différents
//  Les tuples sont utilisés pour représenter des données structurées, comme les enregistrements ou les objets avec des propriétés spécifiques.

let tuple: [boolean, number];
tuple = [true, 42];
console.log(tuple); // Output: [true, 42]
// un défaut : on peut faire un push dans un tuple
tuple.push(false);
console.log(tuple); // Output: [true, 42, false]

console.log("////////////////////////////////////");
// ENUM = c'est un type de données qui permet de définir un ensemble de valeurs nommées.
// Les énumérations sont utilisées pour représenter des ensembles de valeurs constantes, comme les jours de la semaine, les mois de l'année, les couleurs, etc.

// methode1 : c'est la méthode classique pour créer une énumération en JavaScript
// const Roles = {
//   JAVASCRIPT: 1,
//   TYPESCRIPT: 2,
//   PYTHON: 3,
//   JAVA: 4,
// };
//console.log(Roles.JAVASCRIPT); // Output: 1

// methode2 : c'est la méthode recommandée pour créer une énumération en TypeScript
enum Roles {
  JAVASCRIPT,
  TYPESCRIPT,
  PYTHON,
  JAVA,
}
console.log(Roles);
