const { sumDigits, isPrime, reverseNumber } = require("../../utils");
// 1. Advanced string manipulation exercise:
// Given an array of full names, turn them into a single comma-separated string. Also, remove last names from given names.
// Example:
// Input = ["João Silva", "Maria Souza", "Carlos Santos"];
// Output = 'John, Mary, Carlos'

// 2. Advanced filtering and transformation exercise:
// Given an array of objects representing books, filter out only books longer than 300 pages
// and turn them into a new array containing only book titles.
// Example:
// Input = [
//   { title: "Book A", pages: 250 },
//   { title: "Book B", pages: 350 },
//   { title: "Book C", pages: 400 },
//   { title: "Book D", pages: 200 },
// ];
// Output = ['Book B', 'Book C']

// 3. Advanced sorting exercise:
// Given an array of numbers, sort them in descending order based on the sum of their digits.
// If the sum of digits is equal for two numbers, keep the original order.
// Example:
// Input = [101, 65, 83, 32, 14, 9];
// Output = [101, 65, 83, 32, 14, 9]

// 4. Advanced object manipulation exercise:
// Given an array of objects representing products, calculate the total price for each product category
// and return an object containing the category name and total price.
// Example:
// Input =  [
//   { name: "Product A", category: "Electronics", price: 500 },
//   { name: "Product B", category: "Electronics", price: 700 },
//   { name: "Product C", category: "Clothes", price: 100 },
//   { name: "Product D", category: "Clothes", price: 50 },
//   { name: "Product E", category: "Accessories", price: 200 },
// ];

// Output = {
//  Electronics: 1200,
//  Clothes: 150,
//  Accessories: 200
// }

// 5. Advanced filtering and transformation exercise:
// Given an array of numbers, filter only the prime numbers and turn them into a new array containing the inverted primes.
// Example:
// Input = [10, 7, 22, 13, 5, 16, 11]
// Output = [ 7, 31, 5, 11 ]