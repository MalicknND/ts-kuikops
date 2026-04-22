// -------------------------
// l'operateur ? ou optional chaining
// -------------------------
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(combine(1, 2)); // Output: 3
console.log(combine("Hello, ", "world!")); // Output: "Hello, world!"
console.log(combine("The answer is ", 42)); // Output: "The answer is 42"
export {};
