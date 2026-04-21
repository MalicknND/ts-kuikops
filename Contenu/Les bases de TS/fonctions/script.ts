const multiply = (a: number, b: number, action?: string) => {
  if (action) console.log(action);
  return a * b;
};

console.log(multiply(6, 10, "Multiplying 6 and 10")); // Output: Multiplying 6 and 10 \n 60

// fonction simple sans type de retour explicite
const greet = (name: string) => {
  console.log(`Hello, ${name}!`);
};

greet("Alice"); // Output: Hello, Alice!

// fonction avec type de retour explicite
const add = (x: number, y: number): number => {
  return x + y;
};

console.log(add(5, 7)); // Output: 12

// fonction avec type de retour void
const logMessage = (message: string): void => {
  console.log(`Log: ${message}`);
};

logMessage("This is a log message."); // Output: Log: This is a log message.

// fonction avec type de retour any
const getRandomValue = (): any => {
  const values = [42, "Hello", true, { name: "Alice" }, [1, 2, 3]];
  return values[Math.floor(Math.random() * values.length)];
};

console.log(getRandomValue()); // Output: Random value from the array

// fonction avec paramètres optionnels //
const greetPerson = (name: string, greeting?: string): string => {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
};

console.log(greetPerson("Bob")); // Output: Hello, Bob!
console.log(greetPerson("Bob", "Hi")); // Output: Hi, Bob!

// fonction avec paramètres par défaut
const greetWithDefault = (name: string, greeting: string = "Hello"): string => {
  return `${greeting}, ${name}!`;
};

console.log(greetWithDefault("Charlie")); // Output: Hello, Charlie!
console.log(greetWithDefault("Charlie", "Welcome")); // Output: Welcome, Charlie!

// function avec paramètres rest //
const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(4, 5, 6, 7)); // Output: 22

// fonction avec type de retour d'un objet //
const createUser = (
  name: string,
  age: number,
): { name: string; age: number } => {
  return { name, age };
};

console.log(createUser("Dave", 25)); // Output: { name: 'Dave', age: 25 }

// function signatures
let calculate: (a: number, b: number) => number;

calculate = (x, y) => x * y;

console.log(calculate(3, 4)); // Output: 12

// callback functions //

function greetings(fn: (a: string) => void) {
  fn("Hello from the callback function!");
}

function printToConsole(msg: string) {
  console.log(msg);
}

greetings(printToConsole); // Output: Hello from the callback function!
