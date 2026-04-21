// ################ Les tableaux d'objets en TypeScript ################
// const fruits = ["apple", "banana", "cherry"];
// fruits.push("date");
// console.log(fruits); // Output: ["apple", "banana", "cherry", "date"

// const mixedArray = ["hello", 42, "world", 3.14];
// console.log(mixedArray); // Output: ["hello", 42, "world", 3.14]

// let numbers: number[] = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// /
// let nums: number[];
// nums.push(1); // Error: Cannot read properties of undefined (reading 'push')
// console.log(nums); // Output: undefined
// nums = [1, 2, 3];
// nums.push(4);
// console.log(nums); // Output: [1, 2, 3, 4]

// un tableau avec des types mixtes
// let random: any[];
// random = [1, "two", true, { name: "Alice" }, [1, 2, 3]];

// ################ Les objets en TypeScript ################

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
// };

// // car.make = 4 // Error: Type 'number' is not assignable to type 'string'
// car.year = 2021; // OK

// let profile: {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

// profile = {
//   name: "Alice",
//   age: 30,
//   isStudent: false,
// };

// let user: {
//   name: string;
//   age: number;
//   favFood: string[];
//   data: any;
// } = {
//   name: "Alice",
//   age: 30,
//   favFood: ["Pizza", "Sushi", "Tacos"],
//   data: {
//     hobbies: ["Reading", "Traveling", "Cooking"],
//     isActive: true,
//   },
// };

// console.log(user.name);

let obj: object;
obj = { name: "Alice", age: 30 };
console.log(obj); // Output: { name: "Alice", age: 30 }
