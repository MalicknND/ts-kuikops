// -------------------------
// les classes de base
// -------------------------
class Book {
    title;
    price;
    dateOfPublication;
    author;
    theme;
    constructor(title, price, dateOfPublication, author, theme) {
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
const book1 = new Book("The Great Gatsby", 20, "1925-04-10", "F. Scott Fitzgerald", ["Classic", "Novel"]);
// console.log(book1);
// console.log(book1.promo());
const addToShelter = (obj) => {
    console.log("Added to shelter:", obj);
};
addToShelter(new Book("To Kill a Mockingbird", 15, "1960-07-11", "Harper Lee", [
    "Classic",
    "Novel",
]));
let onlyBook = [];
onlyBook.push(new Book("To Kill a Mockingbird", 15, "1960-07-11", "Harper Lee", [
    "Classic",
    "Novel",
]));
console.log(onlyBook);
export {};
