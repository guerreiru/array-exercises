const {
  getValue,
  capitalizeFirstLetter,
} = require("../../utils");

// 1. Advanced Data Aggregation:
// Exercise:
// Given an array of objects representing students,
// calculate the average age of male students and the average age of female students separately.
// Input = [
//   { name: "Alice", age: 20, gender: "female" },
//   { name: "Bob", age: 22, gender: "male" },
//   { name: "Carol", age: 18, gender: "female" },
//   { name: "Dave", age: 26, gender: "male" },
//   { name: "Eve", age: 24, gender: "female" },
// ];
// Output = {
//   maleAverageAge: 24,
//   femaleAverageAge: 20.666666666666668
// }

// 2. Advanced Data Search:
// Exercise:
// Given an array of objects representing products,
// find the product with the highest price and the product with the lowest price.
// Input = [
//   { name: "Product A", price: 10 },
//   { name: "Product B", price: 5 },
//   { name: "Product C", price: 8 },
//   { name: "Product D", price: 15 },
// ];
// Output =
// {
//   highestPriceProduct: { name: 'Product D', price: 15 },
//   lowestPriceProduct: { name: 'Product B', price: 5 }
// }

// 3. Advanced Transformation:
// Exercise:
// Given an array of numbers, transform the numbers as follows:
// - If the number is divisible by 3, replace it with 'Fizz'.
// - If the number is divisible by 5, replace it with 'Buzz'.
// - If the number is divisible by both 3 and 5, replace it with 'FizzBuzz'.
// - For all other numbers, leave them unchanged.
// Input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// Output =
// [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

// 4. Advanced Filtering and Transformation:
// Exercise:
// Given an array of objects representing employees,
// filter out the employees whose names contain duplicate letters.
// Then, transform the remaining employees by capitalizing the first letter of their names.
// Input = [
//   { name: "john", age: 30 },
//   { name: "alice", age: 25 },
//   { name: "bob", age: 35 },
//   { name: "david", age: 28 },
//   { name: "eve", age: 32 },
// ];
// Output = [{ name: 'John', age: 30 }, { name: 'Alice', age: 25 }]
