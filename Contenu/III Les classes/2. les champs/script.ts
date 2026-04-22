// -------------------------
// Les champs d'une classe sont les propriétés qui définissent les caractéristiques d'un objet créé à partir de cette classe. Ils sont déclarés à l'intérieur de la classe et peuvent être initialisés dans le constructeur ou directement lors de leur déclaration. Les champs peuvent être de différents types, tels que des chaînes de caractères, des nombres, des tableaux, etc. Ils permettent de stocker des données spécifiques à chaque instance de la classe et peuvent être utilisés pour effectuer des opérations ou des calculs liés à ces données.
// -------------------------

// -------------------------
// Syntaxe raccourcie pour les champs : en utilisant les modificateurs d'accès (public, private, protected) directement dans les paramètres du constructeur, TypeScript crée automatiquement les champs correspondants et les initialise avec les valeurs passées lors de la création de l'instance. Cela permet de réduire le code boilerplate et de rendre la classe plus concise.
// -------------------------
class Book {
  private bookID = 88;
  readonly libraryName = "City Library";

  constructor(
    public title: string,
    public price: number,
    public dateOfPublication: string,
    public author: string,
    public theme?: string[] | undefined,
  ) {}

  promo() {
    console.log(this.bookID);
    console.log("Name" + this.libraryName);
    return this.price * 0.9;
  }
}

// -------------------------
// Syntaxe classique pour les champs : les champs sont déclarés à l'intérieur de la classe, puis initialisés dans le constructeur. Cette approche nécessite plus de code, mais elle offre une plus grande flexibilité pour la manipulation des champs, notamment en permettant d'ajouter des logiques supplémentaires lors de l'initialisation ou de la validation des données.
// -------------------------
/*

class Book {
  title: string;
  price: number;
  dateOfPublication: string;
  author: string;
  theme?: string[] | undefined;

  constructor(
    title: string,
    price: number,
    dateOfPublication: string,
    author: string,
    theme?: string[],
  ) {
    this.title = title;
    this.price = price;
    this.dateOfPublication = dateOfPublication;
    this.author = author;
    this.theme = theme;
  }

  promo() {
    return this.price * 0.9;
  }
}

*/

const book1 = new Book(
  "The Great Gatsby",
  20,
  "1925-04-10",
  "F. Scott Fitzgerald",
  ["Classic", "Novel"],
);

// console.log(book1);
console.log(book1.promo());

const addToShelter = (obj: Book) => {
  // console.log("Added to shelter:", obj);
};

addToShelter(
  new Book("To Kill a Mockingbird", 15, "1960-07-11", "Harper Lee", [
    "Classic",
    "Novel",
  ]),
);

let onlyBook: Book[] = [];
onlyBook.push(
  new Book("To Kill a Mockingbird", 15, "1960-07-11", "Harper Lee", [
    "Classic",
    "Novel",
  ]),
);

// console.log(onlyBook);
