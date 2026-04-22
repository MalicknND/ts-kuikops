// -------------------------
// les classes et les interfaces sont des concepts fondamentaux de la programmation orientée objet en TypeScript. Les classes permettent de définir des objets avec des propriétés et des méthodes, tandis que les interfaces définissent des contrats pour les objets, spécifiant les propriétés et les méthodes qu'ils doivent implémenter. Ces concepts facilitent la structuration du code, la réutilisation et la maintenance, tout en offrant une meilleure organisation et une meilleure lisibilité du code.
// -------------------------

interface Country {
  name: string;
  population: number;
  lang: string[];
}

class Senegal implements Country {
  constructor(
    public name: string,
    public population: number,
    public lang: string[],
    public capital?: string,
  ) {}
}

const senegal = new Senegal("Senegal", 17000000, ["French", "Wolof"], "Dakar");
console.log(senegal);

class France implements Country {
  constructor(
    public name: string,
    public population: number,
    public lang: string[],
  ) {}
}
const france = new France("France", 67000000, ["French"]);
console.log(france);

//
class Aquitaine extends France {}
const aquitaine = new Aquitaine("Aquitaine", 3000000, ["French"]);
console.log(aquitaine);
