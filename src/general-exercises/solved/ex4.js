const { sumDigits, isPrime, reverseNumber } = require("../../utils");
// 1. Advanced string manipulation exercise:
// Given an array of full names, turn them into a single comma-separated string. Also, remove last names from given names.
// Example:
const names = ["João Silva", "Maria Souza", "Carlos Santos"];
const result = names
  .reduce((acc, name) => {
    return acc + `${name.split(" ")[0]}, `;
  }, "")
  .slice(0, -2);
// console.log(result);
// Output: 'John, Mary, Carlos'

// 2. Advanced filtering and transformation exercise:
// Given an array of objects representing books, filter out only books longer than 300 pages
// and turn them into a new array containing only book titles.
// Example:
// Input:
const books = [
  { title: "Book A", pages: 250 },
  { title: "Book B", pages: 350 },
  { title: "Book C", pages: 400 },
  { title: "Book D", pages: 200 },
];
const filteredBooks = books.filter((b) => b.pages > 300).map((b) => b.title);
// console.log(filteredBooks);
// Output: ['Book B', 'Book C']

// 3. Advanced sorting exercise:
// Given an array of numbers, sort them in descending order based on the sum of their digits.
// If the sum of digits is equal for two numbers, keep the original order.
// Example:
const numbersToSort = [101, 65, 83, 32, 14, 9];
const numbersSortedDesc = numbersToSort.sort((a, b) => {
  const sumA = sumDigits(a);
  const sumB = sumDigits(b);

  if (sumA === sumB) {
    return 0;
  }
  return 1;
});
// console.log(numbersSortedDesc);
// Output: [101, 65, 83, 32, 14, 9]

// 4. Advanced object manipulation exercise:
// Given an array of objects representing products, calculate the total price for each product category
// and return an object containing the category name and total price.
// Example:
// Input:
const products = [
  { name: "Product A", category: "Electronics", price: 500 },
  { name: "Product B", category: "Electronics", price: 700 },
  { name: "Product C", category: "Clothes", price: 100 },
  { name: "Product D", category: "Clothes", price: 50 },
  { name: "Product E", category: "Accessories", price: 200 },
];

const categories = products.reduce(
  (acc, { category, price }) => {
    if (acc[category]) {
      return {
        ...acc,
        [category]: acc[category] + price
      }
    }
    return {
      ...acc,
      [category]: price
    }
  },
  {}
);
// console.log(categories);
// Output:
// {
// Electronics: 1200,
// Clothes: 150,
// Accessories: 200
// }

// 5. Advanced filtering and transformation exercise:
// Given an array of numbers, filter only the prime numbers and turn them into a new array containing the inverted primes.
// Example:
const numbers = [10, 7, 22, 13, 5, 16, 11]
const primeNumbers = numbers.filter(num => isPrime(num)).map(num => Number(reverseNumber(num)))
console.log(primeNumbers)
// Output: [ 7, 31, 5, 11 ]