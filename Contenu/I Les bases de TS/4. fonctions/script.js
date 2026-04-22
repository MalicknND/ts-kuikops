const multiply = (a, b, action) => {
    if (action)
        console.log(action);
    return a * b;
};
console.log(multiply(6, 10, "Multiplying 6 and 10")); // Output: Multiplying 6 and 10 \n 60
// fonction simple sans type de retour explicite
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("Alice"); // Output: Hello, Alice!
// fonction avec type de retour explicite
const add = (x, y) => {
    return x + y;
};
console.log(add(5, 7)); // Output: 12
// fonction avec type de retour void
const logMessage = (message) => {
    console.log(`Log: ${message}`);
};
logMessage("This is a log message."); // Output: Log: This is a log message.
// fonction avec type de retour any
const getRandomValue = () => {
    const values = [42, "Hello", true, { name: "Alice" }, [1, 2, 3]];
    return values[Math.floor(Math.random() * values.length)];
};
console.log(getRandomValue()); // Output: Random value from the array
// fonction avec paramètres optionnels //
const greetPerson = (name, greeting) => {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
};
console.log(greetPerson("Bob")); // Output: Hello, Bob!
console.log(greetPerson("Bob", "Hi")); // Output: Hi, Bob!
// fonction avec paramètres par défaut
const greetWithDefault = (name, greeting = "Hello") => {
    return `${greeting}, ${name}!`;
};
console.log(greetWithDefault("Charlie")); // Output: Hello, Charlie!
console.log(greetWithDefault("Charlie", "Welcome")); // Output: Welcome, Charlie!
// function avec paramètres rest //
const sumAll = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(4, 5, 6, 7)); // Output: 22
// fonction avec type de retour d'un objet //
const createUser = (name, age) => {
    return { name, age };
};
console.log(createUser("Dave", 25)); // Output: { name: 'Dave', age: 25 }
// function signatures
let calculate;
calculate = (x, y) => x * y;
console.log(calculate(3, 4)); // Output: 12
// callback functions //
function greetings(fn) {
    fn("Hello from the callback function!");
}
function printToConsole(msg) {
    console.log(msg);
}
greetings(printToConsole); // Output: Hello from the callback function!
export {};
//# sourceMappingURL=script.js.map