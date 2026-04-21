let code;
code = "Hello, TypeScript!";
console.log(code); // Output: Hello, TypeScript!
code = 42;
console.log(code); // Output: 42
console.log("////////////////////////////////////");
let arr;
arr = ["Hello", 42, "World", 3.14];
console.log(arr); // Output: ["Hello", 42, "World", 3.14]
console.log("////////////////////////////////////");
const foo = (param) => {
    console.log(param);
};
foo("Hello"); // Output: Hello
foo(123); // Output: 123
console.log("////////////////////////////////////");
const base = (param) => {
    console.log(param);
};
base("Hello"); // Output: Hello
base(123); // Output: 123
base(true); // Output: true
base({ name: "Alice" }); // Output: { name: 'Alice' }
console.log("////////////////////////////////////");
const button = {
    x: 10,
    y: 20,
    id: "btn1",
    visible: true,
};
console.log(button); // Output: { x: 10, y: 20, id: 'btn1', visible: true }
export {};
//# sourceMappingURL=script.js.map