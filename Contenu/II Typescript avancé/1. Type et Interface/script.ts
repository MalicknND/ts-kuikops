// Intersection Types

type Fish = {
  fin: number;
  element: string;
  gills: true;
};

type Shark = {
  weight: number;
  length: number;
};

type HammerheadShark = Fish &
  Shark & {
    // You can also add additional properties specific to HammerheadShark
    headShape: string;
  };

const shark1: HammerheadShark = {
  fin: 2,
  element: "water",
  gills: true,
  weight: 500,
  length: 6,
  headShape: "hammer",
};

console.log(shark1); // Output: { fin: 2, element: 'water', gills: true, weight: 500, length: 6, headShape: 'hammer' }

// Lier des interfaces

interface Flower {
  pollen: true;
  type: "vegetal";
}

interface Rose extends Flower {
  color: string;
  thorn: boolean;
}

const redRose: Rose = {
  pollen: true,
  type: "vegetal",
  color: "red",
  thorn: true,
};

console.log(redRose); // Output: { pollen: true, type: 'vegetal', color: 'red', thorn: true }

// Union descrminante

type Japan = {
  lang: "JA";
  food: string[];
};

type Italy = {
  lang: "IT";
  food: string[];
};

type Country = Japan | Italy;

const automaticResponse = (country: Country) => {
  if (country.lang === "JA") {
    console.log("Hello Japan");
  } else if (country.lang === "IT") {
    console.log("Hello Italy");
  }
};

const japanese1: Country = {
  lang: "JA",
  food: ["Sushi"],
};

automaticResponse(japanese1); // Output: Hello Japan

// unknown number of properties

interface Group {
  [name: string]: object;
}
const spainTrip: Group = {
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
