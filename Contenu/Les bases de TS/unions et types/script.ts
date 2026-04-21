let code: string | number;
code = "Hello, TypeScript!";
console.log(code); // Output: Hello, TypeScript!

code = 42;
console.log(code); // Output: 42

console.log("////////////////////////////////////");

let arr: (string | number)[];
arr = ["Hello", 42, "World", 3.14];
console.log(arr); // Output: ["Hello", 42, "World", 3.14]

console.log("////////////////////////////////////");

const foo = (param: string | number) => {
  console.log(param);
};
foo("Hello"); // Output: Hello
foo(123); // Output: 123

console.log("////////////////////////////////////");

// les types personnalisés avec des unions
type mixedNumString = string | number;
type boolOrObj = boolean | object;
const base = (param: mixedNumString | boolOrObj) => {
  console.log(param);
};

base("Hello"); // Output: Hello
base(123); // Output: 123
base(true); // Output: true
base({ name: "Alice" }); // Output: { name: 'Alice' }

console.log("////////////////////////////////////");

type element = {
  x: number;
  y: number;
  id: mixedNumString;
  visible: boolean;
};

const button: element = {
  x: 10,
  y: 20,
  id: "btn1",
  visible: true,
};

console.log(button); // Output: { x: 10, y: 20, id: 'btn1', visible: true }
